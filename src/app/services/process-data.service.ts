import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Job, ProcessService, Queue} from 'cloudiator-rest-api';
import {select, Store} from '@ngrx/store';
import * as RuntimeConfigSelectors from '../root-store/runtime-config-store/selectors';
import * as RootStoreState from '../root-store/root-state';
import {EditorSelectors} from '../root-store/editor-store';
import {mergeMap} from 'rxjs/operators';

/**
 * Service handling the Process api.
 */
@Injectable({
  providedIn: 'root'
})
export class ProcessDataService {

  /** @ignore */
  constructor(private processApiService: ProcessService,
              private store: Store<RootStoreState.State>) {
    // Sets Processervice settings according to RuntimeConfig.
    store.pipe(select(RuntimeConfigSelectors.selectConfig)).subscribe(config => {
      processApiService.basePath = config.apiPath;
      if (processApiService.configuration) {
        processApiService.configuration.apiKeys['X-API-Key'] = config.xApiKey;
      }
    });
  }

  /**
   * Takes the current Job from the Editor store and submits a new Schedule for it.
   * @return {Observable<Queue>} Observable returning the return Queue of the submitted Schedule.
   */
  public submitEditorSchedule(): Observable<Queue> {
    return this.store.pipe(
      select(EditorSelectors.selectJob),
      mergeMap((job: Job) => this.processApiService.addSchedule({job: job.id, instantiation: 'AUTOMATIC'})));
  }
}
