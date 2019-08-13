import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleDiagnosticDialogComponent } from './schedule-diagnostic-dialog.component';

describe('ScheduleDiagnosticDialogComponent', () => {
  let component: ScheduleDiagnosticDialogComponent;
  let fixture: ComponentFixture<ScheduleDiagnosticDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleDiagnosticDialogComponent ]
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
