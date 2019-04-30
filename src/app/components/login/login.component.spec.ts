import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LoginComponent} from './login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ApiModule} from 'cloudiator-rest-api';
import {apiConfigFactory} from '../../app.module';
import {HttpClientModule} from '@angular/common/http';
import {AuthService} from '../../services/auth.service';
import {RootStoreModule} from '../../root-store';
import {RouterTestingModule} from '@angular/router/testing';
import {AppDialogModule} from '../../app-dialog/app-dialog.module';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LoginComponent
      ],
      imports: [
        RootStoreModule,
        FormsModule,
        ReactiveFormsModule,
        ApiModule.forRoot(apiConfigFactory),
        HttpClientModule,
        RouterTestingModule,
        AppDialogModule
      ],
      providers: [
        AuthService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
