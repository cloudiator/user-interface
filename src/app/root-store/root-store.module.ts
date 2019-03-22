import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from '@ngrx/store';
import { RuntimeConfigStoreModule } from './runtime-config-store/runtime-config-store.module';
import { CloudDataStoreModule } from './cloud-data-store/cloud-data-store.module';
import { EditorStoreModule } from './editor-store/editor-store.module';
import { JobDataStoreModule } from './job-data-store/job-data-store.module';
import { AuthStoreModule } from './auth-store/auth-store.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({}),
    RuntimeConfigStoreModule,
    CloudDataStoreModule,
    EditorStoreModule,
    JobDataStoreModule,
    AuthStoreModule
  ]
})
export class RootStoreModule { }
