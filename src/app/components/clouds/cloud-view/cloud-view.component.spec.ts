import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CloudViewComponent} from './cloud-view.component';
import {RouterTestingModule} from '@angular/router/testing';
import {CloudDataService} from '../../../services/cloud-data.service';
import {Overlay} from '@angular/cdk/overlay';
import {ActivatedRoute, convertToParamMap} from '@angular/router';
import {of} from 'rxjs';
import {Api, CloudCredential, CloudType} from 'cloudiator-rest-api';
import {CdkTableModule} from '@angular/cdk/table';
import {AppDialogModule} from '../../../app-dialog/app-dialog.module';
import {RootStoreModule} from '../../../root-store';

describe('CloudViewComponent', () => {
  let component: CloudViewComponent;
  let fixture: ComponentFixture<CloudViewComponent>;

  const MockCloudDataService = jasmine.createSpyObj('CloudDataService', {
    'findCloud': of({
      cloudType: CloudType,
      api: <Api> {providerName: ''},
      credential: <CloudCredential> {secret: '', user: ''},
      /**
       * Unique identifier for the cloud
       */
      id: '1',
    }),
    'findHardware': of([]),
    'findImages': of([]),
    'findLocations': of([]),
    'hardwareIsLoading': of(false),
    'imageIsLoading': of(false),
    'locationIsLoading': of(false),
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CloudViewComponent
      ],
      imports: [
        RootStoreModule,
        RouterTestingModule,
        CdkTableModule,
        AppDialogModule
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of(convertToParamMap({id: 1}))
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



