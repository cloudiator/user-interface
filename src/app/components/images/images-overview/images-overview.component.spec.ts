import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ImagesOverviewComponent} from './images-overview.component';
import {ApiModule, CloudService} from 'cloudiator-rest-api';
import {combineReducers, StoreModule} from '@ngrx/store';
import {HttpClientModule} from '@angular/common/http';
import {ToastService} from '../../../services/toast.service';
import {CdkTableModule} from '@angular/cdk/table';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Injector} from '@angular/core';
import {DialogService} from '../../../services/dialog.service';
import {Overlay} from '@angular/cdk/overlay';
import {CloudDataService} from '../../../services/cloud-data.service';
import * as fromRoot from '../../../reducers';
import {apiConfigFactory} from '../../../app.module';
import {Router, RouterModule} from '@angular/router';

describe('ImagesOverviewComponent', () => {
  let component: ImagesOverviewComponent;
  let fixture: ComponentFixture<ImagesOverviewComponent>;

  const router = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ImagesOverviewComponent],
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
        { provide: Router, useValue: router },
        CloudDataService,
        DialogService,
        ToastService,
        Overlay,
        Injector
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
