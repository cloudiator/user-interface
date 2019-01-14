import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EditorGraphViewComponent} from './editor-graph-view.component';
import {YamlGraphComponent} from '../yaml-graph/yaml-graph.component';
import {NodeGraphComponent} from '../node-graph/node-graph.component';
import {RootStoreModule} from '../../../root-store';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ApiModule} from 'cloudiator-rest-api';
import {apiConfigFactory} from '../../../app.module';
import {AppDialogModule} from '../../../app-dialog/app-dialog.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('EditorGraphViewComponent', () => {
  let component: EditorGraphViewComponent;
  let fixture: ComponentFixture<EditorGraphViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        EditorGraphViewComponent,
        YamlGraphComponent,
        NodeGraphComponent],
      imports: [
        RootStoreModule,
        FormsModule,
        HttpClientModule,
        ApiModule.forRoot(apiConfigFactory),
        AppDialogModule,
        BrowserAnimationsModule],
      providers: []
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorGraphViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
