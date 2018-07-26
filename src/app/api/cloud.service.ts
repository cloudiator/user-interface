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

import {Cloud} from '../model/cloud';
import {Hardware} from '../model/hardware';
import {Image} from '../model/image';
import {Location} from '../model/location';
import {NewCloud} from '../model/newCloud';
import {Queue} from '../model/queue';
import {VirtualMachine} from '../model/virtualMachine';
import {VirtualMachineRequest} from '../model/virtualMachineRequest';

import {BASE_PATH, COLLECTION_FORMATS} from '../variables';
import {Configuration} from '../configuration';
import {Observable} from 'rxjs';


@Injectable()
export class CloudService {

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
   * Creates a new cloud.
   * @param cloud Cloud to add
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public addCloud(cloud: NewCloud, observe?: 'body', reportProgress?: boolean): Observable<Cloud>;
  public addCloud(cloud: NewCloud, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Cloud>>;
  public addCloud(cloud: NewCloud, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Cloud>>;
  public addCloud(cloud: NewCloud, observe: any = 'body', reportProgress: boolean = false): Observable<any> {
    if (cloud === null || cloud === undefined) {
      throw new Error('Required parameter cloud was null or undefined when calling addCloud.');
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

    return this.httpClient.post<Cloud>(`${this.basePath}/clouds`,
      cloud,
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
   * Creates a new virtual machine request
   * @param virtualMachineRequest VirtualMachine Request
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public addVM(virtualMachineRequest: VirtualMachineRequest, observe?: 'body', reportProgress?: boolean): Observable<Queue>;
  public addVM(virtualMachineRequest: VirtualMachineRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Queue>>;
  public addVM(virtualMachineRequest: VirtualMachineRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Queue>>;
  public addVM(virtualMachineRequest: VirtualMachineRequest, observe: any = 'body', reportProgress: boolean = false): Observable<any> {
    if (virtualMachineRequest === null || virtualMachineRequest === undefined) {
      throw new Error('Required parameter virtualMachineRequest was null or undefined when calling addVM.');
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

    return this.httpClient.post<Queue>(`${this.basePath}/vm`,
      virtualMachineRequest,
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
   *  Deletes the cloud identified by the given id paramater.
   * @param id Unique identifier of the resource
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public deleteCloud(id: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
  public deleteCloud(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
  public deleteCloud(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
  public deleteCloud(id: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {
    if (id === null || id === undefined) {
      throw new Error('Required parameter id was null or undefined when calling deleteCloud.');
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

    return this.httpClient.delete<any>(`${this.basePath}/clouds/${encodeURIComponent(String(id))}`,
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
   *  Updates a specific hardware
   * @param id Unique identifier of the resource
   * @param hardware  Hardware to update
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public editHardware(id: string, hardware: Hardware, observe?: 'body', reportProgress?: boolean): Observable<Hardware>;
  public editHardware(id: string, hardware: Hardware, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Hardware>>;
  public editHardware(id: string, hardware: Hardware, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Hardware>>;
  public editHardware(id: string, hardware: Hardware, observe: any = 'body', reportProgress: boolean = false): Observable<any> {
    if (id === null || id === undefined) {
      throw new Error('Required parameter id was null or undefined when calling editHardware.');
    }
    if (hardware === null || hardware === undefined) {
      throw new Error('Required parameter hardware was null or undefined when calling editHardware.');
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

    return this.httpClient.put<Hardware>(`${this.basePath}/hardware/${encodeURIComponent(String(id))}`,
      hardware,
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
   *  Updates a specific image
   * @param id Unique identifier of the resource
   * @param image  Image to update
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public editImage(id: string, image: Image, observe?: 'body', reportProgress?: boolean): Observable<Image>;
  public editImage(id: string, image: Image, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Image>>;
  public editImage(id: string, image: Image, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Image>>;
  public editImage(id: string, image: Image, observe: any = 'body', reportProgress: boolean = false): Observable<any> {
    if (id === null || id === undefined) {
      throw new Error('Required parameter id was null or undefined when calling editImage.');
    }
    if (image === null || image === undefined) {
      throw new Error('Required parameter image was null or undefined when calling editImage.');
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

    return this.httpClient.put<Image>(`${this.basePath}/images/${encodeURIComponent(String(id))}`,
      image,
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
   *  Updates a specific location
   * @param id Unique identifier of the resource
   * @param location  Location to update
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public editLocation(id: string, location: Location, observe?: 'body', reportProgress?: boolean): Observable<Location>;
  public editLocation(id: string, location: Location, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Location>>;
  public editLocation(id: string, location: Location, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Location>>;
  public editLocation(id: string, location: Location, observe: any = 'body', reportProgress: boolean = false): Observable<any> {
    if (id === null || id === undefined) {
      throw new Error('Required parameter id was null or undefined when calling editLocation.');
    }
    if (location === null || location === undefined) {
      throw new Error('Required parameter location was null or undefined when calling editLocation.');
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

    return this.httpClient.put<Location>(`${this.basePath}/locations/${encodeURIComponent(String(id))}`,
      location,
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
   *  Returns the cloud identified by the given id parameter
   * @param id Unique identifier of the resource
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public findCloud(id: string, observe?: 'body', reportProgress?: boolean): Observable<Cloud>;
  public findCloud(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Cloud>>;
  public findCloud(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Cloud>>;
  public findCloud(id: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {
    if (id === null || id === undefined) {
      throw new Error('Required parameter id was null or undefined when calling findCloud.');
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

    return this.httpClient.get<Cloud>(`${this.basePath}/clouds/${encodeURIComponent(String(id))}`,
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
   *  Returns all clouds from the system that the user has access to
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public findClouds(observe?: 'body', reportProgress?: boolean): Observable<Array<Cloud>>;
  public findClouds(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Cloud>>>;
  public findClouds(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Cloud>>>;
  public findClouds(observe: any = 'body', reportProgress: boolean = false): Observable<any> {

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

    return this.httpClient.get<Array<Cloud>>(`${this.basePath}/clouds`,
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
   *  Returns all hardware visible to the user
   * @param cloudId (Optional) Unique identifier to filter a specific cloud
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public findHardware(cloudId?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<Hardware>>;
  public findHardware(cloudId?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Hardware>>>;
  public findHardware(cloudId?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Hardware>>>;
  public findHardware(cloudId?: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

    let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
    if (cloudId !== undefined && cloudId !== null) {
      queryParameters = queryParameters.set('cloudId', <any>cloudId);
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

    return this.httpClient.get<Array<Hardware>>(`${this.basePath}/hardware`,
      {
        params: queryParameters,
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  /**
   *
   *  Returns all images visable to the user
   * @param cloudId (Optional) Unique identifier to filter a specific cloud
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public findImages(cloudId?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<Image>>;
  public findImages(cloudId?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Image>>>;
  public findImages(cloudId?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Image>>>;
  public findImages(cloudId?: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

    let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
    if (cloudId !== undefined && cloudId !== null) {
      queryParameters = queryParameters.set('cloudId', <any>cloudId);
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

    return this.httpClient.get<Array<Image>>(`${this.basePath}/images`,
      {
        params: queryParameters,
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  /**
   *
   *  Returns all locations visible to the user
   * @param cloudId (Optional) Unique identifier to filter a specific cloud
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public findLocations(cloudId?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<Location>>;
  public findLocations(cloudId?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Location>>>;
  public findLocations(cloudId?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Location>>>;
  public findLocations(cloudId?: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

    let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
    if (cloudId !== undefined && cloudId !== null) {
      queryParameters = queryParameters.set('cloudId', <any>cloudId);
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

    return this.httpClient.get<Array<Location>>(`${this.basePath}/locations`,
      {
        params: queryParameters,
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  /**
   *
   * Finds all virtual machines the user has access to
   * @param cloudId (Optional) Unique identifier to filter a specific cloud
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public findVMs(cloudId?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<VirtualMachine>>;
  public findVMs(cloudId?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<VirtualMachine>>>;
  public findVMs(cloudId?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<VirtualMachine>>>;
  public findVMs(cloudId?: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

    let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
    if (cloudId !== undefined && cloudId !== null) {
      queryParameters = queryParameters.set('cloudId', <any>cloudId);
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

    return this.httpClient.get<Array<VirtualMachine>>(`${this.basePath}/vm`,
      {
        params: queryParameters,
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  /**
   *
   *  Retrieves the hardware with the given id.
   * @param id Unique identifier of the resource
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getHardware(id: string, observe?: 'body', reportProgress?: boolean): Observable<Hardware>;
  public getHardware(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Hardware>>;
  public getHardware(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Hardware>>;
  public getHardware(id: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {
    if (id === null || id === undefined) {
      throw new Error('Required parameter id was null or undefined when calling getHardware.');
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

    return this.httpClient.get<Hardware>(`${this.basePath}/hardware/${encodeURIComponent(String(id))}`,
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
   *  Retrieves the image with the given id.
   * @param id Unique identifier of the resource
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getImage(id: string, observe?: 'body', reportProgress?: boolean): Observable<Image>;
  public getImage(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Image>>;
  public getImage(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Image>>;
  public getImage(id: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {
    if (id === null || id === undefined) {
      throw new Error('Required parameter id was null or undefined when calling getImage.');
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

    return this.httpClient.get<Image>(`${this.basePath}/images/${encodeURIComponent(String(id))}`,
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
   *  Retrieves the location with the given id.
   * @param id Unique identifier of the resource
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getLocation(id: string, observe?: 'body', reportProgress?: boolean): Observable<Location>;
  public getLocation(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Location>>;
  public getLocation(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Location>>;
  public getLocation(id: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {
    if (id === null || id === undefined) {
      throw new Error('Required parameter id was null or undefined when calling getLocation.');
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

    return this.httpClient.get<Location>(`${this.basePath}/locations/${encodeURIComponent(String(id))}`,
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
   * Finds the virtual machine identified by the given id parameter
   * @param id Unique identifier of the resource
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getVM(id: string, observe?: 'body', reportProgress?: boolean): Observable<VirtualMachine>;
  public getVM(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<VirtualMachine>>;
  public getVM(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<VirtualMachine>>;
  public getVM(id: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {
    if (id === null || id === undefined) {
      throw new Error('Required parameter id was null or undefined when calling getVM.');
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

    return this.httpClient.get<VirtualMachine>(`${this.basePath}/vm/${encodeURIComponent(String(id))}`,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

}
