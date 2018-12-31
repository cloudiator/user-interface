import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NewCloudComponent} from './new-cloud.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CloudDataService} from '../../../services/cloud-data.service';
import {RouterTestingModule} from '@angular/router/testing';
import {ApiModule} from 'cloudiator-rest-api';
import {apiConfigFactory} from '../../../app.module';
import {AppDialogModule} from '../../../app-dialog/app-dialog.module';
import {RootStoreModule} from '../../../root-store';

describe('NewCloudComponent', () => {
  let component: NewCloudComponent;
  let fixture: ComponentFixture<NewCloudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewCloudComponent],
      imports: [
        RootStoreModule,
        ApiModule.forRoot(apiConfigFactory),
        RouterTestingModule,
        FormsModule,
        HttpClientModule,
        AppDialogModule
      ],
      providers: [
        CloudDataService,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCloudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
