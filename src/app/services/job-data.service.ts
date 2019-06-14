import {Injectable} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {RuntimeConfigService} from './runtime-config.service';
import {ToastService} from '../app-dialog/services/toast.service';
import {Job, JobService} from 'cloudiator-rest-api';
import {Observable} from 'rxjs';
import {ToastType} from '../app-dialog/model/toast';
import {JobDataActions, JobDataSelectors, RootStoreState, RuntimeConfigSelectors} from '../root-store';
import {find, first, map} from 'rxjs/operators';

/**
 * Handles al functionality concerning Jobs.
 */
@Injectable({
  providedIn: 'root'
})
export class JobDataService {

  /** @ignore */
  constructor(private jobApiService: JobService,
              private runtimeConfigService: RuntimeConfigService,
              private store: Store<RootStoreState.State>,
              private toastService: ToastService) {
  }

  /**
   * fetches jobs ad returns redux observable to them.
   * @return {Observable<Job[]>}
   */
  public findJobs(): Observable<Job[]> {
    this.fetchJobs();

    return this.store.pipe(select(JobDataSelectors.selectJobs));
  }

  /**
   * returns store observable of specific job.
   * @param {string} id
   * @return {Observable<Job>}
   */
  public findJob(id: string): Observable<Job> {
    return this.findJobs().pipe(map(jobs => jobs.find(job => job.id === id)));
  }

  /**
   * fetches graph of the given job id from the api.
   * @param {string} id
   * @return {Observable<any>}
   */
  public jobGraph(id: string): Observable<any> {
    return this.jobApiService.jobGraph(id);
  }

  /**
   * Fetches all jobs.
   */
  private fetchJobs() {
    this.runtimeConfigService.awaitConfigLoad().then(() => {
      this.jobApiService.findJobs()
        .subscribe(jobs => {
            this.store.dispatch(new JobDataActions.SetJobsAction(jobs));
          },
          () => {
            this.toastService.show({text: 'could not fetch Jobs', type: ToastType.DANGER}, false);
          }
        );
    });
  }
}
