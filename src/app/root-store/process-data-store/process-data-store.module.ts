import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {processDatareducer} from './reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('processData', processDatareducer)
  ],
  declarations: []
})
export class ProcessDataStoreModule { }
