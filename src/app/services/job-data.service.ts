import {Injectable} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {RuntimeConfigService} from './runtime-config.service';
import {ToastService} from '../app-dialog/services/toast.service';
import {Job, JobService} from 'cloudiator-rest-api';
import {Observable} from 'rxjs';
import {ToastType} from '../model/toast';
import {JobDataActions, JobDataSelectors, RootStoreState, RuntimeConfigSelectors} from '../root-store';

@Injectable({
  providedIn: 'root'
})
export class JobDataService {

  constructor(private jobApiService: JobService,
              private runtimeConfigService: RuntimeConfigService,
              private store: Store<RootStoreState.State>,
              private toastService: ToastService) {
  }

  public findJobs(): Observable<Job[]> {
    this.fetchJobs();

    return this.store.pipe(select(JobDataSelectors.selectJobs));
  }

  public jobGraph(id: string): Observable<any> {
    return this.jobApiService.jobGraph(id);
  }

  private fetchJobs() {
    this.runtimeConfigService.awaitConfigLoad().then(() => {
      this.jobApiService.findJobs().toPromise()
        .then(jobs => {
          this.store.dispatch(new JobDataActions.SetJobsActiom(jobs));
        })
        .catch(() => {
          this.toastService.show({text: 'could not fetch Jobs', type: ToastType.DANGER}, false);
        });
    });
  }
}
