import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {AppRoutingModule} from '../../app-routing.module';
import {CloudViewComponent} from '../clouds/cloud-view/cloud-view.component';
import {NewCloudComponent} from '../clouds/new-cloud/new-cloud.component';
import {CloudOverviewComponent} from '../clouds/cloud-overview/cloud-overview.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CloudCardComponent} from '../clouds/cloud-card/cloud-card.component';
import {HardwareOverviewComponent} from '../overview-tables/hardware-overview/hardware-overview.component';
import {CdkTableModule} from '@angular/cdk/table';
import {ImagesOverviewComponent} from '../overview-tables/images-overview/images-overview.component';
import {LocationsOverviewComponent} from '../overview-tables/locations-overview/locations-overview.component';
import {YamlEditorComponent} from '../editor/yaml-editor/yaml-editor.component';
import {YamlGraphComponent} from '../editor/yaml-graph/yaml-graph.component';
import {RootStoreModule} from '../../root-store';
import {EditorGraphViewComponent} from '../editor/editor-graph-view/editor-graph-view.component';
import {NodeGraphComponent} from '../editor/node-graph/node-graph.component';
import {ApiModule} from 'cloudiator-rest-api';
import {AppDialogModule} from '../../app-dialog/app-dialog.module';
import {SchedulesOverviewComponent} from '../schedules/schedules-overview/schedules-overview.component';
import {SchedulesViewComponent} from '../schedules/schedules-view/schedules-view.component';
import {SchedulesBottomSheetComponent} from '../schedules/schedules-bottom-sheet/schedules-bottom-sheet.component';
import {LoginComponent} from '../login/login.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {AuthService} from '../../services/auth.service';
import {of} from 'rxjs';
import * as testData from 'testing/test-data';
import {ScrollingModule} from '@angular/cdk/scrolling';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CloudViewComponent,
        NewCloudComponent,
        CloudOverviewComponent,
        CloudCardComponent,
        HardwareOverviewComponent,
        ImagesOverviewComponent,
        LocationsOverviewComponent,
        YamlEditorComponent,
        YamlGraphComponent,
        EditorGraphViewComponent,
        NodeGraphComponent,
        SchedulesOverviewComponent,
        SchedulesViewComponent,
        SchedulesBottomSheetComponent,
        LoginComponent
      ],
      imports: [
        RootStoreModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        CdkTableModule,
        ApiModule.forRoot(testData.testApiFactory),
        HttpClientTestingModule,
        AppDialogModule,
        ScrollingModule
      ],
      providers: []
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should hide nav if logged out', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    const authService: AuthService = TestBed.get(AuthService);
    spyOn(authService, 'isLoggedIn').and.returnValue(of(false));
    fixture.detectChanges();

    expect(app.showNav).toBeFalsy();
  });

  it('should show nav if logged in', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    const authService: AuthService = TestBed.get(AuthService);
    spyOn(authService, 'isLoggedIn').and.returnValue(of(true));
    fixture.detectChanges();

    expect(app.showNav).toBeTruthy();
  });
});
