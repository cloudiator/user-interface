import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NewCloudComponent} from './new-cloud.component';
import {FormsModule} from '@angular/forms';
import {Overlay} from '@angular/cdk/overlay';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {CloudDataService} from '../../../services/cloud-data.service';
import * as fromRoot from '../../../reducers';
import {combineReducers, StoreModule} from '@ngrx/store';
import {RouterTestingModule} from '@angular/router/testing';
import {ApiModule,} from 'cloudiator-rest-api';
import {apiConfigFactory} from '../../../app.module';

describe('NewCloudComponent', () => {
  let component: NewCloudComponent;
  let fixture: ComponentFixture<NewCloudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewCloudComponent],
      imports: [
        StoreModule.forRoot({
          ...fromRoot.reducers,
          'feature': combineReducers(fromRoot.reducers)
        }),
        ApiModule.forRoot(apiConfigFactory),
        RouterTestingModule,
        FormsModule
      ],
      providers: [
        {provide: Overlay, useValue: null},
        CloudDataService,
        HttpClient,
        HttpHandler
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCloudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
