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
/* tslint:disable:no-unused-variable member-ordering */

import {Inject, Injectable, Optional} from '@angular/core';
import {
  HttpClient, HttpHeaders, HttpParams,
  HttpResponse, HttpEvent
} from '@angular/common/http';
import {CustomHttpUrlEncodingCodec} from '../encoder';

import {Observable} from 'rxjs';

import {Monitor} from '../model/monitor';
import {MonitorNew} from '../model/monitorNew';

import {BASE_PATH, COLLECTION_FORMATS} from '../variables';
import {Configuration} from '../configuration';


@Injectable()
export class MonitoringService {

  protected basePath = 'http://localhost:9000';
  public defaultHeaders = new HttpHeaders();
  public configuration = new Configuration();

  constructor(protected httpClient: HttpClient, @Optional() @Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
    if (basePath) {
      this.basePath = basePath;
    }
    if (configuration) {
      this.configuration = configuration;
      this.basePath = basePath || configuration.basePath || this.basePath;
    }
  }

  /**
   * @param consumes string[] mime-types
   * @return true: consumes contains 'multipart/form-data', false: otherwise
   */
  private canConsumeForm(consumes: string[]): boolean {
    const form = 'multipart/form-data';
    for (const consume of consumes) {
      if (form === consume) {
        return true;
      }
    }
    return false;
  }


  /**
   *
   *  Creates a monitor
   * @param monitor  Monitor to be created
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public addMonitor(monitor: MonitorNew, observe?: 'body', reportProgress?: boolean): Observable<Monitor>;
  public addMonitor(monitor: MonitorNew, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Monitor>>;
  public addMonitor(monitor: MonitorNew, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Monitor>>;
  public addMonitor(monitor: MonitorNew, observe: any = 'body', reportProgress: boolean = false): Observable<any> {
    if (monitor === null || monitor === undefined) {
      throw new Error('Required parameter monitor was null or undefined when calling addMonitor.');
    }

    let headers = this.defaultHeaders;

    // authentication (ApiKeyAuth) required
    if (this.configuration.apiKeys['X-API-Key']) {
      headers = headers.set('X-API-Key', this.configuration.apiKeys['X-API-Key']);
    }

    // to determine the Accept header
    let httpHeaderAccepts: string[] = [
      'application/json'
    ];
    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = [
      'application/json'
    ];
    const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }

    return this.httpClient.post<Monitor>(`${this.basePath}/monitors`,
      monitor,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  /**
   *
   *  Deletes the monitor identified by the given id paramater.
   * @param id Unique identifier of the resource
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public deleteMonitor(id: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
  public deleteMonitor(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
  public deleteMonitor(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
  public deleteMonitor(id: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {
    if (id === null || id === undefined) {
      throw new Error('Required parameter id was null or undefined when calling deleteMonitor.');
    }

    let headers = this.defaultHeaders;

    // authentication (ApiKeyAuth) required
    if (this.configuration.apiKeys['X-API-Key']) {
      headers = headers.set('X-API-Key', this.configuration.apiKeys['X-API-Key']);
    }

    // to determine the Accept header
    let httpHeaderAccepts: string[] = [
      'application/json'
    ];
    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = [];

    return this.httpClient.delete<any>(`${this.basePath}/monitors/${encodeURIComponent(String(id))}`,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  /**
   *
   *  Returns all monitors visible to the user
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public findMonitors(observe?: 'body', reportProgress?: boolean): Observable<Array<Monitor>>;
  public findMonitors(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Monitor>>>;
  public findMonitors(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Monitor>>>;
  public findMonitors(observe: any = 'body', reportProgress: boolean = false): Observable<any> {

    let headers = this.defaultHeaders;

    // authentication (ApiKeyAuth) required
    if (this.configuration.apiKeys['X-API-Key']) {
      headers = headers.set('X-API-Key', this.configuration.apiKeys['X-API-Key']);
    }

    // to determine the Accept header
    let httpHeaderAccepts: string[] = [
      'application/json'
    ];
    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = [];

    return this.httpClient.get<Array<Monitor>>(`${this.basePath}/monitors`,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  /**
   *
   *  Retrieves the monitor with the given id parameter
   * @param id Unique identifier of the resource
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getMonitor(id: string, observe?: 'body', reportProgress?: boolean): Observable<Array<Monitor>>;
  public getMonitor(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Monitor>>>;
  public getMonitor(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Monitor>>>;
  public getMonitor(id: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {
    if (id === null || id === undefined) {
      throw new Error('Required parameter id was null or undefined when calling getMonitor.');
    }

    let headers = this.defaultHeaders;

    // authentication (ApiKeyAuth) required
    if (this.configuration.apiKeys['X-API-Key']) {
      headers = headers.set('X-API-Key', this.configuration.apiKeys['X-API-Key']);
    }

    // to determine the Accept header
    let httpHeaderAccepts: string[] = [
      'application/json'
    ];
    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = [];

    return this.httpClient.get<Array<Monitor>>(`${this.basePath}/monitors/${encodeURIComponent(String(id))}`,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

}
