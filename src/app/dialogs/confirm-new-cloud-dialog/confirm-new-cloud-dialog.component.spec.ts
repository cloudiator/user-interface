import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmNewCloudDialogComponent } from './confirm-new-cloud-dialog.component';

describe('ConfirmNewCloudDialogComponent', () => {
  let component: ConfirmNewCloudDialogComponent;
  let fixture: ComponentFixture<ConfirmNewCloudDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmNewCloudDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmNewCloudDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
