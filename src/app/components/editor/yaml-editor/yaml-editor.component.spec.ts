import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {YamlEditorComponent} from './yaml-editor.component';
import {FormsModule} from '@angular/forms';
import {combineReducers, StoreModule} from '@ngrx/store';
import * as fromRoot from '../../../reducers';
import {YamlGraphComponent} from '../yaml-graph/yaml-graph.component';
import {YamlDataService} from '../../../services/yaml-data.service';
import {ToastService} from '../../../app-dialog/services/toast.service';
import {HttpClientModule, HttpErrorResponse} from '@angular/common/http';
import {ApiModule} from 'cloudiator-rest-api';
import {apiConfigFactory} from '../../../app.module';
import {Overlay} from '@angular/cdk/overlay';
import {Injector} from '@angular/core';
import {EditorService} from '../../../services/editor.service';
import {never, Observable, of, throwError} from 'rxjs';
import * as testData from '../../../../../testing/test-data';
import {ToastType} from '../../../model/toast';
import {By} from '@angular/platform-browser';
import {take} from 'rxjs/operators';
import {CdkTableModule} from '@angular/cdk/table';
import {AppDialogModule} from '../../../app-dialog/app-dialog.module';

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
        ApiModule.forRoot(apiConfigFactory),
        AppDialogModule
      ],
      providers: [
        EditorService,
        YamlDataService
      ]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YamlEditorComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    // install spies before ngOnInit is triggered
    spyOn(component.editorService, 'getFilename').and.returnValue(of('name'));
    spyOn(component.editorService, 'getEditorValue').and.returnValue(of('value'));

    fixture.detectChanges();

    expect(component).toBeTruthy();
    expect(component.editor).not.toBeUndefined();
    expect(component.editorService.getFilename).toHaveBeenCalledTimes(1);
    expect(component.editorService.getEditorValue).toHaveBeenCalledTimes(1);
  });

  it('data state should be updated correctly', async () => {
    fixture.detectChanges();

    spyOn(component.editorService, 'setEditorValue').and.callThrough();
    spyOn(component.editorService, 'getEditorValue').and.callThrough();
    spyOn(component.editorService, 'setFilename').and.callThrough();
    spyOn(component.editorService, 'getFilename').and.callThrough();

    component.editor.setValue('test');
    expect(component.editorService.setEditorValue).toHaveBeenCalledTimes(1);
    expect(component.editorService.getEditorValue).not.toHaveBeenCalled();
    component.editorService.getEditorValue()
      .pipe(take(1))
      .subscribe(value => expect(value).toEqual('test'));

    component.filename = 'filename';
    expect(component.editorService.setFilename).toHaveBeenCalledTimes(1);
    expect(component.editorService.getFilename).not.toHaveBeenCalled();
    component.editorService.getFilename()
      .pipe(take(1))
      .subscribe(value => expect(value).toEqual('filename'));
  });

  it('downlaodFile should be called', () => {
    spyOn(component.editorService, 'downloadFile').and.stub();
    component.onDownload();
    expect(component.editorService.downloadFile).toHaveBeenCalled();
  });

  it('Filevalues should be set on UploadChange', async () => {
    fixture.detectChanges();

    spyOn(component.editorService, 'getFilename').and.returnValue(of('name'));
    spyOn(component.editorService, 'getEditorValue').and.returnValue(of('value'));
    spyOn(component.editorService, 'uploadFile').and.returnValue(Promise.resolve());

    component.filename = 'before upload';
    component.editor.setValue('before upload');
    expect(component.filename).toEqual('before upload');
    expect(component.editor.getValue()).toEqual('before upload');

    await component.onUploadChange({target: {files: null}}); // @ts-ignore
    expect(component.editorService.uploadFile).toHaveBeenCalled();
    expect(component.filename).toEqual('name');
    expect(component.editor.getValue()).toEqual('value');
    expect(component.editorService.getFilename).toHaveBeenCalledTimes(1);
    expect(component.editorService.getEditorValue).toHaveBeenCalledTimes(1);
  });

  it('onValidate should update', async () => {
    fixture.detectChanges();

    spyOn(component.yamlDataService, 'parseYaml').and.returnValue(of(testData.job));
    spyOn(component.jobDataService, 'jobGraph').and.returnValue(of(testData.graphData));
    spyOn(component.editorService, 'setEditorGraph').and.stub();

    await component.onValidate();

    expect(component.editorService.setEditorGraph).toHaveBeenCalled();
  });

  it('onValidate should handle errors', async () => {
    fixture.detectChanges();

    spyOn(component.jobDataService, 'jobGraph').and.returnValue(of(testData.graphData));
    spyOn(component.editorService, 'setEditorGraph').and.stub();
    spyOn(component.toastService, 'show').and.stub();

    const parseSpy = spyOn(component.yamlDataService, 'parseYaml').and.returnValue(throwError(<HttpErrorResponse>{status: 400}));
    await component.onValidate();

    expect(component.toastService.show).toHaveBeenCalledWith({text: 'Invalid YAML', type: ToastType.DANGER}, true);
    expect(component.toastService.show).toHaveBeenCalledTimes(1);

    parseSpy.and.returnValue(throwError(<HttpErrorResponse>{status: 666}));
    await component.onValidate();

    expect(component.toastService.show).toHaveBeenCalledWith({text: 'Unexpected Error', type: ToastType.DANGER}, true);
    expect(component.toastService.show).toHaveBeenCalledTimes(2);

    parseSpy.and.returnValue(throwError({}));
    await component.onValidate();

    expect(component.toastService.show).toHaveBeenCalledWith({text: 'Unexpected Error', type: ToastType.DANGER}, true);
    expect(component.toastService.show).toHaveBeenCalledTimes(3);
  });
});
