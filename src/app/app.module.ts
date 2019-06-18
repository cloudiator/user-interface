import {BrowserModule, HAMMER_GESTURE_CONFIG, HammerGestureConfig} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import * as Hammer from 'hammerjs';

import {AppComponent} from './components/app/app.component';
import {AppRoutingModule} from './app-routing.module';
import {ApiModule, Configuration, ConfigurationParameters} from 'cloudiator-rest-api';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {CloudOverviewComponent} from './components/clouds/cloud-overview/cloud-overview.component';
import {NewCloudComponent} from './components/clouds/new-cloud/new-cloud.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CloudViewComponent} from './components/clouds/cloud-view/cloud-view.component';
import {CloudCardComponent} from './components/clouds/cloud-card/cloud-card.component';
import {HardwareOverviewComponent} from './components/overview-tables/hardware-overview/hardware-overview.component';
import {CdkTableModule} from '@angular/cdk/table';
import {ImagesOverviewComponent} from './components/overview-tables/images-overview/images-overview.component';
import {LocationsOverviewComponent} from './components/overview-tables/locations-overview/locations-overview.component';
import {YamlEditorComponent} from './components/editor/yaml-editor/yaml-editor.component';
import {YamlGraphComponent} from './components/editor/yaml-graph/yaml-graph.component';
import {AppDialogModule} from './app-dialog/app-dialog.module';
import {RootStoreModule} from './root-store';
import {EditorGraphViewComponent} from './components/editor/editor-graph-view/editor-graph-view.component';
import {NodeGraphComponent} from './components/editor/node-graph/node-graph.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginComponent} from './components/login/login.component';
import {HttpErrorInterceptor} from './guards/http-error.interceptor';
import {HttpAuthInterceptor} from './guards/http-auth.interceptor';
import { SchedulesOverviewComponent } from './components/schedules/schedules-overview/schedules-overview.component';
import { SchedulesViewComponent } from './components/schedules/schedules-view/schedules-view.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { SchedulesBottomSheetComponent } from './components/schedules/schedules-bottom-sheet/schedules-bottom-sheet.component';
import {environment} from '../environments/environment';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { OverviewTableComponent } from './components/overview-tables/overview-table.component';

/**
 * Default configuration required by the swagger API Module.
 * @return {Configuration}
 */
export function apiConfigFactory(): Configuration {
  const params: ConfigurationParameters = {
    apiKeys: {'X-API-Key': ''},
    // ${api_path} is the basic value, the auth interceptor is looking for to replace
    basePath: '${api_path}',
  };
  return new Configuration(params);
}

/**
 * Configuration for HammerJS.
 */
export class BottomSheetHammerConfig extends HammerGestureConfig {
  /** @ignore */
  overrides = <any> {
    pan: { direction: Hammer.DIRECTION_VERTICAL },
    swipe: { direction: Hammer.DIRECTION_VERTICAL },
  };
}

/**
 * APp Main Module.
 */
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
    EditorGraphViewComponent,
    NodeGraphComponent,
    LoginComponent,
    SchedulesOverviewComponent,
    SchedulesViewComponent,
    SchedulesBottomSheetComponent,
    OverviewTableComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RootStoreModule,
    ApiModule.forRoot(apiConfigFactory),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CdkTableModule,
    AppDialogModule,
    FlexLayoutModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    ScrollingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpAuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    },
    { provide: HAMMER_GESTURE_CONFIG, useClass: BottomSheetHammerConfig}
    ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
