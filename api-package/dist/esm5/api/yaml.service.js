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
var YamlService = /** @class */ (function () {
    function YamlService(httpClient, basePath, configuration) {
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
    YamlService.prototype.canConsumeForm = function (consumes) {
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
    YamlService.prototype.parseYAML = function (yaml, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (yaml === null || yaml === undefined) {
            throw new Error('Required parameter yaml was null or undefined when calling parseYAML.');
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
            'application/yaml'
        ];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.post(this.basePath + "/yaml", yaml, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    YamlService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__param(1, Optional()), tslib_1.__param(1, Inject(BASE_PATH)), tslib_1.__param(2, Optional()),
        tslib_1.__metadata("design:paramtypes", [HttpClient, String, Configuration])
    ], YamlService);
    return YamlService;
}());
export { YamlService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieWFtbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2xvdWRpYXRvci1yZXN0LWFwaS8iLCJzb3VyY2VzIjpbImFwaS95YW1sLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7R0FVRztBQUNILHVEQUF1RDs7QUFFdkQsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQTJCLGVBQWUsQ0FBQztBQUNsRixPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFDRSxNQUFnQyxzQkFBc0IsQ0FBQztBQU96RixPQUFPLEVBQUUsU0FBUyxFQUFzQixNQUEwQixjQUFjLENBQUM7QUFDakYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUEwQyxrQkFBa0IsQ0FBQztBQUlyRjtJQU1JLHFCQUFzQixVQUFzQixFQUFnQyxRQUFnQixFQUFjLGFBQTRCO1FBQWhILGVBQVUsR0FBVixVQUFVLENBQVk7UUFKbEMsYUFBUSxHQUFHLHVCQUF1QixDQUFDO1FBQ3RDLG1CQUFjLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUNuQyxrQkFBYSxHQUFHLElBQUksYUFBYSxFQUFFLENBQUM7UUFHdkMsSUFBSSxRQUFRLEVBQUU7WUFDVixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztTQUM1QjtRQUNELElBQUksYUFBYSxFQUFFO1lBQ2YsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7WUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLElBQUksYUFBYSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDO1NBQ3ZFO0lBQ0wsQ0FBQztJQUVEOzs7T0FHRztJQUNLLG9DQUFjLEdBQXRCLFVBQXVCLFFBQWtCOztRQUNyQyxJQUFNLElBQUksR0FBRyxxQkFBcUIsQ0FBQzs7WUFDbkMsS0FBc0IsSUFBQSxhQUFBLGlCQUFBLFFBQVEsQ0FBQSxrQ0FBQSx3REFBRTtnQkFBM0IsSUFBTSxPQUFPLHFCQUFBO2dCQUNkLElBQUksSUFBSSxLQUFLLE9BQU8sRUFBRTtvQkFDbEIsT0FBTyxJQUFJLENBQUM7aUJBQ2Y7YUFDSjs7Ozs7Ozs7O1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQWFNLCtCQUFTLEdBQWhCLFVBQWlCLElBQVksRUFBRSxPQUFxQixFQUFFLGNBQStCO1FBQXRELHdCQUFBLEVBQUEsZ0JBQXFCO1FBQUUsK0JBQUEsRUFBQSxzQkFBK0I7UUFFakYsSUFBSSxJQUFJLEtBQUssSUFBSSxJQUFJLElBQUksS0FBSyxTQUFTLEVBQUU7WUFDckMsTUFBTSxJQUFJLEtBQUssQ0FBQyx1RUFBdUUsQ0FBQyxDQUFDO1NBQzVGO1FBRUQsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUVsQyx1Q0FBdUM7UUFDdkMsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUN6QyxPQUFPLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztTQUMvRTtRQUVELGlDQUFpQztRQUNqQyxJQUFJLGlCQUFpQixHQUFhO1lBQzlCLGtCQUFrQjtTQUNyQixDQUFDO1FBQ0YsSUFBTSx3QkFBd0IsR0FBdUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQzlHLElBQUksd0JBQXdCLElBQUksU0FBUyxFQUFFO1lBQ3ZDLE9BQU8sR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSx3QkFBd0IsQ0FBQyxDQUFDO1NBQzdEO1FBRUQsdUNBQXVDO1FBQ3ZDLElBQU0sUUFBUSxHQUFhO1lBQ3ZCLGtCQUFrQjtTQUNyQixDQUFDO1FBQ0YsSUFBTSx1QkFBdUIsR0FBdUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN6RyxJQUFJLHVCQUF1QixJQUFJLFNBQVMsRUFBRTtZQUN0QyxPQUFPLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsdUJBQXVCLENBQUMsQ0FBQztTQUNsRTtRQUVELE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQVMsSUFBSSxDQUFDLFFBQVEsVUFBTyxFQUNwRCxJQUFJLEVBQ0o7WUFDSSxlQUFlLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlO1lBQ25ELE9BQU8sRUFBRSxPQUFPO1lBQ2hCLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLGNBQWMsRUFBRSxjQUFjO1NBQ2pDLENBQ0osQ0FBQztJQUNOLENBQUM7SUFqRlEsV0FBVztRQUR2QixVQUFVLEVBQUU7UUFPc0MsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBQyxtQkFBQSxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUEsRUFBb0IsbUJBQUEsUUFBUSxFQUFFLENBQUE7aURBQXZFLFVBQVUsVUFBNkUsYUFBYTtPQU43SCxXQUFXLENBbUZ2QjtJQUFELGtCQUFDO0NBQUEsQUFuRkQsSUFtRkM7U0FuRlksV0FBVyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDbG91ZGlhdG9yIFJFU1QgQXBpXHJcbiAqIE5vIGRlc2NyaXB0aW9uIHByb3ZpZGVkIChnZW5lcmF0ZWQgYnkgU3dhZ2dlciBDb2RlZ2VuIGh0dHBzOi8vZ2l0aHViLmNvbS9zd2FnZ2VyLWFwaS9zd2FnZ2VyLWNvZGVnZW4pXHJcbiAqXHJcbiAqIE9wZW5BUEkgc3BlYyB2ZXJzaW9uOiAwLjIuMFxyXG4gKiBDb250YWN0OiBkYW5pZWwuYmF1ckB1bmktdWxtLmRlXHJcbiAqXHJcbiAqIE5PVEU6IFRoaXMgY2xhc3MgaXMgYXV0byBnZW5lcmF0ZWQgYnkgdGhlIHN3YWdnZXIgY29kZSBnZW5lcmF0b3IgcHJvZ3JhbS5cclxuICogaHR0cHM6Ly9naXRodWIuY29tL3N3YWdnZXItYXBpL3N3YWdnZXItY29kZWdlbi5naXRcclxuICogRG8gbm90IGVkaXQgdGhlIGNsYXNzIG1hbnVhbGx5LlxyXG4gKi9cclxuLyogdHNsaW50OmRpc2FibGU6bm8tdW51c2VkLXZhcmlhYmxlIG1lbWJlci1vcmRlcmluZyAqL1xyXG5cclxuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCB9ICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFBhcmFtcyxcclxuICAgICAgICAgSHR0cFJlc3BvbnNlLCBIdHRwRXZlbnQgfSAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgQ3VzdG9tSHR0cFVybEVuY29kaW5nQ29kZWMgfSAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4uL2VuY29kZXInO1xyXG5cclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgSm9iIH0gZnJvbSAnLi4vbW9kZWwvam9iJztcclxuXHJcbmltcG9ydCB7IEJBU0VfUEFUSCwgQ09MTEVDVElPTl9GT1JNQVRTIH0gICAgICAgICAgICAgICAgICAgICBmcm9tICcuLi92YXJpYWJsZXMnO1xyXG5pbXBvcnQgeyBDb25maWd1cmF0aW9uIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi4vY29uZmlndXJhdGlvbic7XHJcblxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgWWFtbFNlcnZpY2Uge1xyXG5cclxuICAgIHByb3RlY3RlZCBiYXNlUGF0aCA9ICdodHRwOi8vbG9jYWxob3N0OjkwMDAnO1xyXG4gICAgcHVibGljIGRlZmF1bHRIZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKCk7XHJcbiAgICBwdWJsaWMgY29uZmlndXJhdGlvbiA9IG5ldyBDb25maWd1cmF0aW9uKCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIGh0dHBDbGllbnQ6IEh0dHBDbGllbnQsIEBPcHRpb25hbCgpQEluamVjdChCQVNFX1BBVEgpIGJhc2VQYXRoOiBzdHJpbmcsIEBPcHRpb25hbCgpIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgICBpZiAoYmFzZVBhdGgpIHtcclxuICAgICAgICAgICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29uZmlndXJhdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBjb25maWd1cmF0aW9uO1xyXG4gICAgICAgICAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGggfHwgY29uZmlndXJhdGlvbi5iYXNlUGF0aCB8fCB0aGlzLmJhc2VQYXRoO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSBjb25zdW1lcyBzdHJpbmdbXSBtaW1lLXR5cGVzXHJcbiAgICAgKiBAcmV0dXJuIHRydWU6IGNvbnN1bWVzIGNvbnRhaW5zICdtdWx0aXBhcnQvZm9ybS1kYXRhJywgZmFsc2U6IG90aGVyd2lzZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGNhbkNvbnN1bWVGb3JtKGNvbnN1bWVzOiBzdHJpbmdbXSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGNvbnN0IGZvcm0gPSAnbXVsdGlwYXJ0L2Zvcm0tZGF0YSc7XHJcbiAgICAgICAgZm9yIChjb25zdCBjb25zdW1lIG9mIGNvbnN1bWVzKSB7XHJcbiAgICAgICAgICAgIGlmIChmb3JtID09PSBjb25zdW1lKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSB5YW1sIFlBTUwgcGF5bG9hZFxyXG4gICAgICogQHBhcmFtIG9ic2VydmUgc2V0IHdoZXRoZXIgb3Igbm90IHRvIHJldHVybiB0aGUgZGF0YSBPYnNlcnZhYmxlIGFzIHRoZSBib2R5LCByZXNwb25zZSBvciBldmVudHMuIGRlZmF1bHRzIHRvIHJldHVybmluZyB0aGUgYm9keS5cclxuICAgICAqIEBwYXJhbSByZXBvcnRQcm9ncmVzcyBmbGFnIHRvIHJlcG9ydCByZXF1ZXN0IGFuZCByZXNwb25zZSBwcm9ncmVzcy5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHBhcnNlWUFNTCh5YW1sOiBzdHJpbmcsIG9ic2VydmU/OiAnYm9keScsIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbik6IE9ic2VydmFibGU8Sm9iPjtcclxuICAgIHB1YmxpYyBwYXJzZVlBTUwoeWFtbDogc3RyaW5nLCBvYnNlcnZlPzogJ3Jlc3BvbnNlJywgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuKTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8Sm9iPj47XHJcbiAgICBwdWJsaWMgcGFyc2VZQU1MKHlhbWw6IHN0cmluZywgb2JzZXJ2ZT86ICdldmVudHMnLCByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW4pOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxKb2I+PjtcclxuICAgIHB1YmxpYyBwYXJzZVlBTUwoeWFtbDogc3RyaW5nLCBvYnNlcnZlOiBhbnkgPSAnYm9keScsIHJlcG9ydFByb2dyZXNzOiBib29sZWFuID0gZmFsc2UgKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHJcbiAgICAgICAgaWYgKHlhbWwgPT09IG51bGwgfHwgeWFtbCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVxdWlyZWQgcGFyYW1ldGVyIHlhbWwgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBwYXJzZVlBTUwuJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgaGVhZGVycyA9IHRoaXMuZGVmYXVsdEhlYWRlcnM7XHJcblxyXG4gICAgICAgIC8vIGF1dGhlbnRpY2F0aW9uIChBcGlLZXlBdXRoKSByZXF1aXJlZFxyXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZ3VyYXRpb24uYXBpS2V5c1tcIlgtQVBJLUtleVwiXSkge1xyXG4gICAgICAgICAgICBoZWFkZXJzID0gaGVhZGVycy5zZXQoJ1gtQVBJLUtleScsIHRoaXMuY29uZmlndXJhdGlvbi5hcGlLZXlzW1wiWC1BUEktS2V5XCJdKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHRvIGRldGVybWluZSB0aGUgQWNjZXB0IGhlYWRlclxyXG4gICAgICAgIGxldCBodHRwSGVhZGVyQWNjZXB0czogc3RyaW5nW10gPSBbXHJcbiAgICAgICAgICAgICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgIF07XHJcbiAgICAgICAgY29uc3QgaHR0cEhlYWRlckFjY2VwdFNlbGVjdGVkOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB0aGlzLmNvbmZpZ3VyYXRpb24uc2VsZWN0SGVhZGVyQWNjZXB0KGh0dHBIZWFkZXJBY2NlcHRzKTtcclxuICAgICAgICBpZiAoaHR0cEhlYWRlckFjY2VwdFNlbGVjdGVkICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBoZWFkZXJzID0gaGVhZGVycy5zZXQoJ0FjY2VwdCcsIGh0dHBIZWFkZXJBY2NlcHRTZWxlY3RlZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB0byBkZXRlcm1pbmUgdGhlIENvbnRlbnQtVHlwZSBoZWFkZXJcclxuICAgICAgICBjb25zdCBjb25zdW1lczogc3RyaW5nW10gPSBbXHJcbiAgICAgICAgICAgICdhcHBsaWNhdGlvbi95YW1sJ1xyXG4gICAgICAgIF07XHJcbiAgICAgICAgY29uc3QgaHR0cENvbnRlbnRUeXBlU2VsZWN0ZWQ6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHRoaXMuY29uZmlndXJhdGlvbi5zZWxlY3RIZWFkZXJDb250ZW50VHlwZShjb25zdW1lcyk7XHJcbiAgICAgICAgaWYgKGh0dHBDb250ZW50VHlwZVNlbGVjdGVkICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBoZWFkZXJzID0gaGVhZGVycy5zZXQoJ0NvbnRlbnQtVHlwZScsIGh0dHBDb250ZW50VHlwZVNlbGVjdGVkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQucG9zdDxKb2I+KGAke3RoaXMuYmFzZVBhdGh9L3lhbWxgLFxyXG4gICAgICAgICAgICB5YW1sLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRoaXMuY29uZmlndXJhdGlvbi53aXRoQ3JlZGVudGlhbHMsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxyXG4gICAgICAgICAgICAgICAgb2JzZXJ2ZTogb2JzZXJ2ZSxcclxuICAgICAgICAgICAgICAgIHJlcG9ydFByb2dyZXNzOiByZXBvcnRQcm9ncmVzc1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19