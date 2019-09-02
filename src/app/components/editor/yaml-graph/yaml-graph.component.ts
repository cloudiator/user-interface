import {Component, OnInit} from '@angular/core';
import * as cytoscape from 'cytoscape';
import {EditorService} from '../../../services/editor.service';

/**
 * View showing the GRaph of the Editor job.
 */
@Component({
  selector: 'app-yaml-graph',
  templateUrl: './yaml-graph.component.html',
  styleUrls: ['./yaml-graph.component.scss']
})
export class YamlGraphComponent implements OnInit {

  public isLoading = false;

  /**
   * Graph Style.
   */
  readonly style = [{
    'selector': 'node',
    'style': {
      'width': '50%',
      'height': '50%',
      'content': 'data(name)',
      'font-size': '12px',
      'text-valign': 'center',
      'text-halign': 'center',
      'background-color': '#00447a',
      'text-outline-color': '#00447a',
      'text-outline-width': '1px',
      'color': '#fff',
      'z-index': '10'
    }
  }, {
    'selector': 'edge',
    'style': {
      'opacity': '0.9',
      'line-color': '#92acbe',
      'width': '5px',
      'overlay-padding': '3px'
    }
  }, {
    'selector': 'edge.unhighlighted',
    'style': {
      'opacity': '0.05'
    }
  }];

  /**
   * Layout of graph
   */
  readonly circLayout = {
    name: 'circle',
    fit: true,
    padding: 30,
    avoidOverlap: true,
    boundingBox: undefined,
    animate: false,
    counterclockwise: false,
    radius: 2,
    startAngle: 3 / 2 * Math.PI
  };

  /**
   * Mam zoom of Graph.
   * @type {number}
   */
  readonly maxZoom = 2;
  /**
   * Min zoom of Graph.
   * @type {number}
   */
  readonly minZoom = 0.5;

  /**
   * Cytoscape Graph object.
   */
  private cy;

  /** @ignore */
  constructor(private editorService: EditorService) {
  }

  /** @ignore */
  ngOnInit() {
    // cytoscape.use( coseBilkent );
    this.cy = cytoscape({
      container: document.getElementById('cy'),
      style: this.style
    });
    this.cy.maxZoom(this.maxZoom);
    this.cy.minZoom(this.minZoom);
    this.cy.layout(this.circLayout).run();
    this.cy.elements('node').forEach(ele => ele.ungrabify());
    this.cy.elements('node').forEach(ele => ele.unselectify());
    this.cy.on('resize', () => {
      this.cy.center();
    });

    this.isLoading = true;
    this.editorService.getEditorGraph().subscribe(
      graphData => {
        if (this.cy && graphData) {
          this.cy.remove(this.cy.$(() => true));
          this.cy.add(graphData);
          this.cy.layout(this.circLayout).run();
        }
        this.isLoading = false;
      },
      () => {
        this.isLoading = false;
      }
    );
  }

}
