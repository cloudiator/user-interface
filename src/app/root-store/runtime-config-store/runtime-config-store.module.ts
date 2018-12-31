import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {runtimeConfigReducer} from './reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('runtimeConfig', runtimeConfigReducer)
  ]
})
export class RuntimeConfigStoreModule { }
