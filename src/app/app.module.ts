import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './components/app/app.component';
import {AppRoutingModule} from './app-routing.module';
import {ApiModule, Configuration, ConfigurationParameters} from 'cloudiator-rest-api';
import {HttpClientModule} from '@angular/common/http';
import {CloudOverviewComponent} from './components/clouds/cloud-overview/cloud-overview.component';
import {NewCloudComponent} from './components/clouds/new-cloud/new-cloud.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CloudViewComponent} from './components/clouds/cloud-view/cloud-view.component';
import {CloudCardComponent} from './components/clouds/cloud-card/cloud-card.component';
import {environment} from '../environments/environment';
import {HardwareOverviewComponent} from './components/hardware/hardware-overview/hardware-overview.component';
import {CdkTableModule} from '@angular/cdk/table';
import {ImagesOverviewComponent} from './components/images/images-overview/images-overview.component';
import { LocationsOverviewComponent } from './components/locations/locations-overview/locations-overview.component';
import { YamlEditorComponent } from './components/editor/yaml-editor/yaml-editor.component';
import { YamlGraphComponent } from './components/editor/yaml-graph/yaml-graph.component';
import {AppDialogModule} from './app-dialog/app-dialog.module';
import {RootStoreModule} from './root-store';

export function apiConfigFactory(): Configuration {
  const params: ConfigurationParameters = {
    apiKeys: {'X-API-Key': environment.xApiKey},
    basePath: environment.apiPath,
  };
  return new Configuration(params);
}

@NgModule({
  declarations: [
    AppComponent,
    CloudOverviewComponent,
    NewCloudComponent,
    CloudViewComponent,
    CloudCardComponent,
    HardwareOverviewComponent,
    ImagesOverviewComponent,
    LocationsOverviewComponent,
    YamlEditorComponent,
    YamlGraphComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RootStoreModule,
    ApiModule.forRoot(apiConfigFactory),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CdkTableModule,
    AppDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
