import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {reducers, globalInitialState} from './reducers';


@NgModule({
  imports: [StoreModule.forRoot(reducers, {initialState: globalInitialState})],
  exports: []
})
export class AppStoreModule {
}
