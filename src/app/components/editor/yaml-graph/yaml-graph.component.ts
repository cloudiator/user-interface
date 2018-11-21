import {Component, Input, OnInit} from '@angular/core';
import * as cytoscape from 'cytoscape';


@Component({
  selector: 'app-yaml-graph',
  templateUrl: './yaml-graph.component.html',
  styleUrls: ['./yaml-graph.component.scss']
})
export class YamlGraphComponent implements OnInit {

  @Input() graphData: any;

  constructor() {
  }

  ngOnInit() {
    // cytoscape.use( coseBilkent );
    const cy = cytoscape({
      container: document.getElementById('cy'),
      elements: this.graphData,
      style: [{
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
      }]
    });
    const circLayout = {
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
    cy.maxZoom(2);
    cy.minZoom(0.5);
    cy.layout(circLayout).run();
    cy.elements('node').forEach(ele => ele.ungrabify());
    cy.elements('node').forEach(ele => ele.unselectify());
  }

}
