import {Injectable} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {RuntimeConfigService} from './runtime-config.service';
import {ToastService} from '../app-dialog/services/toast.service';
import {Job, JobService} from 'cloudiator-rest-api';
import {Observable} from 'rxjs';
import {ToastType} from '../app-dialog/model/toast';
import {JobDataActions, JobDataSelectors, RootStoreState, RuntimeConfigSelectors} from '../root-store';
import {find, first, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JobDataService {

  constructor(private jobApiService: JobService,
              private runtimeConfigService: RuntimeConfigService,
              private store: Store<RootStoreState.State>,
              private toastService: ToastService) {
    store.pipe(select(RuntimeConfigSelectors.selectConfig)).subscribe(config => {
      jobApiService.basePath = config.apiPath;
      if (jobApiService.configuration && jobApiService.configuration.apiKeys) {
        jobApiService.configuration.apiKeys['X-API-Key'] = config.xApiKey;
      }
    });
  }

  public findJobs(): Observable<Job[]> {
    this.fetchJobs();

    return this.store.pipe(select(JobDataSelectors.selectJobs));
  }

  public findJob(id: string): Observable<Job> {
    return this.findJobs().pipe(map(jobs => jobs.find(job => job.id === id)));
  }

  public jobGraph(id: string): Observable<any> {
    return this.jobApiService.jobGraph(id);
  }

  private fetchJobs() {
    this.runtimeConfigService.awaitConfigLoad().then(() => {
      this.jobApiService.findJobs().toPromise()
        .then(jobs => {
          this.store.dispatch(new JobDataActions.SetJobsAction(jobs));
        })
        .catch(() => {
          this.toastService.show({text: 'could not fetch Jobs', type: ToastType.DANGER}, false);
        });
    });
  }
}
