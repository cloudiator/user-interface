import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import {AppRoutingModule} from './app-routing.module';
import {AppStoreModule} from './app-store.module';
import {ApiModule} from './api.module';
import { HttpClientModule } from '@angular/common/http';
import {Configuration, ConfigurationParameters} from './configuration';
import { CloudOverviewComponent } from './components/clouds/cloud-overview/cloud-overview.component';

export function apiConfigFactory(): Configuration {
  const params: ConfigurationParameters = {
    apiKeys: { 'X-API-Key' : 'CloudiatorUI2018'},
    basePath: 'http://134.60.64.119:9000',
  };
  return new Configuration(params);
}

@NgModule({
  declarations: [
    AppComponent,
    CloudOverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppStoreModule,
    ApiModule.forRoot(apiConfigFactory),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
