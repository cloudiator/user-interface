import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmNewCloudDialogComponent } from './confirm-new-cloud-dialog.component';
import {DialogRef} from '../../model/dialogRef';
import {DIALOG_DATA} from '../../services/dialog.service';
import {NgModule} from '@angular/core';
import {ToastComponent} from '../toast/toast.component';

describe('ConfirmNewCloudDialogComponent', () => {
  let component: ConfirmNewCloudDialogComponent;
  let fixture: ComponentFixture<ConfirmNewCloudDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmNewCloudDialogComponent ],
      imports: [],
      providers: [
        {provide: DialogRef, useVale: {}},
        { provide: DIALOG_DATA, useValue: {}}
      ]
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
