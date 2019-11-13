import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SshConsoleDialogComponent} from './ssh-console-dialog.component';
import {AppDialogModule} from '../../app-dialog.module';
import {DialogRef} from '../../model/dialogRef';
import {DIALOG_DATA, DialogService} from '../../services/dialog.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ApiModule} from 'cloudiator-rest-api';
import {apiConfigFactory} from '../../../app.module';
import {RootStoreModule} from '../../../root-store';
import {ToastService} from '../../services/toast.service';

describe('SshConsoleDialogComponent', () => {
  let component: SshConsoleDialogComponent;
  let fixture: ComponentFixture<SshConsoleDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        RootStoreModule,
        HttpClientTestingModule,
        ApiModule.forRoot(apiConfigFactory),
        AppDialogModule
      ],
      providers: [
        {provide: DialogRef, useVale: {}},
        {provide: DIALOG_DATA, useValue: {}}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SshConsoleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
