import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCloudDialogComponent } from './delete-cloud-dialog.component';
import {DialogRef} from '../../../model/dialogRef';
import {DIALOG_DATA} from '../../services/dialog.service';

describe('DeleteCloudDialogComponent', () => {
  let component: DeleteCloudDialogComponent;
  let fixture: ComponentFixture<DeleteCloudDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteCloudDialogComponent ],
      providers: [
        {provide: DialogRef, useVale: {}},
        { provide: DIALOG_DATA, useValue: {}}
      ]
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
