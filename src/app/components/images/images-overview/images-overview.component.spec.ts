import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesOverviewComponent } from './images-overview.component';

describe('ImagesOverviewComponent', () => {
  let component: ImagesOverviewComponent;
  let fixture: ComponentFixture<ImagesOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagesOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
