import {Job, Schedule} from 'cloudiator-rest-api';

/**
 * Composite object that contains all needed informations for the Schedules view.
 */
export interface ScheduleView {
  schedule: Schedule;
  job: Job;
}
