import {Injectable} from '@angular/core';
import {Observable, zip} from 'rxjs';
import {Job, ProcessService, Queue, Schedule} from 'cloudiator-rest-api';
import {select, Store} from '@ngrx/store';
import * as RuntimeConfigSelectors from '../root-store/runtime-config-store/selectors';
import * as RootStoreState from '../root-store/root-state';
import {EditorSelectors} from '../root-store/editor-store';
import {concatMap, flatMap, map, mergeAll, mergeMap, take} from 'rxjs/operators';
import {ProcessDataActions, ProcessDataSelectors} from '../root-store/process-data-store';
import {RuntimeConfigService} from './runtime-config.service';
import {JobDataService} from './job-data.service';
import {ScheduleView} from '../model/ScheduleView';

@Injectable({
  providedIn: 'root'
})
export class ProcessDataService {

  /** @ignore */
  constructor(private jobDataService: JobDataService,
              private processApiService: ProcessService,
              private runtimeConfigService: RuntimeConfigService,
              private store: Store<RootStoreState.State>) {
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
  public addSchedule(): Observable<Queue> {
    return this.store.pipe(
      select(EditorSelectors.selectJob),
      mergeMap((job: Job) => this.processApiService.addSchedule({job: job.id, instantiation: 'AUTOMATIC'})));
  }

  public getSchedules(): Observable<Schedule[]> {
    this.fetchSchedules();
    return this.store.pipe(select(ProcessDataSelectors.selectSchedules));
  }

  public getScheduleViews() {
    return this.getSchedules().pipe(
      map(schedules =>
        schedules.map(schedule =>
          this.jobDataService.findJob(schedule.job)
            .pipe(map(job => [schedule, job]))
        )
      )
    );
  }


  private fetchSchedules() {
    this.runtimeConfigService.awaitConfigLoad()
      .then(() => {
        this.processApiService.getSchedules()
          .pipe(take(1))
          .subscribe(
            schedules => {
              this.store.dispatch(new ProcessDataActions.SetSchedulesAction(schedules));
            },
            () => {
              console.error('could not fetch Schedules');
            });
      });
  }
}
