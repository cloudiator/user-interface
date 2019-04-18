import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EditorGraphViewComponent, Tab} from './editor-graph-view.component';
import {YamlGraphComponent} from '../yaml-graph/yaml-graph.component';
import {NodeGraphComponent} from '../node-graph/node-graph.component';
import {RootStoreModule} from '../../../root-store';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ApiModule, JobService} from 'cloudiator-rest-api';
import {apiConfigFactory} from '../../../app.module';
import {AppDialogModule} from '../../../app-dialog/app-dialog.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import * as testData from 'testing/test-data';
import {EditorService} from '../../../services/editor.service';
import {of} from 'rxjs';

describe('EditorGraphViewComponent', () => {
  let component: EditorGraphViewComponent;
  let fixture: ComponentFixture<EditorGraphViewComponent>;


  const mockJobService = jasmine.createSpyObj('JobService', {
    'findJob': of(testData.job),
    'findJobs': of([testData.job]),
    'jobGraph': of(testData.graphData),
  });

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
      providers: [
        {provide: JobService, useValue: mockJobService}
      ]
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

  it('subscriptions should set correct values', async () => {
    expect(component.queueStatus).toEqual('');
    expect(component.isValid).toBeFalsy();

    await component.editorService.setEditorQueue(testData.queueScheduled);
    expect(component.queueStatus).toEqual('SCHEDULED');

    await component.editorService.setEditorQueue(testData.queueRunning);
    expect(component.queueStatus).toEqual('RUNNING');

    await component.editorService.setEditorQueue(testData.queueCompleted);
    expect(component.queueStatus).toEqual('COMPLETED');

    await component.editorService.setEditorQueue(testData.queueFailed);
    expect(component.queueStatus).toEqual('FAILED');

    await component.editorService.setEditorJob(testData.job);
    expect(component.isValid).toBeTruthy();
  });

  it('should switch tab correctly', () => {
    component.switchTab(Tab.JOB);
    expect(component.currentTab).toEqual(Tab.JOB);

    component.switchTab(Tab.NODE);
    expect(component.currentTab).toEqual(Tab.NODE);
  });

  it('animation state should set corretly', () => {
    component.currentTab = Tab.JOB;
    expect(component.tabAnimationState(Tab.JOB)).toEqual('center');
    expect(component.tabAnimationState(Tab.NODE)).toEqual('right');

    component.currentTab = Tab.NODE;
    expect(component.tabAnimationState(Tab.NODE)).toEqual('center');
    expect(component.tabAnimationState(Tab.JOB)).toEqual('left');
  });

  it('isTab should return correct result', () => {
    component.currentTab = Tab.JOB;
    expect(component.isTab(Tab.JOB)).toBeTruthy();
    expect(component.isTab(Tab.NODE)).toBeFalsy();

    component.currentTab = Tab.NODE;
    expect(component.isTab(Tab.NODE)).toBeTruthy();
    expect(component.isTab(Tab.JOB)).toBeFalsy();
  });
});
