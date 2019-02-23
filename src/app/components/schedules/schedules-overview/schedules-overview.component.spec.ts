import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulesOverviewComponent } from './schedules-overview.component';

describe('SchedulesOverviewComponent', () => {
  let component: SchedulesOverviewComponent;
  let fixture: ComponentFixture<SchedulesOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedulesOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulesOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
