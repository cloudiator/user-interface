import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulesBottomSheetComponent } from './schedules-bottom-sheet.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppDialogModule} from '../../../app-dialog/app-dialog.module';
import {NodeService} from 'cloudiator-rest-api';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RootStoreModule} from '../../../root-store';

describe('SchedulesBottomSheetComponent', () => {
  let component: SchedulesBottomSheetComponent;
  let fixture: ComponentFixture<SchedulesBottomSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedulesBottomSheetComponent ],
      imports: [
        BrowserAnimationsModule,
        AppDialogModule,
        HttpClientTestingModule,
        RootStoreModule
      ],
      providers: [
        NodeService
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
