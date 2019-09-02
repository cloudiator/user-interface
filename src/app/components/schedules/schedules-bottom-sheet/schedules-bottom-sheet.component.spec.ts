import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulesBottomSheetComponent } from './schedules-bottom-sheet.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppDialogModule} from '../../../app-dialog/app-dialog.module';

describe('SchedulesBottomSheetComponent', () => {
  let component: SchedulesBottomSheetComponent;
  let fixture: ComponentFixture<SchedulesBottomSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedulesBottomSheetComponent ],
      imports: [
        BrowserAnimationsModule,
        AppDialogModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulesBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
