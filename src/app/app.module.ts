import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './components/app/app.component';
import {AppRoutingModule} from './app-routing.module';
import {AppStoreModule} from './app-store.module';
import {ApiModule, Configuration, ConfigurationParameters} from 'cloudiator-rest-api';
import {HttpClientModule} from '@angular/common/http';
import {CloudOverviewComponent} from './components/clouds/cloud-overview/cloud-overview.component';
import {NewCloudComponent} from './components/clouds/new-cloud/new-cloud.component';
import {FormsModule} from '@angular/forms';
import {CloudViewComponent} from './components/clouds/cloud-view/cloud-view.component';
import {CloudCardComponent} from './components/clouds/cloud-card/cloud-card.component';
import {DialogService} from './services/dialog.service';
import {DeleteCloudDialogComponent} from './dialogs/delete-cloud-dialog/delete-cloud-dialog.component';
import {Overlay, OverlayModule} from '@angular/cdk/overlay';
import {ConfirmNewCloudDialogComponent} from './dialogs/confirm-new-cloud-dialog/confirm-new-cloud-dialog.component';
import {environment} from '../environments/environment';
import {CloudDataService} from './services/cloud-data.service';
import {RuntimeConfigService} from './services/runtime-config.service';

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
    DeleteCloudDialogComponent,
    ConfirmNewCloudDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppStoreModule,
    ApiModule.forRoot(apiConfigFactory),
    HttpClientModule,
    FormsModule,
    OverlayModule
  ],
  providers: [
    Overlay,
    DialogService,
    CloudDataService,
    RuntimeConfigService
  ],
  entryComponents: [
    DeleteCloudDialogComponent,
    ConfirmNewCloudDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
