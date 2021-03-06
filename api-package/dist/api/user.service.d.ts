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
import { Login } from '../model/login';
import { Tenant } from '../model/tenant';
import { Token } from '../model/token';
import { User } from '../model/user';
import { UserNew } from '../model/userNew';
import { Configuration } from '../configuration';
export declare class UserService {
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
     * Creates a new tenant
     * @param tenant Tenant creation request
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    createTenant(tenant?: Tenant, observe?: 'body', reportProgress?: boolean): Observable<Tenant>;
    createTenant(tenant?: Tenant, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Tenant>>;
    createTenant(tenant?: Tenant, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Tenant>>;
    /**
     *
     * Creates a new user
     * @param user User creation request
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    createUser(user?: UserNew, observe?: 'body', reportProgress?: boolean): Observable<User>;
    createUser(user?: UserNew, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<User>>;
    createUser(user?: UserNew, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<User>>;
    /**
     *
     * Authenticates a user
     * @param login User login request
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    login(login?: Login, observe?: 'body', reportProgress?: boolean): Observable<Token>;
    login(login?: Login, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Token>>;
    login(login?: Login, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Token>>;
}
