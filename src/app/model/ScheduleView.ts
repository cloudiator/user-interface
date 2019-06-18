import {Job, Schedule} from 'cloudiator-rest-api';

/**
 * Composite object that contains all needed informations for the Schedules view.
 */
export interface ScheduleView {
  /**
   * schedules of View.
   */
  schedule: Schedule;
  /**
   * Job of Schedule.
   */
  job: Job;
}
