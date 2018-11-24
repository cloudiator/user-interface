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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
