/**
 * Cloudiator REST Api
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.2.0
 * Contact: daniel.baur@uni-ulm.de
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { HttpClient, HttpHeaders, HttpResponse, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CloudiatorProcess } from '../model/cloudiatorProcess';
import { CloudiatorProcessNew } from '../model/cloudiatorProcessNew';
import { Queue } from '../model/queue';
import { Schedule } from '../model/schedule';
import { ScheduleNew } from '../model/scheduleNew';
import { Configuration } from '../configuration';
export declare class ProcessService {
    protected httpClient: HttpClient;
    protected basePath: string;
    defaultHeaders: HttpHeaders;
    configuration: Configuration;
    constructor(httpClient: HttpClient, basePath: string, configuration: Configuration);
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm;
    /**
     *
     * Creates a new schedule
     * @param schedule Schedule to be created
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    addSchedule(schedule: ScheduleNew, observe?: 'body', reportProgress?: boolean): Observable<Queue>;
    addSchedule(schedule: ScheduleNew, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Queue>>;
    addSchedule(schedule: ScheduleNew, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Queue>>;
    /**
     *
     * Creates a new process
     * @param process Process to be created
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    createProcess(process: CloudiatorProcessNew, observe?: 'body', reportProgress?: boolean): Observable<Queue>;
    createProcess(process: CloudiatorProcessNew, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Queue>>;
    createProcess(process: CloudiatorProcessNew, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Queue>>;
    /**
     *
     * Deletes the process corresponding to the given id.
     * @param id Unique identifier of the resource
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    deleteProcess(id: string, observe?: 'body', reportProgress?: boolean): Observable<Queue>;
    deleteProcess(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Queue>>;
    deleteProcess(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Queue>>;
    /**
     *
     * Deletes the schedule identified by the given id and all corresponding processes and nodes.
     * @param id Unique identifier of the resource
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    deleteSchedule(id: string, observe?: 'body', reportProgress?: boolean): Observable<Queue>;
    deleteSchedule(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Queue>>;
    deleteSchedule(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Queue>>;
    /**
     *
     * Finds the process corresponding to the given id.
     * @param id Unique identifier of the resource
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    findProcess(id: string, observe?: 'body', reportProgress?: boolean): Observable<CloudiatorProcess>;
    findProcess(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CloudiatorProcess>>;
    findProcess(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CloudiatorProcess>>;
    /**
     *
     * Retrieves the schedule identified by parameter id.
     * @param id Unique identifier of the resource
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    findSchedule(id: string, observe?: 'body', reportProgress?: boolean): Observable<Schedule>;
    findSchedule(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Schedule>>;
    findSchedule(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Schedule>>;
    /**
     *
     * Retrieves all process of the current user matching the parameters.
     * @param scheduleId Id of the schedule.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    getProcesses(scheduleId?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<CloudiatorProcess>>;
    getProcesses(scheduleId?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<CloudiatorProcess>>>;
    getProcesses(scheduleId?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<CloudiatorProcess>>>;
    /**
     *
     * Retrieves all schedules by the current user.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    getSchedules(observe?: 'body', reportProgress?: boolean): Observable<Array<Schedule>>;
    getSchedules(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Schedule>>>;
    getSchedules(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Schedule>>>;
    /**
     *
     * Returns a json graph representation usable by cyctoscape.js
     * @param id Unique identifier of the resource
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    scheduleGraph(id: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    scheduleGraph(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    scheduleGraph(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
}
