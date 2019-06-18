import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SchedulesOverviewComponent} from './schedules-overview.component';
import {SchedulesViewComponent} from '../schedules-view/schedules-view.component';
import {RouterTestingModule} from '@angular/router/testing';
import {ApiModule} from 'cloudiator-rest-api';
import {HttpClientModule} from '@angular/common/http';
import {apiConfigFactory} from '../../../app.module';
import {RootStoreModule} from '../../../root-store';
import {AppDialogModule} from '../../../app-dialog/app-dialog.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SchedulesBottomSheetComponent} from '../schedules-bottom-sheet/schedules-bottom-sheet.component';
import * as testData from 'testing/test-data';
import {asyncScheduler, of, scheduled} from 'rxjs';

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
      providers: []
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulesOverviewComponent);
    component = fixture.componentInstance;

    spyOn(component.jobDataService, 'findJob').and.callFake(id => {
      return of(testData.allJobs.find(job => job.id === id));
    });
    spyOn(component.processDataService, 'getSchedules').and.returnValue(of(testData.allSchedules));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('schould compose ScheduleViews correctly', () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        expect(component.scheduleViews).toEqual(testData.allScheduleViews);
        resolve();
      }, 500);
    });
  });
});
