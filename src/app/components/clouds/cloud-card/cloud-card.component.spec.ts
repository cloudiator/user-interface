import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudCardComponent } from './cloud-card.component';
import {RouterTestingModule} from '@angular/router/testing';
import {Router} from '@angular/router';

describe('CloudCardComponent', () => {
  let component: CloudCardComponent;
  let fixture: ComponentFixture<CloudCardComponent>;

  const router = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloudCardComponent ],
      imports: [],
      providers: [
        { provide: Router, useValue: router }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
