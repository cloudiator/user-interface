import {Injectable} from '@angular/core';
import {select, Store} from '@ngrx/store';
import * as fromRoot from '../reducers';
import * as fromJobData from '../actions/job-data.actions';
import {RuntimeConfigService} from './runtime-config.service';
import {ToastService} from '../app-dialog/services/toast.service';
import {Job, JobService} from 'cloudiator-rest-api';
import {Observable} from 'rxjs';
import {ToastType} from '../model/toast';

@Injectable({
  providedIn: 'root'
})
export class JobDataService {

  constructor(private jobApiService: JobService,
              private runtimeConfigService: RuntimeConfigService,
              private store: Store<fromRoot.State>,
              private toastService: ToastService) {
    store.pipe(select(fromRoot.getRuntimeConfig)).subscribe(config => {
      jobApiService.basePath = config.apiPath;
      if (jobApiService.configuration && jobApiService.configuration.apiKeys) {
        jobApiService.configuration.apiKeys['X-API-Key'] = config.xApiKey;
      }
    });
  }

  public findJobs(): Observable<Job[]> {
    this.fetchJobs();

    return this.store.pipe(select(fromRoot.getJobs));
  }

  public jobGraph(id: string): Observable<any> {
    return this.jobApiService.jobGraph(id);
  }

  private fetchJobs() {
    this.runtimeConfigService.awaitConfigLoad().then(() => {
      this.jobApiService.findJobs().toPromise()
        .then(jobs => {
          this.store.dispatch(new fromJobData.SetJobsActiom(jobs));
        })
        .catch(() => {
          this.toastService.show({text: 'could not fetch Jobs', type: ToastType.DANGER}, false);
        });
    });
  }
}
