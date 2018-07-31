import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudCardComponent } from './cloud-card.component';

describe('CloudCardComponent', () => {
  let component: CloudCardComponent;
  let fixture: ComponentFixture<CloudCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloudCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
