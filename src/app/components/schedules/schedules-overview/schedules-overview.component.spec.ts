import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SchedulesOverviewComponent} from './schedules-overview.component';
import {SchedulesViewComponent} from '../schedules-view/schedules-view.component';
import {RouterTestingModule} from '@angular/router/testing';
import {ApiModule, JobService} from 'cloudiator-rest-api';
import {HttpClientModule} from '@angular/common/http';
import {apiConfigFactory} from '../../../app.module';
import {RootStoreModule} from '../../../root-store';
import {AppDialogModule} from '../../../app-dialog/app-dialog.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SchedulesBottomSheetComponent} from '../schedules-bottom-sheet/schedules-bottom-sheet.component';

describe('SchedulesOverviewComponent', () => {
  let component: SchedulesOverviewComponent;
  let fixture: ComponentFixture<SchedulesOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SchedulesOverviewComponent,
        SchedulesViewComponent,
        SchedulesBottomSheetComponent
      ],
      imports: [
        RootStoreModule,
        RouterTestingModule,
        ApiModule.forRoot(apiConfigFactory),
        HttpClientModule,
        AppDialogModule,
        BrowserAnimationsModule
      ],
      providers: [
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulesOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
