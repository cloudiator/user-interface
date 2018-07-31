import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudOverviewComponent } from './cloud-overview.component';
import {CloudService} from '../../..';
import {CloudDataService} from '../../../services/cloud-data.service';
import {CloudCardComponent} from '../cloud-card/cloud-card.component';

describe('CloudOverviewComponent', () => {
  let component: CloudOverviewComponent;
  let fixture: ComponentFixture<CloudOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CloudOverviewComponent,
        CloudCardComponent
      ],
      imports: [],
      providers: [
        CloudService,
        CloudDataService
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
