import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudOverviewComponent } from './cloud-overview.component';

describe('CloudOverviewComponent', () => {
  let component: CloudOverviewComponent;
  let fixture: ComponentFixture<CloudOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloudOverviewComponent ]
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
