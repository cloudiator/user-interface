import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ImagesOverviewComponent} from './images-overview.component';
import {ApiModule} from 'cloudiator-rest-api';
import {HttpClientModule} from '@angular/common/http';
import {CdkTableModule} from '@angular/cdk/table';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CloudDataService} from '../../../services/cloud-data.service';
import {apiConfigFactory} from '../../../app.module';
import {ActivatedRoute, Router, RouterModule} from '@angular/router';
import {of} from 'rxjs';
import {AppDialogModule} from '../../../app-dialog/app-dialog.module';
import {RootStoreModule} from '../../../root-store';

describe('ImagesOverviewComponent', () => {
  let component: ImagesOverviewComponent;
  let fixture: ComponentFixture<ImagesOverviewComponent>;

  const router = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ImagesOverviewComponent],
      imports: [
        RootStoreModule,
        FormsModule,
        ReactiveFormsModule,
        CdkTableModule,
        HttpClientModule,
        ApiModule.forRoot(apiConfigFactory),
        RouterModule,
        AppDialogModule
      ],
      providers: [
        { provide: Router, useValue: router },
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
    fixture = TestBed.createComponent(ImagesOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
