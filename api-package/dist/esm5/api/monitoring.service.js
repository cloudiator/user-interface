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
var MonitoringService = /** @class */ (function () {
    function MonitoringService(httpClient, basePath, configuration) {
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
    MonitoringService.prototype.canConsumeForm = function (consumes) {
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
    MonitoringService.prototype.addMonitor = function (monitor, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (monitor === null || monitor === undefined) {
            throw new Error('Required parameter monitor was null or undefined when calling addMonitor.');
        }
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
        return this.httpClient.post(this.basePath + "/monitors", monitor, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    MonitoringService.prototype.deleteMonitor = function (metric, target, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (metric === null || metric === undefined) {
            throw new Error('Required parameter metric was null or undefined when calling deleteMonitor.');
        }
        if (target === null || target === undefined) {
            throw new Error('Required parameter target was null or undefined when calling deleteMonitor.');
        }
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
        var consumes = [];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.delete(this.basePath + "/monitors/" + encodeURIComponent(String(metric)), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    MonitoringService.prototype.findMonitors = function (observe, reportProgress) {
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
        var consumes = [];
        return this.httpClient.get(this.basePath + "/monitors", {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    MonitoringService.prototype.getMonitor = function (metric, target, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (metric === null || metric === undefined) {
            throw new Error('Required parameter metric was null or undefined when calling getMonitor.');
        }
        if (target === null || target === undefined) {
            throw new Error('Required parameter target was null or undefined when calling getMonitor.');
        }
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
        var consumes = [];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.get(this.basePath + "/monitors/" + encodeURIComponent(String(metric)), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    MonitoringService.prototype.updateMonitor = function (metric, monitor, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (metric === null || metric === undefined) {
            throw new Error('Required parameter metric was null or undefined when calling updateMonitor.');
        }
        if (monitor === null || monitor === undefined) {
            throw new Error('Required parameter monitor was null or undefined when calling updateMonitor.');
        }
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
        return this.httpClient.put(this.basePath + "/monitors/" + encodeURIComponent(String(metric)), monitor, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    MonitoringService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__param(1, Optional()), tslib_1.__param(1, Inject(BASE_PATH)), tslib_1.__param(2, Optional()),
        tslib_1.__metadata("design:paramtypes", [HttpClient, String, Configuration])
    ], MonitoringService);
    return MonitoringService;
}());
export { MonitoringService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uaXRvcmluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2xvdWRpYXRvci1yZXN0LWFwaS8iLCJzb3VyY2VzIjpbImFwaS9tb25pdG9yaW5nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7R0FVRztBQUNILHVEQUF1RDs7QUFFdkQsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQTJCLGVBQWUsQ0FBQztBQUNsRixPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFDRSxNQUFnQyxzQkFBc0IsQ0FBQztBQVF6RixPQUFPLEVBQUUsU0FBUyxFQUFzQixNQUEwQixjQUFjLENBQUM7QUFDakYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUEwQyxrQkFBa0IsQ0FBQztBQUlyRjtJQU1JLDJCQUFzQixVQUFzQixFQUFnQyxRQUFnQixFQUFjLGFBQTRCO1FBQWhILGVBQVUsR0FBVixVQUFVLENBQVk7UUFKbEMsYUFBUSxHQUFHLHVCQUF1QixDQUFDO1FBQ3RDLG1CQUFjLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUNuQyxrQkFBYSxHQUFHLElBQUksYUFBYSxFQUFFLENBQUM7UUFHdkMsSUFBSSxRQUFRLEVBQUU7WUFDVixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztTQUM1QjtRQUNELElBQUksYUFBYSxFQUFFO1lBQ2YsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7WUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLElBQUksYUFBYSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDO1NBQ3ZFO0lBQ0wsQ0FBQztJQUVEOzs7T0FHRztJQUNLLDBDQUFjLEdBQXRCLFVBQXVCLFFBQWtCOztRQUNyQyxJQUFNLElBQUksR0FBRyxxQkFBcUIsQ0FBQzs7WUFDbkMsS0FBc0IsSUFBQSxhQUFBLGlCQUFBLFFBQVEsQ0FBQSxrQ0FBQSx3REFBRTtnQkFBM0Is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USxrQkFBYSxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUcsRUFDakcsT0FBTyxFQUNQO1lBQ0ksZUFBZSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZTtZQUNuRCxPQUFPLEVBQUUsT0FBTztZQUNoQixPQUFPLEVBQUUsT0FBTztZQUNoQixjQUFjLEVBQUUsY0FBYztTQUNqQyxDQUNKLENBQUM7SUFDTixDQUFDO0lBalNRLGlCQUFpQjtRQUQ3QixVQUFVLEVBQUU7UUFPc0MsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBQyxtQkFBQSxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUEsRUFBb0IsbUJBQUEsUUFBUSxFQUFFLENBQUE7aURBQXZFLFVBQVUsVUFBNkUsYUFBYTtPQU43SCxpQkFBaUIsQ0FtUzdCO0lBQUQsd0JBQUM7Q0FBQSxBQW5TRCxJQW1TQztTQW5TWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ2xvdWRpYXRvciBSRVNUIEFwaVxyXG4gKiBObyBkZXNjcmlwdGlvbiBwcm92aWRlZCAoZ2VuZXJhdGVkIGJ5IFN3YWdnZXIgQ29kZWdlbiBodHRwczovL2dpdGh1Yi5jb20vc3dhZ2dlci1hcGkvc3dhZ2dlci1jb2RlZ2VuKVxyXG4gKlxyXG4gKiBPcGVuQVBJIHNwZWMgdmVyc2lvbjogMC4yLjBcclxuICogQ29udGFjdDogZGFuaWVsLmJhdXJAdW5pLXVsbS5kZVxyXG4gKlxyXG4gKiBOT1RFOiBUaGlzIGNsYXNzIGlzIGF1dG8gZ2VuZXJhdGVkIGJ5IHRoZSBzd2FnZ2VyIGNvZGUgZ2VuZXJhdG9yIHByb2dyYW0uXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9zd2FnZ2VyLWFwaS9zd2FnZ2VyLWNvZGVnZW4uZ2l0XHJcbiAqIERvIG5vdCBlZGl0IHRoZSBjbGFzcyBtYW51YWxseS5cclxuICovXHJcbi8qIHRzbGludDpkaXNhYmxlOm5vLXVudXNlZC12YXJpYWJsZSBtZW1iZXItb3JkZXJpbmcgKi9cclxuXHJcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT3B0aW9uYWwgfSAgICAgICAgICAgICAgICAgICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBQYXJhbXMsXHJcbiAgICAgICAgIEh0dHBSZXNwb25zZSwgSHR0cEV2ZW50IH0gICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IEN1c3RvbUh0dHBVcmxFbmNvZGluZ0NvZGVjIH0gICAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuLi9lbmNvZGVyJztcclxuXHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IE1vbml0b3IgfSBmcm9tICcuLi9tb2RlbC9tb25pdG9yJztcclxuaW1wb3J0IHsgTW9uaXRvcmluZ1RhcmdldCB9IGZyb20gJy4uL21vZGVsL21vbml0b3JpbmdUYXJnZXQnO1xyXG5cclxuaW1wb3J0IHsgQkFTRV9QQVRILCBDT0xMRUNUSU9OX0ZPUk1BVFMgfSAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4uL3ZhcmlhYmxlcyc7XHJcbmltcG9ydCB7IENvbmZpZ3VyYXRpb24gfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuLi9jb25maWd1cmF0aW9uJztcclxuXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBNb25pdG9yaW5nU2VydmljZSB7XHJcblxyXG4gICAgcHJvdGVjdGVkIGJhc2VQYXRoID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6OTAwMCc7XHJcbiAgICBwdWJsaWMgZGVmYXVsdEhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKTtcclxuICAgIHB1YmxpYyBjb25maWd1cmF0aW9uID0gbmV3IENvbmZpZ3VyYXRpb24oKTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgaHR0cENsaWVudDogSHR0cENsaWVudCwgQE9wdGlvbmFsKClASW5qZWN0KEJBU0VfUEFUSCkgYmFzZVBhdGg6IHN0cmluZywgQE9wdGlvbmFsKCkgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvbikge1xyXG4gICAgICAgIGlmIChiYXNlUGF0aCkge1xyXG4gICAgICAgICAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjb25maWd1cmF0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IGNvbmZpZ3VyYXRpb247XHJcbiAgICAgICAgICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aCB8fCBjb25maWd1cmF0aW9uLmJhc2VQYXRoIHx8IHRoaXMuYmFzZVBhdGg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIGNvbnN1bWVzIHN0cmluZ1tdIG1pbWUtdHlwZXNcclxuICAgICAqIEByZXR1cm4gdHJ1ZTogY29uc3VtZXMgY29udGFpbnMgJ211bHRpcGFydC9mb3JtLWRhdGEnLCBmYWxzZTogb3RoZXJ3aXNlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgY2FuQ29uc3VtZUZvcm0oY29uc3VtZXM6IHN0cmluZ1tdKTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc3QgZm9ybSA9ICdtdWx0aXBhcnQvZm9ybS1kYXRhJztcclxuICAgICAgICBmb3IgKGNvbnN0IGNvbnN1bWUgb2YgY29uc3VtZXMpIHtcclxuICAgICAgICAgICAgaWYgKGZvcm0gPT09IGNvbnN1bWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqIENyZWF0ZXMgYSBtb25pdG9yIFxyXG4gICAgICogQHBhcmFtIG1vbml0b3IgTW9uaXRvciB0byBiZSBjcmVhdGVkIFxyXG4gICAgICogQHBhcmFtIG9ic2VydmUgc2V0IHdoZXRoZXIgb3Igbm90IHRvIHJldHVybiB0aGUgZGF0YSBPYnNlcnZhYmxlIGFzIHRoZSBib2R5LCByZXNwb25zZSBvciBldmVudHMuIGRlZmF1bHRzIHRvIHJldHVybmluZyB0aGUgYm9keS5cclxuICAgICAqIEBwYXJhbSByZXBvcnRQcm9ncmVzcyBmbGFnIHRvIHJlcG9ydCByZXF1ZXN0IGFuZCByZXNwb25zZSBwcm9ncmVzcy5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGFkZE1vbml0b3IobW9uaXRvcjogTW9uaXRvciwgb2JzZXJ2ZT86ICdib2R5JywgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuKTogT2JzZXJ2YWJsZTxNb25pdG9yPjtcclxuICAgIHB1YmxpYyBhZGRNb25pdG9yKG1vbml0b3I6IE1vbml0b3IsIG9ic2VydmU/OiAncmVzcG9uc2UnLCByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW4pOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxNb25pdG9yPj47XHJcbiAgICBwdWJsaWMgYWRkTW9uaXRvcihtb25pdG9yOiBNb25pdG9yLCBvYnNlcnZlPzogJ2V2ZW50cycsIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbik6IE9ic2VydmFibGU8SHR0cEV2ZW50PE1vbml0b3I+PjtcclxuICAgIHB1YmxpYyBhZGRNb25pdG9yKG1vbml0b3I6IE1vbml0b3IsIG9ic2VydmU6IGFueSA9ICdib2R5JywgcmVwb3J0UHJvZ3Jlc3M6IGJvb2xlYW4gPSBmYWxzZSApOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cclxuICAgICAgICBpZiAobW9uaXRvciA9PT0gbnVsbCB8fCBtb25pdG9yID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZXF1aXJlZCBwYXJhbWV0ZXIgbW9uaXRvciB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGFkZE1vbml0b3IuJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgaGVhZGVycyA9IHRoaXMuZGVmYXVsdEhlYWRlcnM7XHJcblxyXG4gICAgICAgIC8vIGF1dGhlbnRpY2F0aW9uIChBcGlLZXlBdXRoKSByZXF1aXJlZFxyXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZ3VyYXRpb24uYXBpS2V5c1tcIlgtQVBJLUtleVwiXSkge1xyXG4gICAgICAgICAgICBoZWFkZXJzID0gaGVhZGVycy5zZXQoJ1gtQVBJLUtleScsIHRoaXMuY29uZmlndXJhdGlvbi5hcGlLZXlzW1wiWC1BUEktS2V5XCJdKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHRvIGRldGVybWluZSB0aGUgQWNjZXB0IGhlYWRlclxyXG4gICAgICAgIGxldCBodHRwSGVhZGVyQWNjZXB0czogc3RyaW5nW10gPSBbXHJcbiAgICAgICAgICAgICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgIF07XHJcbiAgICAgICAgY29uc3QgaHR0cEhlYWRlckFjY2VwdFNlbGVjdGVkOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB0aGlzLmNvbmZpZ3VyYXRpb24uc2VsZWN0SGVhZGVyQWNjZXB0KGh0dHBIZWFkZXJBY2NlcHRzKTtcclxuICAgICAgICBpZiAoaHR0cEhlYWRlckFjY2VwdFNlbGVjdGVkICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBoZWFkZXJzID0gaGVhZGVycy5zZXQoJ0FjY2VwdCcsIGh0dHBIZWFkZXJBY2NlcHRTZWxlY3RlZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB0byBkZXRlcm1pbmUgdGhlIENvbnRlbnQtVHlwZSBoZWFkZXJcclxuICAgICAgICBjb25zdCBjb25zdW1lczogc3RyaW5nW10gPSBbXHJcbiAgICAgICAgICAgICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgIF07XHJcbiAgICAgICAgY29uc3QgaHR0cENvbnRlbnRUeXBlU2VsZWN0ZWQ6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHRoaXMuY29uZmlndXJhdGlvbi5zZWxlY3RIZWFkZXJDb250ZW50VHlwZShjb25zdW1lcyk7XHJcbiAgICAgICAgaWYgKGh0dHBDb250ZW50VHlwZVNlbGVjdGVkICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBoZWFkZXJzID0gaGVhZGVycy5zZXQoJ0NvbnRlbnQtVHlwZScsIGh0dHBDb250ZW50VHlwZVNlbGVjdGVkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQucG9zdDxNb25pdG9yPihgJHt0aGlzLmJhc2VQYXRofS9tb25pdG9yc2AsXHJcbiAgICAgICAgICAgIG1vbml0b3IsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdGhpcy5jb25maWd1cmF0aW9uLndpdGhDcmVkZW50aWFscyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXHJcbiAgICAgICAgICAgICAgICBvYnNlcnZlOiBvYnNlcnZlLFxyXG4gICAgICAgICAgICAgICAgcmVwb3J0UHJvZ3Jlc3M6IHJlcG9ydFByb2dyZXNzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKiBEZWxldGVzIHRoZSBtb25pdG9yIGlkZW50aWZpZWQgYnkgdGhlIGdpdmVuIG1ldHJpYyBuYW1lLiBcclxuICAgICAqIEBwYXJhbSBtZXRyaWMgVW5pcXVlIGlkZW50aWZpZXIgb2YgYSBtb25pdG9yXHJcbiAgICAgKiBAcGFyYW0gdGFyZ2V0IFRhcmdldCBvZiB0aGUgTW9uaXRvciBcclxuICAgICAqIEBwYXJhbSBvYnNlcnZlIHNldCB3aGV0aGVyIG9yIG5vdCB0byByZXR1cm4gdGhlIGRhdGEgT2JzZXJ2YWJsZSBhcyB0aGUgYm9keSwgcmVzcG9uc2Ugb3IgZXZlbnRzLiBkZWZhdWx0cyB0byByZXR1cm5pbmcgdGhlIGJvZHkuXHJcbiAgICAgKiBAcGFyYW0gcmVwb3J0UHJvZ3Jlc3MgZmxhZyB0byByZXBvcnQgcmVxdWVzdCBhbmQgcmVzcG9uc2UgcHJvZ3Jlc3MuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBkZWxldGVNb25pdG9yKG1ldHJpYzogc3RyaW5nLCB0YXJnZXQ6IE1vbml0b3JpbmdUYXJnZXQsIG9ic2VydmU/OiAnYm9keScsIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbik6IE9ic2VydmFibGU8YW55PjtcclxuICAgIHB1YmxpYyBkZWxldGVNb25pdG9yKG1ldHJpYzogc3RyaW5nLCB0YXJnZXQ6IE1vbml0b3JpbmdUYXJnZXQsIG9ic2VydmU/OiAncmVzcG9uc2UnLCByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW4pOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxhbnk+PjtcclxuICAgIHB1YmxpYyBkZWxldGVNb25pdG9yKG1ldHJpYzogc3RyaW5nLCB0YXJnZXQ6IE1vbml0b3JpbmdUYXJnZXQsIG9ic2VydmU/OiAnZXZlbnRzJywgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj47XHJcbiAgICBwdWJsaWMgZGVsZXRlTW9uaXRvcihtZXRyaWM6IHN0cmluZywgdGFyZ2V0OiBNb25pdG9yaW5nVGFyZ2V0LCBvYnNlcnZlOiBhbnkgPSAnYm9keScsIHJlcG9ydFByb2dyZXNzOiBib29sZWFuID0gZmFsc2UgKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHJcbiAgICAgICAgaWYgKG1ldHJpYyA9PT0gbnVsbCB8fCBtZXRyaWMgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlcXVpcmVkIHBhcmFtZXRlciBtZXRyaWMgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBkZWxldGVNb25pdG9yLicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRhcmdldCA9PT0gbnVsbCB8fCB0YXJnZXQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlcXVpcmVkIHBhcmFtZXRlciB0YXJnZXQgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBkZWxldGVNb25pdG9yLicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSB0aGlzLmRlZmF1bHRIZWFkZXJzO1xyXG5cclxuICAgICAgICAvLyBhdXRoZW50aWNhdGlvbiAoQXBpS2V5QXV0aCkgcmVxdWlyZWRcclxuICAgICAgICBpZiAodGhpcy5jb25maWd1cmF0aW9uLmFwaUtleXNbXCJYLUFQSS1LZXlcIl0pIHtcclxuICAgICAgICAgICAgaGVhZGVycyA9IGhlYWRlcnMuc2V0KCdYLUFQSS1LZXknLCB0aGlzLmNvbmZpZ3VyYXRpb24uYXBpS2V5c1tcIlgtQVBJLUtleVwiXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB0byBkZXRlcm1pbmUgdGhlIEFjY2VwdCBoZWFkZXJcclxuICAgICAgICBsZXQgaHR0cEhlYWRlckFjY2VwdHM6IHN0cmluZ1tdID0gW1xyXG4gICAgICAgICAgICAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICBdO1xyXG4gICAgICAgIGNvbnN0IGh0dHBIZWFkZXJBY2NlcHRTZWxlY3RlZDogc3RyaW5nIHwgdW5kZWZpbmVkID0gdGhpcy5jb25maWd1cmF0aW9uLnNlbGVjdEhlYWRlckFjY2VwdChodHRwSGVhZGVyQWNjZXB0cyk7XHJcbiAgICAgICAgaWYgKGh0dHBIZWFkZXJBY2NlcHRTZWxlY3RlZCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgaGVhZGVycyA9IGhlYWRlcnMuc2V0KCdBY2NlcHQnLCBodHRwSGVhZGVyQWNjZXB0U2VsZWN0ZWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gdG8gZGV0ZXJtaW5lIHRoZSBDb250ZW50LVR5cGUgaGVhZGVyXHJcbiAgICAgICAgY29uc3QgY29uc3VtZXM6IHN0cmluZ1tdID0gW1xyXG4gICAgICAgIF07XHJcbiAgICAgICAgY29uc3QgaHR0cENvbnRlbnRUeXBlU2VsZWN0ZWQ6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHRoaXMuY29uZmlndXJhdGlvbi5zZWxlY3RIZWFkZXJDb250ZW50VHlwZShjb25zdW1lcyk7XHJcbiAgICAgICAgaWYgKGh0dHBDb250ZW50VHlwZVNlbGVjdGVkICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBoZWFkZXJzID0gaGVhZGVycy5zZXQoJ0NvbnRlbnQtVHlwZScsIGh0dHBDb250ZW50VHlwZVNlbGVjdGVkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQuZGVsZXRlPGFueT4oYCR7dGhpcy5iYXNlUGF0aH0vbW9uaXRvcnMvJHtlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKG1ldHJpYykpfWAsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdGhpcy5jb25maWd1cmF0aW9uLndpdGhDcmVkZW50aWFscyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXHJcbiAgICAgICAgICAgICAgICBvYnNlcnZlOiBvYnNlcnZlLFxyXG4gICAgICAgICAgICAgICAgcmVwb3J0UHJvZ3Jlc3M6IHJlcG9ydFByb2dyZXNzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKiBSZXR1cm5zIGFsbCBtb25pdG9ycyB2aXNpYmxlIHRvIHRoZSB1c2VyIFxyXG4gICAgICogQHBhcmFtIG9ic2VydmUgc2V0IHdoZXRoZXIgb3Igbm90IHRvIHJldHVybiB0aGUgZGF0YSBPYnNlcnZhYmxlIGFzIHRoZSBib2R5LCByZXNwb25zZSBvciBldmVudHMuIGRlZmF1bHRzIHRvIHJldHVybmluZyB0aGUgYm9keS5cclxuICAgICAqIEBwYXJhbSByZXBvcnRQcm9ncmVzcyBmbGFnIHRvIHJlcG9ydCByZXF1ZXN0IGFuZCByZXNwb25zZSBwcm9ncmVzcy5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGZpbmRNb25pdG9ycyhvYnNlcnZlPzogJ2JvZHknLCByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW4pOiBPYnNlcnZhYmxlPEFycmF5PE1vbml0b3I+PjtcclxuICAgIHB1YmxpYyBmaW5kTW9uaXRvcnMob2JzZXJ2ZT86ICdyZXNwb25zZScsIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbik6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPEFycmF5PE1vbml0b3I+Pj47XHJcbiAgICBwdWJsaWMgZmluZE1vbml0b3JzKG9ic2VydmU/OiAnZXZlbnRzJywgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8QXJyYXk8TW9uaXRvcj4+PjtcclxuICAgIHB1YmxpYyBmaW5kTW9uaXRvcnMob2JzZXJ2ZTogYW55ID0gJ2JvZHknLCByZXBvcnRQcm9ncmVzczogYm9vbGVhbiA9IGZhbHNlICk6IE9ic2VydmFibGU8YW55PiB7XHJcblxyXG4gICAgICAgIGxldCBoZWFkZXJzID0gdGhpcy5kZWZhdWx0SGVhZGVycztcclxuXHJcbiAgICAgICAgLy8gYXV0aGVudGljYXRpb24gKEFwaUtleUF1dGgpIHJlcXVpcmVkXHJcbiAgICAgICAgaWYgKHRoaXMuY29uZmlndXJhdGlvbi5hcGlLZXlzW1wiWC1BUEktS2V5XCJdKSB7XHJcbiAgICAgICAgICAgIGhlYWRlcnMgPSBoZWFkZXJzLnNldCgnWC1BUEktS2V5JywgdGhpcy5jb25maWd1cmF0aW9uLmFwaUtleXNbXCJYLUFQSS1LZXlcIl0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gdG8gZGV0ZXJtaW5lIHRoZSBBY2NlcHQgaGVhZGVyXHJcbiAgICAgICAgbGV0IGh0dHBIZWFkZXJBY2NlcHRzOiBzdHJpbmdbXSA9IFtcclxuICAgICAgICAgICAgJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgXTtcclxuICAgICAgICBjb25zdCBodHRwSGVhZGVyQWNjZXB0U2VsZWN0ZWQ6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHRoaXMuY29uZmlndXJhdGlvbi5zZWxlY3RIZWFkZXJBY2NlcHQoaHR0cEhlYWRlckFjY2VwdHMpO1xyXG4gICAgICAgIGlmIChodHRwSGVhZGVyQWNjZXB0U2VsZWN0ZWQgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGhlYWRlcnMgPSBoZWFkZXJzLnNldCgnQWNjZXB0JywgaHR0cEhlYWRlckFjY2VwdFNlbGVjdGVkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHRvIGRldGVybWluZSB0aGUgQ29udGVudC1UeXBlIGhlYWRlclxyXG4gICAgICAgIGNvbnN0IGNvbnN1bWVzOiBzdHJpbmdbXSA9IFtcclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LmdldDxBcnJheTxNb25pdG9yPj4oYCR7dGhpcy5iYXNlUGF0aH0vbW9uaXRvcnNgLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRoaXMuY29uZmlndXJhdGlvbi53aXRoQ3JlZGVudGlhbHMsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxyXG4gICAgICAgICAgICAgICAgb2JzZXJ2ZTogb2JzZXJ2ZSxcclxuICAgICAgICAgICAgICAgIHJlcG9ydFByb2dyZXNzOiByZXBvcnRQcm9ncmVzc1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICogUmV0cmlldmVzIHRoZSBtb25pdG9yIHdpdGggdGhlIGdpdmVuIG1ldHJpYyBuYW1lIFxyXG4gICAgICogQHBhcmFtIG1ldHJpYyBVbmlxdWUgaWRlbnRpZmllciBvZiBhIG1vbml0b3JcclxuICAgICAqIEBwYXJhbSB0YXJnZXQgVGFyZ2V0IG9mIHRoZSBNb25pdG9yIFxyXG4gICAgICogQHBhcmFtIG9ic2VydmUgc2V0IHdoZXRoZXIgb3Igbm90IHRvIHJldHVybiB0aGUgZGF0YSBPYnNlcnZhYmxlIGFzIHRoZSBib2R5LCByZXNwb25zZSBvciBldmVudHMuIGRlZmF1bHRzIHRvIHJldHVybmluZyB0aGUgYm9keS5cclxuICAgICAqIEBwYXJhbSByZXBvcnRQcm9ncmVzcyBmbGFnIHRvIHJlcG9ydCByZXF1ZXN0IGFuZCByZXNwb25zZSBwcm9ncmVzcy5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldE1vbml0b3IobWV0cmljOiBzdHJpbmcsIHRhcmdldDogTW9uaXRvcmluZ1RhcmdldCwgb2JzZXJ2ZT86ICdib2R5JywgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuKTogT2JzZXJ2YWJsZTxNb25pdG9yPjtcclxuICAgIHB1YmxpYyBnZXRNb25pdG9yKG1ldHJpYzogc3RyaW5nLCB0YXJnZXQ6IE1vbml0b3JpbmdUYXJnZXQsIG9ic2VydmU/OiAncmVzcG9uc2UnLCByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW4pOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxNb25pdG9yPj47XHJcbiAgICBwdWJsaWMgZ2V0TW9uaXRvcihtZXRyaWM6IHN0cmluZywgdGFyZ2V0OiBNb25pdG9yaW5nVGFyZ2V0LCBvYnNlcnZlPzogJ2V2ZW50cycsIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbik6IE9ic2VydmFibGU8SHR0cEV2ZW50PE1vbml0b3I+PjtcclxuICAgIHB1YmxpYyBnZXRNb25pdG9yKG1ldHJpYzogc3RyaW5nLCB0YXJnZXQ6IE1vbml0b3JpbmdUYXJnZXQsIG9ic2VydmU6IGFueSA9ICdib2R5JywgcmVwb3J0UHJvZ3Jlc3M6IGJvb2xlYW4gPSBmYWxzZSApOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cclxuICAgICAgICBpZiAobWV0cmljID09PSBudWxsIHx8IG1ldHJpYyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVxdWlyZWQgcGFyYW1ldGVyIG1ldHJpYyB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGdldE1vbml0b3IuJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGFyZ2V0ID09PSBudWxsIHx8IHRhcmdldCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVxdWlyZWQgcGFyYW1ldGVyIHRhcmdldCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGdldE1vbml0b3IuJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgaGVhZGVycyA9IHRoaXMuZGVmYXVsdEhlYWRlcnM7XHJcblxyXG4gICAgICAgIC8vIGF1dGhlbnRpY2F0aW9uIChBcGlLZXlBdXRoKSByZXF1aXJlZFxyXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZ3VyYXRpb24uYXBpS2V5c1tcIlgtQVBJLUtleVwiXSkge1xyXG4gICAgICAgICAgICBoZWFkZXJzID0gaGVhZGVycy5zZXQoJ1gtQVBJLUtleScsIHRoaXMuY29uZmlndXJhdGlvbi5hcGlLZXlzW1wiWC1BUEktS2V5XCJdKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHRvIGRldGVybWluZSB0aGUgQWNjZXB0IGhlYWRlclxyXG4gICAgICAgIGxldCBodHRwSGVhZGVyQWNjZXB0czogc3RyaW5nW10gPSBbXHJcbiAgICAgICAgICAgICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgIF07XHJcbiAgICAgICAgY29uc3QgaHR0cEhlYWRlckFjY2VwdFNlbGVjdGVkOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB0aGlzLmNvbmZpZ3VyYXRpb24uc2VsZWN0SGVhZGVyQWNjZXB0KGh0dHBIZWFkZXJBY2NlcHRzKTtcclxuICAgICAgICBpZiAoaHR0cEhlYWRlckFjY2VwdFNlbGVjdGVkICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBoZWFkZXJzID0gaGVhZGVycy5zZXQoJ0FjY2VwdCcsIGh0dHBIZWFkZXJBY2NlcHRTZWxlY3RlZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB0byBkZXRlcm1pbmUgdGhlIENvbnRlbnQtVHlwZSBoZWFkZXJcclxuICAgICAgICBjb25zdCBjb25zdW1lczogc3RyaW5nW10gPSBbXHJcbiAgICAgICAgXTtcclxuICAgICAgICBjb25zdCBodHRwQ29udGVudFR5cGVTZWxlY3RlZDogc3RyaW5nIHwgdW5kZWZpbmVkID0gdGhpcy5jb25maWd1cmF0aW9uLnNlbGVjdEhlYWRlckNvbnRlbnRUeXBlKGNvbnN1bWVzKTtcclxuICAgICAgICBpZiAoaHR0cENvbnRlbnRUeXBlU2VsZWN0ZWQgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGhlYWRlcnMgPSBoZWFkZXJzLnNldCgnQ29udGVudC1UeXBlJywgaHR0cENvbnRlbnRUeXBlU2VsZWN0ZWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5nZXQ8TW9uaXRvcj4oYCR7dGhpcy5iYXNlUGF0aH0vbW9uaXRvcnMvJHtlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKG1ldHJpYykpfWAsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdGhpcy5jb25maWd1cmF0aW9uLndpdGhDcmVkZW50aWFscyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXHJcbiAgICAgICAgICAgICAgICBvYnNlcnZlOiBvYnNlcnZlLFxyXG4gICAgICAgICAgICAgICAgcmVwb3J0UHJvZ3Jlc3M6IHJlcG9ydFByb2dyZXNzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKiBVcGRhdGluZyBhIG1vbml0b3IgXHJcbiAgICAgKiBAcGFyYW0gbWV0cmljIFVuaXF1ZSBpZGVudGlmaWVyIG9mIGEgbW9uaXRvclxyXG4gICAgICogQHBhcmFtIG1vbml0b3IgTW9uaXRvciB0byBiZSB1cGRhdGVkIFxyXG4gICAgICogQHBhcmFtIG9ic2VydmUgc2V0IHdoZXRoZXIgb3Igbm90IHRvIHJldHVybiB0aGUgZGF0YSBPYnNlcnZhYmxlIGFzIHRoZSBib2R5LCByZXNwb25zZSBvciBldmVudHMuIGRlZmF1bHRzIHRvIHJldHVybmluZyB0aGUgYm9keS5cclxuICAgICAqIEBwYXJhbSByZXBvcnRQcm9ncmVzcyBmbGFnIHRvIHJlcG9ydCByZXF1ZXN0IGFuZCByZXNwb25zZSBwcm9ncmVzcy5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHVwZGF0ZU1vbml0b3IobWV0cmljOiBzdHJpbmcsIG1vbml0b3I6IE1vbml0b3IsIG9ic2VydmU/OiAnYm9keScsIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbik6IE9ic2VydmFibGU8TW9uaXRvcj47XHJcbiAgICBwdWJsaWMgdXBkYXRlTW9uaXRvcihtZXRyaWM6IHN0cmluZywgbW9uaXRvcjogTW9uaXRvciwgb2JzZXJ2ZT86ICdyZXNwb25zZScsIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbik6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPE1vbml0b3I+PjtcclxuICAgIHB1YmxpYyB1cGRhdGVNb25pdG9yKG1ldHJpYzogc3RyaW5nLCBtb25pdG9yOiBNb25pdG9yLCBvYnNlcnZlPzogJ2V2ZW50cycsIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbik6IE9ic2VydmFibGU8SHR0cEV2ZW50PE1vbml0b3I+PjtcclxuICAgIHB1YmxpYyB1cGRhdGVNb25pdG9yKG1ldHJpYzogc3RyaW5nLCBtb25pdG9yOiBNb25pdG9yLCBvYnNlcnZlOiBhbnkgPSAnYm9keScsIHJlcG9ydFByb2dyZXNzOiBib29sZWFuID0gZmFsc2UgKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHJcbiAgICAgICAgaWYgKG1ldHJpYyA9PT0gbnVsbCB8fCBtZXRyaWMgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlcXVpcmVkIHBhcmFtZXRlciBtZXRyaWMgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyB1cGRhdGVNb25pdG9yLicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG1vbml0b3IgPT09IG51bGwgfHwgbW9uaXRvciA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVxdWlyZWQgcGFyYW1ldGVyIG1vbml0b3Igd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyB1cGRhdGVNb25pdG9yLicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSB0aGlzLmRlZmF1bHRIZWFkZXJzO1xyXG5cclxuICAgICAgICAvLyBhdXRoZW50aWNhdGlvbiAoQXBpS2V5QXV0aCkgcmVxdWlyZWRcclxuICAgICAgICBpZiAodGhpcy5jb25maWd1cmF0aW9uLmFwaUtleXNbXCJYLUFQSS1LZXlcIl0pIHtcclxuICAgICAgICAgICAgaGVhZGVycyA9IGhlYWRlcnMuc2V0KCdYLUFQSS1LZXknLCB0aGlzLmNvbmZpZ3VyYXRpb24uYXBpS2V5c1tcIlgtQVBJLUtleVwiXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB0byBkZXRlcm1pbmUgdGhlIEFjY2VwdCBoZWFkZXJcclxuICAgICAgICBsZXQgaHR0cEhlYWRlckFjY2VwdHM6IHN0cmluZ1tdID0gW1xyXG4gICAgICAgICAgICAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICBdO1xyXG4gICAgICAgIGNvbnN0IGh0dHBIZWFkZXJBY2NlcHRTZWxlY3RlZDogc3RyaW5nIHwgdW5kZWZpbmVkID0gdGhpcy5jb25maWd1cmF0aW9uLnNlbGVjdEhlYWRlckFjY2VwdChodHRwSGVhZGVyQWNjZXB0cyk7XHJcbiAgICAgICAgaWYgKGh0dHBIZWFkZXJBY2NlcHRTZWxlY3RlZCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgaGVhZGVycyA9IGhlYWRlcnMuc2V0KCdBY2NlcHQnLCBodHRwSGVhZGVyQWNjZXB0U2VsZWN0ZWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gdG8gZGV0ZXJtaW5lIHRoZSBDb250ZW50LVR5cGUgaGVhZGVyXHJcbiAgICAgICAgY29uc3QgY29uc3VtZXM6IHN0cmluZ1tdID0gW1xyXG4gICAgICAgICAgICAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICBdO1xyXG4gICAgICAgIGNvbnN0IGh0dHBDb250ZW50VHlwZVNlbGVjdGVkOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB0aGlzLmNvbmZpZ3VyYXRpb24uc2VsZWN0SGVhZGVyQ29udGVudFR5cGUoY29uc3VtZXMpO1xyXG4gICAgICAgIGlmIChodHRwQ29udGVudFR5cGVTZWxlY3RlZCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgaGVhZGVycyA9IGhlYWRlcnMuc2V0KCdDb250ZW50LVR5cGUnLCBodHRwQ29udGVudFR5cGVTZWxlY3RlZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LnB1dDxNb25pdG9yPihgJHt0aGlzLmJhc2VQYXRofS9tb25pdG9ycy8ke2VuY29kZVVSSUNvbXBvbmVudChTdHJpbmcobWV0cmljKSl9YCxcclxuICAgICAgICAgICAgbW9uaXRvcixcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0aGlzLmNvbmZpZ3VyYXRpb24ud2l0aENyZWRlbnRpYWxzLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogaGVhZGVycyxcclxuICAgICAgICAgICAgICAgIG9ic2VydmU6IG9ic2VydmUsXHJcbiAgICAgICAgICAgICAgICByZXBvcnRQcm9ncmVzczogcmVwb3J0UHJvZ3Jlc3NcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==