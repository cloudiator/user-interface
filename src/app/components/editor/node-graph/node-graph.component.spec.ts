import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NodeGraphComponent} from './node-graph.component';
import {RootStoreModule} from '../../../root-store';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ApiModule} from 'cloudiator-rest-api';
import {apiConfigFactory} from '../../../app.module';
import {AppDialogModule} from '../../../app-dialog/app-dialog.module';
import * as testData from 'testing/test-data';

describe('NodeGraphComponent', () => {
  let component: NodeGraphComponent;
  let fixture: ComponentFixture<NodeGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NodeGraphComponent],
      imports: [
        RootStoreModule,
        FormsModule,
        HttpClientModule,
        ApiModule.forRoot(apiConfigFactory),
        AppDialogModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('queueStatus should be set correctly', () => {
    expect(component.queueStatus).toEqual('');

    component.editorService.setEditorQueue(testData.queueScheduled);
    expect(component.queueStatus).toEqual('SCHEDULED');

    component.editorService.setEditorQueue(testData.queueRunning);
    expect(component.queueStatus).toEqual('RUNNING');

    component.editorService.setEditorQueue(testData.queueFailed);
    expect(component.queueStatus).toEqual('FAILED');

    component.editorService.setEditorQueue(testData.queueCompleted);
    expect(component.queueStatus).toEqual('COMPLETED');
  });
});
