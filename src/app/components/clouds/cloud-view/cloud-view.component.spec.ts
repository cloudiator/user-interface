import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CloudViewComponent} from './cloud-view.component';
import {RouterTestingModule} from '@angular/router/testing';
import * as fromRoot from '../../../reducers';
import {combineReducers, StoreModule} from '@ngrx/store';
import {CloudDataService} from '../../../services/cloud-data.service';
import {Cloud, CloudService} from '../../../index';
import {Overlay} from '@angular/cdk/overlay';
import {ActivatedRoute, convertToParamMap} from '@angular/router';
import {Observable, observable} from 'rxjs';
import {CloudCredential} from '../../../model/cloudCredential';
import {CloudConfiguration} from '../../../model/cloudConfiguration';
import {Api} from '../../../model/api';
import {CloudType} from '../../../model/cloudType';

describe('CloudViewComponent', () => {
  let component: CloudViewComponent;
  let fixture: ComponentFixture<CloudViewComponent>;

  const MockCloudDataService = jasmine.createSpyObj('CloudDataService', {
    'findCloud': {
      cloudType: CloudType,
      api: <Api> {providerName: ''},
      credential: <CloudCredential> {secret: '', user: ''},
      /**
       * Unique identifier for the cloud
       */
      id: '1',
    }
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CloudViewComponent
      ],
      imports: [
        StoreModule.forRoot({
          ...fromRoot.reducers,
          'feature': combineReducers(fromRoot.reducers)
        }),
        RouterTestingModule,
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: Observable.create(convertToParamMap({id: 1}))
          }
        },
        {provide: Overlay, useValue: null},
        {provide: CloudDataService, useValue: MockCloudDataService}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {

    expect(component).toBeTruthy();
  });
});


