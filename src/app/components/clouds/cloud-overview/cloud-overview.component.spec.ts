import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CloudOverviewComponent} from './cloud-overview.component';
import {CloudDataService} from '../../../services/cloud-data.service';
import {CloudCardComponent} from '../cloud-card/cloud-card.component';
import {RouterTestingModule} from '@angular/router/testing';
import {RootStoreModule} from '../../../root-store';
import {of} from 'rxjs';

describe('CloudOverviewComponent', () => {
  let component: CloudOverviewComponent;
  let fixture: ComponentFixture<CloudOverviewComponent>;

  const mockCloudDataService = jasmine.createSpyObj('CloudDataService', {
    'findClouds': of([])
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
