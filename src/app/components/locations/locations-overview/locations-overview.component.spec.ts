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
import {of} from 'rxjs';
import {AppDialogModule} from '../../../app-dialog/app-dialog.module';

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
        AppDialogModule
      ],
      providers: [
        {provide: Router, useValue: router},
        CloudDataService,
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
