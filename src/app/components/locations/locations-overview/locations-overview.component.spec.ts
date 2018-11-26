import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LocationsOverviewComponent} from './locations-overview.component';
import {combineReducers, StoreModule} from '@ngrx/store';
import * as fromRoot from '../../../reducers';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CdkTableModule} from '@angular/cdk/table';
import {HttpClientModule} from '@angular/common/http';
import {ApiModule} from 'cloudiator-rest-api';
import {apiConfigFactory} from '../../../app.module';
import {ActivatedRoute, Router, RouterModule} from '@angular/router';
import {CloudDataService} from '../../../services/cloud-data.service';
import {DialogService} from '../../../services/dialog.service';
import {ToastService} from '../../../services/toast.service';
import {Overlay} from '@angular/cdk/overlay';
import {Injector, NgModule} from '@angular/core';
import {of} from 'rxjs';
import {ToastComponent} from '../../../dialogs/toast/toast.component';

describe('LocationsOverviewComponent', () => {
  let component: LocationsOverviewComponent;
  let fixture: ComponentFixture<LocationsOverviewComponent>;

  const router = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LocationsOverviewComponent],
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
        RouterModule,
        TestModule
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
    fixture = TestBed.createComponent(LocationsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});



@NgModule({
  declarations: [ToastComponent],
  imports: [], // <-- added this line
  entryComponents: [ToastComponent],
  exports: [ToastComponent],
})
class TestModule {
}
