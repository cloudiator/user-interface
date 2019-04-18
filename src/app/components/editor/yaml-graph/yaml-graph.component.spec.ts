import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YamlGraphComponent } from './yaml-graph.component';
import {RootStoreModule} from '../../../root-store';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ApiModule, JobService} from 'cloudiator-rest-api';
import {apiConfigFactory} from '../../../app.module';
import {AppDialogModule} from '../../../app-dialog/app-dialog.module';
import {of} from 'rxjs';
import * as testData from '../../../../../testing/test-data';

describe('YamlGraphComponent', () => {
  let component: YamlGraphComponent;
  let fixture: ComponentFixture<YamlGraphComponent>;

  const mockJobService = jasmine.createSpyObj('JobService', {
    'findJob': of(testData.job),
    'findJobs': of([testData.job]),
    'jobGraph': of(testData.graphData),
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YamlGraphComponent ],
      imports: [
        RootStoreModule,
        FormsModule,
        HttpClientModule,
        ApiModule.forRoot(apiConfigFactory),
        AppDialogModule
      ],
      providers: [
        {provide: JobService, useValue: mockJobService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YamlGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
