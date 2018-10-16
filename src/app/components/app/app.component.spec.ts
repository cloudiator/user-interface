import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {AppRoutingModule} from '../../app-routing.module';
import {CloudViewComponent} from '../clouds/cloud-view/cloud-view.component';
import {NewCloudComponent} from '../clouds/new-cloud/new-cloud.component';
import {CloudOverviewComponent} from '../clouds/cloud-overview/cloud-overview.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CloudCardComponent} from '../clouds/cloud-card/cloud-card.component';
import {HardwareOverviewComponent} from '../hardware/hardware-overview/hardware-overview.component';
import {CdkTableModule} from '@angular/cdk/table';
import {ImagesOverviewComponent} from '../images/images-overview/images-overview.component';
import {LocationsOverviewComponent} from '../locations/locations-overview/locations-overview.component';
import {YamlEditorComponent} from '../editor/yaml-editor/yaml-editor.component';

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
        YamlEditorComponent
      ],
      imports: [
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        CdkTableModule
      ],
      providers: []
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
