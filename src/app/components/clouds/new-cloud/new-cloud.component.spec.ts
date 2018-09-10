import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCloudComponent } from './new-cloud.component';
import {FormsModule} from '@angular/forms';
import {Overlay} from '@angular/cdk/overlay';
import {HttpClient, HttpClientModule, HttpHandler} from '@angular/common/http';
import {CloudDataService} from '../../../services/cloud-data.service';
import * as fromRoot from '../../../reducers';
import {combineReducers, StoreModule} from '@ngrx/store';
import {apiConfigFactory} from '../../../app.module';
import {RouterTestingModule} from '@angular/router/testing';
import { ApiModule } from 'cloudiator-rest-api';
import {DialogService} from '../../../services/dialog.service';
import {ToastService} from '../../../services/toast.service';

describe('NewCloudComponent', () => {
  let component: NewCloudComponent;
  let fixture: ComponentFixture<NewCloudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCloudComponent ],
      imports: [
        StoreModule.forRoot({
          ...fromRoot.reducers,
          'feature': combineReducers(fromRoot.reducers)
        }),
        ApiModule.forRoot(apiConfigFactory),
        RouterTestingModule,
        FormsModule,
        HttpClientModule
      ],
      providers: [
        ToastService,
        DialogService,
        Overlay,
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
