import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCloudComponent } from './new-cloud.component';

describe('NewCloudComponent', () => {
  let component: NewCloudComponent;
  let fixture: ComponentFixture<NewCloudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCloudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCloudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
