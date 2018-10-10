import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HardwareOverviewComponent} from './hardware-overview.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CdkTableModule} from '@angular/cdk/table';
import {CloudDataService} from '../../../services/cloud-data.service';
import {ApiModule, CloudService} from 'cloudiator-rest-api';
import {HttpClientModule} from '@angular/common/http';
import {combineReducers, StoreModule} from '@ngrx/store';
import * as fromRoot from '../../../reducers';
import {DialogService} from '../../../services/dialog.service';
import {ToastService} from '../../../services/toast.service';
import {Overlay} from '@angular/cdk/overlay';
import {Injector} from '@angular/core';
import {apiConfigFactory} from '../../../app.module';
import {ActivatedRoute, Router, RouterModule} from '@angular/router';
import {of} from 'rxjs';

describe('HardwareOverviewComponent', () => {
  let component: HardwareOverviewComponent;
  let fixture: ComponentFixture<HardwareOverviewComponent>;

  const router = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HardwareOverviewComponent],
      imports: [
        StoreModule.forRoot({
          ...fromRoot.reducers,
          'feature': combineReducers(fromRoot.reducers)
        }),
        FormsModule,
        ReactiveFormsModule,
        CdkTableModule,
        HttpClientModule,
        ApiModule.forRoot(apiConfigFactory),
        RouterModule
      ],
      providers: [
        {provide: Router, useValue: router},
        CloudDataService,
        DialogService,
        ToastService,
        Overlay,
        Injector,
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: of({id: null})
          }
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HardwareOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
