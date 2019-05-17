import {Injectable} from '@angular/core';
import {forkJoin, Observable} from 'rxjs';
import {Job, ProcessService, Queue, Schedule} from 'cloudiator-rest-api';
import {select, Store} from '@ngrx/store';
import * as RootStoreState from '../root-store/root-state';
import {EditorSelectors} from '../root-store/editor-store';
import {map, mergeMap} from 'rxjs/operators';
import {ProcessDataActions, ProcessDataSelectors} from '../root-store/process-data-store';
import {RuntimeConfigService} from './runtime-config.service';
import {JobDataService} from './job-data.service';
import {ScheduleView} from '../model/ScheduleView';

/**
 * Service handling the Process api.
 */
@Injectable({
  providedIn: 'root'
})
export class ProcessDataService {

  /** @ignore */
  constructor(private jobDataService: JobDataService,
              private processApiService: ProcessService,
              private runtimeConfigService: RuntimeConfigService,
              private store: Store<RootStoreState.State>) {
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

  /**
   * fetches Schedules and returns a store link to them.
   * @return {Observable<Schedule[]>}
   */
  public getSchedules(): Observable<Schedule[]> {
    this.fetchSchedules();
    return this.store.pipe(select(ProcessDataSelectors.selectSchedules));
  }

  /**
   * Not In use right now
   *
   * Fetches Schedules and views and composes them to scheduleviews.
   * @return {Observable<Observable<[any]>>}
   */
  public getScheduleViews() {
    return this.getSchedules().pipe(
      map(schedules =>
        schedules.map(schedule =>
          this.jobDataService.findJob(schedule.job).pipe(
            map(job => {
              return <ScheduleView>{
                schedule: schedule,
                job: job
              };
            })
          )
        )
      ),
      map(arr => forkJoin(arr))
      // flatMap(arr => {
      //   console.log('in flatmap')
      //   return mergeAll(arr);
      // })
    );
  }

  /**
   * Fetches Graph of the given id and maps it to Cytoscape data.
   * @param {string} id
   * @return {Observable<any>}
   */
  scheduleGraph(id: string): Observable<any> {
    return this.processApiService.scheduleGraph(id).pipe(map(graph => {
      return {
        edges: graph.edges,
        nodes: graph.processes
      };
    }));
  }

  /**
   * Fetches schedules from api.
   */
  private fetchSchedules() {
    this.runtimeConfigService.awaitConfigLoad()
      .then(() => {
        this.processApiService.getSchedules()
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
