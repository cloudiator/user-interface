import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteScheduleDialogComponent } from './delete-schedule-dialog.component';
import {DialogRef} from '../../model/dialogRef';
import {DIALOG_DATA} from '../../services/dialog.service';

describe('DeleteScheduleDialogComponent', () => {
  let component: DeleteScheduleDialogComponent;
  let fixture: ComponentFixture<DeleteScheduleDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteScheduleDialogComponent ],
      providers: [
        {provide: DialogRef, useVale: {}},
        { provide: DIALOG_DATA, useValue: {}}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteScheduleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
