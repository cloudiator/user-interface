import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import { CloudCardComponent } from './cloud-card.component';
import {ActivatedRoute, Router, RouterModule} from '@angular/router';
import {of} from 'rxjs';
import * as testData from 'testing/test-data';

describe('CloudCardComponent', () => {
  let component: CloudCardComponent;
  let fixture: ComponentFixture<CloudCardComponent>;

  const router = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloudCardComponent ],
      imports: [
        RouterModule
      ],
      providers: [
        {provide: Router, useValue: router},
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({id: null})
          }
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudCardComponent);
    component = fixture.componentInstance;

    component.cloud = testData.cloudOne;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
