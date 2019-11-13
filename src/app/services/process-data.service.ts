import {Injectable} from '@angular/core';
import {forkJoin, Observable, of} from 'rxjs';
import {Job, ProcessService, Queue, Schedule} from 'cloudiator-rest-api';
import {select, Store} from '@ngrx/store';
import {EditorSelectors} from '../root-store/editor-store';
import {map, mergeMap} from 'rxjs/operators';
import {ProcessDataActions, ProcessDataSelectors} from '../root-store/process-data-store';
import {RuntimeConfigService} from './runtime-config.service';
import {JobDataService} from './job-data.service';
import {ScheduleView} from '../model/ScheduleView';
import {RootStoreState} from '../root-store';
import {ToastService} from '../app-dialog/services/toast.service';
import {ToastType} from '../app-dialog/model/toast';
import * as testData from '../../../testing/test-data';

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
              private toastService: ToastService,
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
    // return of(testData.allSchedules)
  }

  public getScheduleIsLoading(): Observable<boolean> {
    return this.store.pipe(select(ProcessDataSelectors.selectScheduleIsLoading));
  }


  /**
   * Fetches Graph of the given id and maps it to Cytoscape data.
   * @param {string} id
   * @return {Observable<any>}
   */
  scheduleGraph(id: string): Observable<any> {
    return this.processApiService.scheduleGraph(id)
    // return id === '4f1cf465-d420-4d63-a456-88f65981c3cd' ? of(null) :
    //  return  of(testData.tempTestGraph)
      .pipe(map(graph => {
        return {
          edges: graph.edges,
          nodes: graph.processes
        };
      }));
  }

  deleteSchedule(id: string): Observable<Queue> {
    return this.processApiService.deleteSchedule(id);
  }

  /**
   * Fetches schedules from api.
   */
  private fetchSchedules() {
    this.store.dispatch(new ProcessDataActions.SetScheduleIsLoading(true));
    this.processApiService.getSchedules()
      .subscribe(
        schedules => {
          this.store.dispatch(new ProcessDataActions.SetSchedulesAction(schedules));
        },
        () => {
          this.toastService.show({text: 'Could not fetch Schedules', type: ToastType.DANGER});
          console.error('could not fetch Schedules');
        },
        () => {
          this.store.dispatch(new ProcessDataActions.SetScheduleIsLoading(false));
        }
      );
  }
}
