import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SshConsoleDialogComponent } from './ssh-console-dialog.component';

describe('SshConsoleDialogComponent', () => {
  let component: SshConsoleDialogComponent;
  let fixture: ComponentFixture<SshConsoleDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SshConsoleDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SshConsoleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
