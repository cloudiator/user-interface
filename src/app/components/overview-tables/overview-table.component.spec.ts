import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewTableComponent } from './overview-table.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CdkTableModule} from '@angular/cdk/table';
import {RouterTestingModule} from '@angular/router/testing';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {HttpClientModule} from '@angular/common/http';
import {ApiModule} from 'cloudiator-rest-api';
import {apiConfigFactory} from '../../app.module';
import {CloudDataService} from '../../services/cloud-data.service';
import {RootStoreModule} from '../../root-store';
import {AppDialogModule} from '../../app-dialog/app-dialog.module';
import {ActivatedRoute} from '@angular/router';
import {of} from 'rxjs';

describe('OverviewTableComponent', () => {
  let component: OverviewTableComponent<any>;
  let fixture: ComponentFixture<OverviewTableComponent<any>>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewTableComponent ],
      imports: [
        RootStoreModule,
        FormsModule,
        ReactiveFormsModule,
        CdkTableModule,
        RouterTestingModule,
        ScrollingModule,
        HttpClientModule,
        ApiModule.forRoot(apiConfigFactory),
        AppDialogModule
      ],
      providers: [
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
    fixture = TestBed.createComponent(OverviewTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
