import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulesBottomSheetComponent } from './schedules-bottom-sheet.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('SchedulesBottomSheetComponent', () => {
  let component: SchedulesBottomSheetComponent;
  let fixture: ComponentFixture<SchedulesBottomSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedulesBottomSheetComponent ],
      imports: [
        BrowserAnimationsModule
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
