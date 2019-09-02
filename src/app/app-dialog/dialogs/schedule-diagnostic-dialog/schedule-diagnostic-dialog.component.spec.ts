import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ScheduleDiagnosticDialogComponent} from './schedule-diagnostic-dialog.component';
import {AppDialogModule} from '../../app-dialog.module';
import {DialogRef} from '../../model/dialogRef';
import {DIALOG_DATA} from '../../services/dialog.service';

describe('ScheduleDiagnosticDialogComponent', () => {
  let component: ScheduleDiagnosticDialogComponent;
  let fixture: ComponentFixture<ScheduleDiagnosticDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ScheduleDiagnosticDialogComponent
      ],
      imports: [],
      providers: [
        {provide: DialogRef, useVale: {}},
        { provide: DIALOG_DATA, useValue: {}}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleDiagnosticDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
