import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {YamlEditorComponent} from './yaml-editor.component';
import {FormsModule} from '@angular/forms';
import {combineReducers, StoreModule} from '@ngrx/store';
import * as fromRoot from '../../../reducers';
import {YamlGraphComponent} from '../yaml-graph/yaml-graph.component';
import {YamlDataService} from '../../../services/yaml-data.service';
import {ToastService} from '../../../services/toast.service';
import {HttpClientModule} from '@angular/common/http';
import {ApiModule} from 'cloudiator-rest-api';
import {apiConfigFactory} from '../../../app.module';
import {Overlay} from '@angular/cdk/overlay';
import {Injector} from '@angular/core';
import {EditorService} from '../../../services/editor.service';
import {of} from 'rxjs';
import {resolve} from 'q';

describe('YamlEditorComponent', () => {
  let component: YamlEditorComponent;
  let fixture: ComponentFixture<YamlEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [YamlEditorComponent, YamlGraphComponent],
      imports: [
        StoreModule.forRoot({
          ...fromRoot.reducers,
          'feature': combineReducers(fromRoot.reducers)
        }),
        FormsModule,
        HttpClientModule,
        ApiModule.forRoot(apiConfigFactory)
      ],
      providers: [
        EditorService,
        YamlDataService,
        ToastService,
        Overlay,
        Injector
      ]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YamlEditorComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test', () => {
    // const editorspy = jasmine.createSpyObj('EditorService', ['downloadFile']);
    spyOn(component.editorService, 'downloadFile').and.stub();
    component.onDownload();
    // fixture.detectChanges();
    expect(component.editorService.downloadFile).toHaveBeenCalled();


    spyOn(component.editorService, 'getFilename').and.returnValue(of('name'));
    spyOn(component.editorService, 'uploadFile').and.callFake(() => new Promise(resolve1 => resolve1()));
    // fixture.detectChanges();
    component.onUploadChange({target: {files: null}});

    expect(component.filename).toEqual('name');
  });
});
