import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCloudDialogComponent } from './delete-cloud-dialog.component';

describe('DeleteCloudDialogComponent', () => {
  let component: DeleteCloudDialogComponent;
  let fixture: ComponentFixture<DeleteCloudDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteCloudDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCloudDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
