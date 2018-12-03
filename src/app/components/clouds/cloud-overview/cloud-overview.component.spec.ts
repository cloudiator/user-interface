import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CloudOverviewComponent} from './cloud-overview.component';
import {CloudDataService} from '../../../services/cloud-data.service';
import {CloudCardComponent} from '../cloud-card/cloud-card.component';
import {RouterTestingModule} from '@angular/router/testing';
import {Observable} from 'rxjs';
import {RootStoreModule} from '../../../root-store';

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
        RootStoreModule,
        RouterTestingModule,
      ],
      providers: [
        {provide: CloudDataService, useValue: mockCloudDataService}
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
