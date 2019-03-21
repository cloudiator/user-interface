import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulesViewComponent } from './schedules-view.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ApiModule} from 'cloudiator-rest-api';
import {apiConfigFactory} from '../../../app.module';
import {HttpClientModule} from '@angular/common/http';
import {RootStoreModule} from '../../../root-store';
import {AppDialogModule} from '../../../app-dialog/app-dialog.module';

describe('SchedulesViewComponent', () => {
  let component: SchedulesViewComponent;
  let fixture: ComponentFixture<SchedulesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedulesViewComponent ],
      imports: [
        RootStoreModule,
        BrowserAnimationsModule,
        ApiModule.forRoot(apiConfigFactory),
        HttpClientModule,
        AppDialogModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
