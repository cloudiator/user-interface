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
import * as tslib_1 from "tslib";
import { Inject, Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BASE_PATH } from '../variables';
import { Configuration } from '../configuration';
var UserService = /** @class */ (function () {
    function UserService(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'http://localhost:9000';
        this.defaultHeaders = new HttpHeaders();
        this.configuration = new Configuration();
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
    UserService.prototype.canConsumeForm = function (consumes) {
        var e_1, _a;
        var form = 'multipart/form-data';
        try {
            for (var consumes_1 = tslib_1.__values(consumes), consumes_1_1 = consumes_1.next(); !consumes_1_1.done; consumes_1_1 = consumes_1.next()) {
                var consume = consumes_1_1.value;
                if (form === consume) {
                    return true;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (consumes_1_1 && !consumes_1_1.done && (_a = consumes_1.return)) _a.call(consumes_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return false;
    };
    UserService.prototype.createTenant = function (tenant, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var headers = this.defaultHeaders;
        // authentication (ApiKeyAuth) required
        if (this.configuration.apiKeys["X-API-Key"]) {
            headers = headers.set('X-API-Key', this.configuration.apiKeys["X-API-Key"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            'application/json'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.post(this.basePath + "/tenants", tenant, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    UserService.prototype.createUser = function (user, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var headers = this.defaultHeaders;
        // authentication (ApiKeyAuth) required
        if (this.configuration.apiKeys["X-API-Key"]) {
            headers = headers.set('X-API-Key', this.configuration.apiKeys["X-API-Key"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            'application/json'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.post(this.basePath + "/users", user, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    UserService.prototype.login = function (login, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var headers = this.defaultHeaders;
        // authentication (ApiKeyAuth) required
        if (this.configuration.apiKeys["X-API-Key"]) {
            headers = headers.set('X-API-Key', this.configuration.apiKeys["X-API-Key"]);
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            'application/json'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.post(this.basePath + "/login", login, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    UserService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__param(1, Optional()), tslib_1.__param(1, Inject(BASE_PATH)), tslib_1.__param(2, Optional()),
        tslib_1.__metadata("design:paramtypes", [HttpClient, String, Configuration])
    ], UserService);
    return UserService;
}());
export { UserService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2xvdWRpYXRvci1yZXN0LWFwaS8iLCJzb3VyY2VzIjpbImFwaS91c2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7R0FVRztBQUNILHVEQUF1RDs7QUFFdkQsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQTJCLGVBQWUsQ0FBQztBQUNsRixPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFDRSxNQUFnQyxzQkFBc0IsQ0FBQztBQVd6RixPQUFPLEVBQUUsU0FBUyxFQUFzQixNQUEwQixjQUFjLENBQUM7QUFDakYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUEwQyxrQkFBa0IsQ0FBQztBQUlyRjtJQU1JLHFCQUFzQixVQUFzQixFQUFnQyxRQUFnQixFQUFjLGFBQTRCO1FBQWhILGVBQVUsR0FBVixVQUFVLENBQVk7UUFKbEMsYUFBUSxHQUFHLHVCQUF1QixDQUFDO1FBQ3RDLG1CQUFjLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUNuQyxrQkFBYSxHQUFHLElBQUksYUFBYSxFQUFFLENBQUM7UUFHdkMsSUFBSSxRQUFRLEVBQUU7WUFDVixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztTQUM1QjtRQUNELElBQUksYUFBYSxFQUFFO1lBQ2YsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7WUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLElBQUksYUFBYSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDO1NBQ3ZFO0lBQ0wsQ0FBQztJQUVEOzs7T0FHRztJQUNLLG9DQUFjLEdBQXRCLFVBQXVCLFFBQWtCOztRQUNyQyxJQUFNLElBQUksR0FBRyxxQkFBcUIsQ0FBQzs7WUFDbkMsS0FBc0IsSUFBQSxhQUFBLGlCQUFBLFFBQVEsQ0FBQSxrQ0FBQSx3REFBRTtnQkFBM0IsSUFBTSxPQUFPLHFC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QkFBdUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN6RyxJQUFJLHVCQUF1QixJQUFJLFNBQVMsRUFBRTtZQUN0QyxPQUFPLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsdUJBQXVCLENBQUMsQ0FBQztTQUNsRTtRQUVELE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQVcsSUFBSSxDQUFDLFFBQVEsV0FBUSxFQUN2RCxLQUFLLEVBQ0w7WUFDSSxlQUFlLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlO1lBQ25ELE9BQU8sRUFBRSxPQUFPO1lBQ2hCLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLGNBQWMsRUFBRSxjQUFjO1NBQ2pDLENBQ0osQ0FBQztJQUNOLENBQUM7SUFoTFEsV0FBVztRQUR2QixVQUFVLEVBQUU7UUFPc0MsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBQyxtQkFBQSxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUEsRUFBb0IsbUJBQUEsUUFBUSxFQUFFLENBQUE7aURBQXZFLFVBQVUsVUFBNkUsYUFBYTtPQU43SCxXQUFXLENBa0x2QjtJQUFELGtCQUFDO0NBQUEsQUFsTEQsSUFrTEM7U0FsTFksV0FBVyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDbG91ZGlhdG9yIFJFU1QgQXBpXHJcbiAqIE5vIGRlc2NyaXB0aW9uIHByb3ZpZGVkIChnZW5lcmF0ZWQgYnkgU3dhZ2dlciBDb2RlZ2VuIGh0dHBzOi8vZ2l0aHViLmNvbS9zd2FnZ2VyLWFwaS9zd2FnZ2VyLWNvZGVnZW4pXHJcbiAqXHJcbiAqIE9wZW5BUEkgc3BlYyB2ZXJzaW9uOiAwLjIuMFxyXG4gKiBDb250YWN0OiBkYW5pZWwuYmF1ckB1bmktdWxtLmRlXHJcbiAqXHJcbiAqIE5PVEU6IFRoaXMgY2xhc3MgaXMgYXV0byBnZW5lcmF0ZWQgYnkgdGhlIHN3YWdnZXIgY29kZSBnZW5lcmF0b3IgcHJvZ3JhbS5cclxuICogaHR0cHM6Ly9naXRodWIuY29tL3N3YWdnZXItYXBpL3N3YWdnZXItY29kZWdlbi5naXRcclxuICogRG8gbm90IGVkaXQgdGhlIGNsYXNzIG1hbnVhbGx5LlxyXG4gKi9cclxuLyogdHNsaW50OmRpc2FibGU6bm8tdW51c2VkLXZhcmlhYmxlIG1lbWJlci1vcmRlcmluZyAqL1xyXG5cclxuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCB9ICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFBhcmFtcyxcclxuICAgICAgICAgSHR0cFJlc3BvbnNlLCBIdHRwRXZlbnQgfSAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgQ3VzdG9tSHR0cFVybEVuY29kaW5nQ29kZWMgfSAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4uL2VuY29kZXInO1xyXG5cclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgTG9naW4gfSBmcm9tICcuLi9tb2RlbC9sb2dpbic7XHJcbmltcG9ydCB7IFRlbmFudCB9IGZyb20gJy4uL21vZGVsL3RlbmFudCc7XHJcbmltcG9ydCB7IFRva2VuIH0gZnJvbSAnLi4vbW9kZWwvdG9rZW4nO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vbW9kZWwvdXNlcic7XHJcbmltcG9ydCB7IFVzZXJOZXcgfSBmcm9tICcuLi9tb2RlbC91c2VyTmV3JztcclxuXHJcbmltcG9ydCB7IEJBU0VfUEFUSCwgQ09MTEVDVElPTl9GT1JNQVRTIH0gICAgICAgICAgICAgICAgICAgICBmcm9tICcuLi92YXJpYWJsZXMnO1xyXG5pbXBvcnQgeyBDb25maWd1cmF0aW9uIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi4vY29uZmlndXJhdGlvbic7XHJcblxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2Uge1xyXG5cclxuICAgIHByb3RlY3RlZCBiYXNlUGF0aCA9ICdodHRwOi8vbG9jYWxob3N0OjkwMDAnO1xyXG4gICAgcHVibGljIGRlZmF1bHRIZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKCk7XHJcbiAgICBwdWJsaWMgY29uZmlndXJhdGlvbiA9IG5ldyBDb25maWd1cmF0aW9uKCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIGh0dHBDbGllbnQ6IEh0dHBDbGllbnQsIEBPcHRpb25hbCgpQEluamVjdChCQVNFX1BBVEgpIGJhc2VQYXRoOiBzdHJpbmcsIEBPcHRpb25hbCgpIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgICBpZiAoYmFzZVBhdGgpIHtcclxuICAgICAgICAgICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29uZmlndXJhdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBjb25maWd1cmF0aW9uO1xyXG4gICAgICAgICAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGggfHwgY29uZmlndXJhdGlvbi5iYXNlUGF0aCB8fCB0aGlzLmJhc2VQYXRoO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSBjb25zdW1lcyBzdHJpbmdbXSBtaW1lLXR5cGVzXHJcbiAgICAgKiBAcmV0dXJuIHRydWU6IGNvbnN1bWVzIGNvbnRhaW5zICdtdWx0aXBhcnQvZm9ybS1kYXRhJywgZmFsc2U6IG90aGVyd2lzZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGNhbkNvbnN1bWVGb3JtKGNvbnN1bWVzOiBzdHJpbmdbXSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGNvbnN0IGZvcm0gPSAnbXVsdGlwYXJ0L2Zvcm0tZGF0YSc7XHJcbiAgICAgICAgZm9yIChjb25zdCBjb25zdW1lIG9mIGNvbnN1bWVzKSB7XHJcbiAgICAgICAgICAgIGlmIChmb3JtID09PSBjb25zdW1lKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKiBDcmVhdGVzIGEgbmV3IHRlbmFudCBcclxuICAgICAqIEBwYXJhbSB0ZW5hbnQgVGVuYW50IGNyZWF0aW9uIHJlcXVlc3QgXHJcbiAgICAgKiBAcGFyYW0gb2JzZXJ2ZSBzZXQgd2hldGhlciBvciBub3QgdG8gcmV0dXJuIHRoZSBkYXRhIE9ic2VydmFibGUgYXMgdGhlIGJvZHksIHJlc3BvbnNlIG9yIGV2ZW50cy4gZGVmYXVsdHMgdG8gcmV0dXJuaW5nIHRoZSBib2R5LlxyXG4gICAgICogQHBhcmFtIHJlcG9ydFByb2dyZXNzIGZsYWcgdG8gcmVwb3J0IHJlcXVlc3QgYW5kIHJlc3BvbnNlIHByb2dyZXNzLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY3JlYXRlVGVuYW50KHRlbmFudD86IFRlbmFudCwgb2JzZXJ2ZT86ICdib2R5JywgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuKTogT2JzZXJ2YWJsZTxUZW5hbnQ+O1xyXG4gICAgcHVibGljIGNyZWF0ZVRlbmFudCh0ZW5hbnQ/OiBUZW5hbnQsIG9ic2VydmU/OiAncmVzcG9uc2UnLCByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW4pOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxUZW5hbnQ+PjtcclxuICAgIHB1YmxpYyBjcmVhdGVUZW5hbnQodGVuYW50PzogVGVuYW50LCBvYnNlcnZlPzogJ2V2ZW50cycsIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbik6IE9ic2VydmFibGU8SHR0cEV2ZW50PFRlbmFudD4+O1xyXG4gICAgcHVibGljIGNyZWF0ZVRlbmFudCh0ZW5hbnQ/OiBUZW5hbnQsIG9ic2VydmU6IGFueSA9ICdib2R5JywgcmVwb3J0UHJvZ3Jlc3M6IGJvb2xlYW4gPSBmYWxzZSApOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cclxuXHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSB0aGlzLmRlZmF1bHRIZWFkZXJzO1xyXG5cclxuICAgICAgICAvLyBhdXRoZW50aWNhdGlvbiAoQXBpS2V5QXV0aCkgcmVxdWlyZWRcclxuICAgICAgICBpZiAodGhpcy5jb25maWd1cmF0aW9uLmFwaUtleXNbXCJYLUFQSS1LZXlcIl0pIHtcclxuICAgICAgICAgICAgaGVhZGVycyA9IGhlYWRlcnMuc2V0KCdYLUFQSS1LZXknLCB0aGlzLmNvbmZpZ3VyYXRpb24uYXBpS2V5c1tcIlgtQVBJLUtleVwiXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB0byBkZXRlcm1pbmUgdGhlIEFjY2VwdCBoZWFkZXJcclxuICAgICAgICBsZXQgaHR0cEhlYWRlckFjY2VwdHM6IHN0cmluZ1tdID0gW1xyXG4gICAgICAgICAgICAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICBdO1xyXG4gICAgICAgIGNvbnN0IGh0dHBIZWFkZXJBY2NlcHRTZWxlY3RlZDogc3RyaW5nIHwgdW5kZWZpbmVkID0gdGhpcy5jb25maWd1cmF0aW9uLnNlbGVjdEhlYWRlckFjY2VwdChodHRwSGVhZGVyQWNjZXB0cyk7XHJcbiAgICAgICAgaWYgKGh0dHBIZWFkZXJBY2NlcHRTZWxlY3RlZCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgaGVhZGVycyA9IGhlYWRlcnMuc2V0KCdBY2NlcHQnLCBodHRwSGVhZGVyQWNjZXB0U2VsZWN0ZWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gdG8gZGV0ZXJtaW5lIHRoZSBDb250ZW50LVR5cGUgaGVhZGVyXHJcbiAgICAgICAgY29uc3QgY29uc3VtZXM6IHN0cmluZ1tdID0gW1xyXG4gICAgICAgICAgICAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICBdO1xyXG4gICAgICAgIGNvbnN0IGh0dHBDb250ZW50VHlwZVNlbGVjdGVkOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB0aGlzLmNvbmZpZ3VyYXRpb24uc2VsZWN0SGVhZGVyQ29udGVudFR5cGUoY29uc3VtZXMpO1xyXG4gICAgICAgIGlmIChodHRwQ29udGVudFR5cGVTZWxlY3RlZCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgaGVhZGVycyA9IGhlYWRlcnMuc2V0KCdDb250ZW50LVR5cGUnLCBodHRwQ29udGVudFR5cGVTZWxlY3RlZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LnBvc3Q8VGVuYW50PihgJHt0aGlzLmJhc2VQYXRofS90ZW5hbnRzYCxcclxuICAgICAgICAgICAgdGVuYW50LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRoaXMuY29uZmlndXJhdGlvbi53aXRoQ3JlZGVudGlhbHMsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxyXG4gICAgICAgICAgICAgICAgb2JzZXJ2ZTogb2JzZXJ2ZSxcclxuICAgICAgICAgICAgICAgIHJlcG9ydFByb2dyZXNzOiByZXBvcnRQcm9ncmVzc1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICogQ3JlYXRlcyBhIG5ldyB1c2VyIFxyXG4gICAgICogQHBhcmFtIHVzZXIgVXNlciBjcmVhdGlvbiByZXF1ZXN0IFxyXG4gICAgICogQHBhcmFtIG9ic2VydmUgc2V0IHdoZXRoZXIgb3Igbm90IHRvIHJldHVybiB0aGUgZGF0YSBPYnNlcnZhYmxlIGFzIHRoZSBib2R5LCByZXNwb25zZSBvciBldmVudHMuIGRlZmF1bHRzIHRvIHJldHVybmluZyB0aGUgYm9keS5cclxuICAgICAqIEBwYXJhbSByZXBvcnRQcm9ncmVzcyBmbGFnIHRvIHJlcG9ydCByZXF1ZXN0IGFuZCByZXNwb25zZSBwcm9ncmVzcy5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGNyZWF0ZVVzZXIodXNlcj86IFVzZXJOZXcsIG9ic2VydmU/OiAnYm9keScsIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbik6IE9ic2VydmFibGU8VXNlcj47XHJcbiAgICBwdWJsaWMgY3JlYXRlVXNlcih1c2VyPzogVXNlck5ldywgb2JzZXJ2ZT86ICdyZXNwb25zZScsIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbik6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPFVzZXI+PjtcclxuICAgIHB1YmxpYyBjcmVhdGVVc2VyKHVzZXI/OiBVc2VyTmV3LCBvYnNlcnZlPzogJ2V2ZW50cycsIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbik6IE9ic2VydmFibGU8SHR0cEV2ZW50PFVzZXI+PjtcclxuICAgIHB1YmxpYyBjcmVhdGVVc2VyKHVzZXI/OiBVc2VyTmV3LCBvYnNlcnZlOiBhbnkgPSAnYm9keScsIHJlcG9ydFByb2dyZXNzOiBib29sZWFuID0gZmFsc2UgKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHJcblxyXG4gICAgICAgIGxldCBoZWFkZXJzID0gdGhpcy5kZWZhdWx0SGVhZGVycztcclxuXHJcbiAgICAgICAgLy8gYXV0aGVudGljYXRpb24gKEFwaUtleUF1dGgpIHJlcXVpcmVkXHJcbiAgICAgICAgaWYgKHRoaXMuY29uZmlndXJhdGlvbi5hcGlLZXlzW1wiWC1BUEktS2V5XCJdKSB7XHJcbiAgICAgICAgICAgIGhlYWRlcnMgPSBoZWFkZXJzLnNldCgnWC1BUEktS2V5JywgdGhpcy5jb25maWd1cmF0aW9uLmFwaUtleXNbXCJYLUFQSS1LZXlcIl0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gdG8gZGV0ZXJtaW5lIHRoZSBBY2NlcHQgaGVhZGVyXHJcbiAgICAgICAgbGV0IGh0dHBIZWFkZXJBY2NlcHRzOiBzdHJpbmdbXSA9IFtcclxuICAgICAgICAgICAgJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgXTtcclxuICAgICAgICBjb25zdCBodHRwSGVhZGVyQWNjZXB0U2VsZWN0ZWQ6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHRoaXMuY29uZmlndXJhdGlvbi5zZWxlY3RIZWFkZXJBY2NlcHQoaHR0cEhlYWRlckFjY2VwdHMpO1xyXG4gICAgICAgIGlmIChodHRwSGVhZGVyQWNjZXB0U2VsZWN0ZWQgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGhlYWRlcnMgPSBoZWFkZXJzLnNldCgnQWNjZXB0JywgaHR0cEhlYWRlckFjY2VwdFNlbGVjdGVkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHRvIGRldGVybWluZSB0aGUgQ29udGVudC1UeXBlIGhlYWRlclxyXG4gICAgICAgIGNvbnN0IGNvbnN1bWVzOiBzdHJpbmdbXSA9IFtcclxuICAgICAgICAgICAgJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgXTtcclxuICAgICAgICBjb25zdCBodHRwQ29udGVudFR5cGVTZWxlY3RlZDogc3RyaW5nIHwgdW5kZWZpbmVkID0gdGhpcy5jb25maWd1cmF0aW9uLnNlbGVjdEhlYWRlckNvbnRlbnRUeXBlKGNvbnN1bWVzKTtcclxuICAgICAgICBpZiAoaHR0cENvbnRlbnRUeXBlU2VsZWN0ZWQgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGhlYWRlcnMgPSBoZWFkZXJzLnNldCgnQ29udGVudC1UeXBlJywgaHR0cENvbnRlbnRUeXBlU2VsZWN0ZWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5wb3N0PFVzZXI+KGAke3RoaXMuYmFzZVBhdGh9L3VzZXJzYCxcclxuICAgICAgICAgICAgdXNlcixcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0aGlzLmNvbmZpZ3VyYXRpb24ud2l0aENyZWRlbnRpYWxzLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogaGVhZGVycyxcclxuICAgICAgICAgICAgICAgIG9ic2VydmU6IG9ic2VydmUsXHJcbiAgICAgICAgICAgICAgICByZXBvcnRQcm9ncmVzczogcmVwb3J0UHJvZ3Jlc3NcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqIEF1dGhlbnRpY2F0ZXMgYSB1c2VyIFxyXG4gICAgICogQHBhcmFtIGxvZ2luIFVzZXIgbG9naW4gcmVxdWVzdCBcclxuICAgICAqIEBwYXJhbSBvYnNlcnZlIHNldCB3aGV0aGVyIG9yIG5vdCB0byByZXR1cm4gdGhlIGRhdGEgT2JzZXJ2YWJsZSBhcyB0aGUgYm9keSwgcmVzcG9uc2Ugb3IgZXZlbnRzLiBkZWZhdWx0cyB0byByZXR1cm5pbmcgdGhlIGJvZHkuXHJcbiAgICAgKiBAcGFyYW0gcmVwb3J0UHJvZ3Jlc3MgZmxhZyB0byByZXBvcnQgcmVxdWVzdCBhbmQgcmVzcG9uc2UgcHJvZ3Jlc3MuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsb2dpbihsb2dpbj86IExvZ2luLCBvYnNlcnZlPzogJ2JvZHknLCByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW4pOiBPYnNlcnZhYmxlPFRva2VuPjtcclxuICAgIHB1YmxpYyBsb2dpbihsb2dpbj86IExvZ2luLCBvYnNlcnZlPzogJ3Jlc3BvbnNlJywgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuKTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8VG9rZW4+PjtcclxuICAgIHB1YmxpYyBsb2dpbihsb2dpbj86IExvZ2luLCBvYnNlcnZlPzogJ2V2ZW50cycsIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbik6IE9ic2VydmFibGU8SHR0cEV2ZW50PFRva2VuPj47XHJcbiAgICBwdWJsaWMgbG9naW4obG9naW4/OiBMb2dpbiwgb2JzZXJ2ZTogYW55ID0gJ2JvZHknLCByZXBvcnRQcm9ncmVzczogYm9vbGVhbiA9IGZhbHNlICk6IE9ic2VydmFibGU8YW55PiB7XHJcblxyXG5cclxuICAgICAgICBsZXQgaGVhZGVycyA9IHRoaXMuZGVmYXVsdEhlYWRlcnM7XHJcblxyXG4gICAgICAgIC8vIGF1dGhlbnRpY2F0aW9uIChBcGlLZXlBdXRoKSByZXF1aXJlZFxyXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZ3VyYXRpb24uYXBpS2V5c1tcIlgtQVBJLUtleVwiXSkge1xyXG4gICAgICAgICAgICBoZWFkZXJzID0gaGVhZGVycy5zZXQoJ1gtQVBJLUtleScsIHRoaXMuY29uZmlndXJhdGlvbi5hcGlLZXlzW1wiWC1BUEktS2V5XCJdKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHRvIGRldGVybWluZSB0aGUgQWNjZXB0IGhlYWRlclxyXG4gICAgICAgIGxldCBodHRwSGVhZGVyQWNjZXB0czogc3RyaW5nW10gPSBbXHJcbiAgICAgICAgICAgICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgIF07XHJcbiAgICAgICAgY29uc3QgaHR0cEhlYWRlckFjY2VwdFNlbGVjdGVkOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB0aGlzLmNvbmZpZ3VyYXRpb24uc2VsZWN0SGVhZGVyQWNjZXB0KGh0dHBIZWFkZXJBY2NlcHRzKTtcclxuICAgICAgICBpZiAoaHR0cEhlYWRlckFjY2VwdFNlbGVjdGVkICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBoZWFkZXJzID0gaGVhZGVycy5zZXQoJ0FjY2VwdCcsIGh0dHBIZWFkZXJBY2NlcHRTZWxlY3RlZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB0byBkZXRlcm1pbmUgdGhlIENvbnRlbnQtVHlwZSBoZWFkZXJcclxuICAgICAgICBjb25zdCBjb25zdW1lczogc3RyaW5nW10gPSBbXHJcbiAgICAgICAgICAgICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgIF07XHJcbiAgICAgICAgY29uc3QgaHR0cENvbnRlbnRUeXBlU2VsZWN0ZWQ6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHRoaXMuY29uZmlndXJhdGlvbi5zZWxlY3RIZWFkZXJDb250ZW50VHlwZShjb25zdW1lcyk7XHJcbiAgICAgICAgaWYgKGh0dHBDb250ZW50VHlwZVNlbGVjdGVkICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBoZWFkZXJzID0gaGVhZGVycy5zZXQoJ0NvbnRlbnQtVHlwZScsIGh0dHBDb250ZW50VHlwZVNlbGVjdGVkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQucG9zdDxUb2tlbj4oYCR7dGhpcy5iYXNlUGF0aH0vbG9naW5gLFxyXG4gICAgICAgICAgICBsb2dpbixcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0aGlzLmNvbmZpZ3VyYXRpb24ud2l0aENyZWRlbnRpYWxzLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogaGVhZGVycyxcclxuICAgICAgICAgICAgICAgIG9ic2VydmU6IG9ic2VydmUsXHJcbiAgICAgICAgICAgICAgICByZXBvcnRQcm9ncmVzczogcmVwb3J0UHJvZ3Jlc3NcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==