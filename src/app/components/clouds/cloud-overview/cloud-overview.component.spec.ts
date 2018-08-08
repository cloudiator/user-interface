import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudOverviewComponent } from './cloud-overview.component';
import {CloudDataService} from '../../../services/cloud-data.service';
import {CloudCardComponent} from '../cloud-card/cloud-card.component';
import {RouterTestingModule} from '@angular/router/testing';
import {combineReducers, StoreModule} from '@ngrx/store';
import * as fromRoot from '../../../reducers';
import {Observable} from 'rxjs';

describe('CloudOverviewComponent', () => {
  let component: CloudOverviewComponent;
  let fixture: ComponentFixture<CloudOverviewComponent>;

  const mockCloudDataService = jasmine.createSpyObj('CloudDataService', {
    'findClouds': Observable.create([])
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CloudOverviewComponent,
        CloudCardComponent
      ],
      imports: [
        StoreModule.forRoot({
          ...fromRoot.reducers,
          'feature': combineReducers(fromRoot.reducers)
        }),
        RouterTestingModule,
      ],
      providers: [
        { provide: CloudDataService, useValue: mockCloudDataService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
