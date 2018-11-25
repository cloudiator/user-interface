import { TestBed } from '@angular/core/testing';

import { EditorService } from './editor.service';
import {combineReducers, StoreModule} from '@ngrx/store';
import * as fromRoot from '../reducers';

describe('EditorService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      StoreModule.forRoot({
        ...fromRoot.reducers,
        'feature': combineReducers(fromRoot.reducers)
      })
    ]
  }));

  beforeEach(() => {});

  it('should be created', () => {
    const service: EditorService = TestBed.get(EditorService);
    expect(service).toBeTruthy();
  });
});
