import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HardwareOverviewComponent} from './hardware-overview.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CdkTableModule} from '@angular/cdk/table';
import {CloudDataService} from '../../../services/cloud-data.service';
import {ApiModule} from 'cloudiator-rest-api';
import {HttpClientModule} from '@angular/common/http';
import {apiConfigFactory} from '../../../app.module';
import {ActivatedRoute, Router, RouterModule} from '@angular/router';
import {of} from 'rxjs';
import {AppDialogModule} from '../../../app-dialog/app-dialog.module';
import {RootStoreModule} from '../../../root-store';
import {ScrollingModule} from '@angular/cdk/scrolling';

describe('HardwareOverviewComponent', () => {
  let component: HardwareOverviewComponent;
  let fixture: ComponentFixture<HardwareOverviewComponent>;

  const router = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HardwareOverviewComponent],
      imports: [
        RootStoreModule,
        FormsModule,
        ReactiveFormsModule,
        CdkTableModule,
        HttpClientModule,
        ApiModule.forRoot(apiConfigFactory),
        RouterModule,
        AppDialogModule,
        ScrollingModule
      ],
      providers: [
        {provide: Router, useValue: router},
        CloudDataService,
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: of({id: null})
          }
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HardwareOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
