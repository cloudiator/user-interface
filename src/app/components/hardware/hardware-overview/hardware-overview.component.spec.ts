import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HardwareOverviewComponent } from './hardware-overview.component';

describe('HardwareOverviewComponent', () => {
  let component: HardwareOverviewComponent;
  let fixture: ComponentFixture<HardwareOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HardwareOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HardwareOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
