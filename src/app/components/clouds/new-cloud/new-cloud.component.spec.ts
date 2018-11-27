import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NewCloudComponent} from './new-cloud.component';
import {FormsModule} from '@angular/forms';
import {Overlay} from '@angular/cdk/overlay';
import {HttpClientModule} from '@angular/common/http';
import {CloudDataService} from '../../../services/cloud-data.service';
import * as fromRoot from '../../../reducers';
import {combineReducers, StoreModule} from '@ngrx/store';
import {RouterTestingModule} from '@angular/router/testing';
import {ApiModule} from 'cloudiator-rest-api';
import {DialogService} from '../../../app-dialog/services/dialog.service';
import {ToastService} from '../../../app-dialog/services/toast.service';
import {apiConfigFactory} from '../../../app.module';
import {AppDialogModule} from '../../../app-dialog/app-dialog.module';

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
        FormsModule,
        HttpClientModule,
        AppDialogModule
      ],
      providers: [
        CloudDataService,
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
