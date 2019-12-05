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
import { Job } from '../model/job';
import { JobNew } from '../model/jobNew';
import { Configuration } from '../configuration';
export declare class JobService {
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
     * Creates a new job
     * @param job Job to be created.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    addJob(job: JobNew, observe?: 'body', reportProgress?: boolean): Observable<Job>;
    addJob(job: JobNew, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Job>>;
    addJob(job: JobNew, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Job>>;
    /**
     *
     * Returns the job with the given id.
     * @param id Unique identifier of the resource
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    findJob(id: string, observe?: 'body', reportProgress?: boolean): Observable<Job>;
    findJob(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Job>>;
    findJob(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Job>>;
    /**
     *
     * Returns all jobs visible to the user
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    findJobs(observe?: 'body', reportProgress?: boolean): Observable<Array<Job>>;
    findJobs(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Job>>>;
    findJobs(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Job>>>;
    /**
     *
     * Returns a json graph representation usable by cyctoscape.js
     * @param id Unique identifier of the resource
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    jobGraph(id: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    jobGraph(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    jobGraph(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
}