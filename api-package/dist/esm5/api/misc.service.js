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
var MiscService = /** @class */ (function () {
    function MiscService(httpClient, basePath, configuration) {
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
    MiscService.prototype.canConsumeForm = function (consumes) {
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
    MiscService.prototype.installTools = function (installRequest, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (installRequest === null || installRequest === undefined) {
            throw new Error('Required parameter installRequest was null or undefined when calling installTools.');
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
        return this.httpClient.post(this.basePath + "/installer", installRequest, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    MiscService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__param(1, Optional()), tslib_1.__param(1, Inject(BASE_PATH)), tslib_1.__param(2, Optional()),
        tslib_1.__metadata("design:paramtypes", [HttpClient, String, Configuration])
    ], MiscService);
    return MiscService;
}());
export { MiscService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlzYy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2xvdWRpYXRvci1yZXN0LWFwaS8iLCJzb3VyY2VzIjpbImFwaS9taXNjLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7R0FVRztBQUNILHVEQUF1RDs7QUFFdkQsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQTJCLGVBQWUsQ0FBQztBQUNsRixPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFDRSxNQUFnQyxzQkFBc0IsQ0FBQztBQU96RixPQUFPLEVBQUUsU0FBUyxFQUFzQixNQUEwQixjQUFjLENBQUM7QUFDakYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUEwQyxrQkFBa0IsQ0FBQztBQUlyRjtJQU1JLHFCQUFzQixVQUFzQixFQUFnQyxRQUFnQixFQUFjLGFBQTRCO1FBQWhILGVBQVUsR0FBVixVQUFVLENBQVk7UUFKbEMsYUFBUSxHQUFHLHVCQUF1QixDQUFDO1FBQ3RDLG1CQUFjLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUNuQyxrQkFBYSxHQUFHLElBQUksYUFBYSxFQUFFLENBQUM7UUFHdkMsSUFBSSxRQUFRLEVBQUU7WUFDVixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztTQUM1QjtRQUNELElBQUksYUFBYSxFQUFFO1lBQ2YsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7WUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLElBQUksYUFBYSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDO1NBQ3ZFO0lBQ0wsQ0FBQztJQUVEOzs7T0FHRztJQUNLLG9DQUFjLEdBQXRCLFVBQXVCLFFBQWtCOztRQUNyQyxJQUFNLElBQUksR0FBRyxxQkFBcUIsQ0FBQzs7WUFDbkMsS0FBc0IsSUFBQSxhQUFBLGlCQUFBLFFBQVEsQ0FBQSxrQ0FBQSx3REFBRTtnQkFBM0IsSUFBTSxPQUFPLHFCQUFBO2dCQUNkLElBQUksSUFBSSxLQUFLLE9BQU8sRUFBRTtvQkFDbEIsT0FBTyxJQUFJLENBQUM7aUJBQ2Y7YUFDSjs7Ozs7Ozs7O1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQWFNLGtDQUFZLEdBQW5CLFVBQW9CLGNBQW1DLEVBQUUsT0FBcUIsRUFBRSxjQUErQjtRQUF0RCx3QkFBQSxFQUFBLGdCQUFxQjtRQUFFLCtCQUFBLEVBQUEsc0JBQStCO1FBRTNHLElBQUksY0FBYyxLQUFLLElBQUksSUFBSSxjQUFjLEtBQUssU0FBUyxFQUFFO1lBQ3pELE1BQU0sSUFBSSxLQUFLLENBQUMsb0ZBQW9GLENBQUMsQ0FBQztTQUN6RztRQUVELElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7UUFFbEMsdUNBQXVDO1FBQ3ZDLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDekMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7U0FDL0U7UUFFRCxpQ0FBaUM7UUFDakMsSUFBSSxpQkFBaUIsR0FBYTtZQUM5QixrQkFBa0I7U0FDckIsQ0FBQztRQUNGLElBQU0sd0JBQXdCLEdBQXVCLElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUM5RyxJQUFJLHdCQUF3QixJQUFJLFNBQVMsRUFBRTtZQUN2QyxPQUFPLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsd0JBQXdCLENBQUMsQ0FBQztTQUM3RDtRQUVELHVDQUF1QztRQUN2QyxJQUFNLFFBQVEsR0FBYTtZQUN2QixrQkFBa0I7U0FDckIsQ0FBQztRQUNGLElBQU0sdUJBQXVCLEdBQXVCLElBQUksQ0FBQyxhQUFhLENBQUMsdUJBQXVCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDekcsSUFBSSx1QkFBdUIsSUFBSSxTQUFTLEVBQUU7WUFDdEMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLHVCQUF1QixDQUFDLENBQUM7U0FDbEU7UUFFRCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFTLElBQUksQ0FBQyxRQUFRLGVBQVksRUFDekQsY0FBYyxFQUNkO1lBQ0ksZUFBZSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZTtZQUNuRCxPQUFPLEVBQUUsT0FBTztZQUNoQixPQUFPLEVBQUUsT0FBTztZQUNoQixjQUFjLEVBQUUsY0FBYztTQUNqQyxDQUNKLENBQUM7SUFDTixDQUFDO0lBakZRLFdBQVc7UUFEdkIsVUFBVSxFQUFFO1FBT3NDLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUMsbUJBQUEsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFBLEVBQW9CLG1CQUFBLFFBQVEsRUFBRSxDQUFBO2lEQUF2RSxVQUFVLFVBQTZFLGFBQWE7T0FON0gsV0FBVyxDQW1GdkI7SUFBRCxrQkFBQztDQUFBLEFBbkZELElBbUZDO1NBbkZZLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ2xvdWRpYXRvciBSRVNUIEFwaVxyXG4gKiBObyBkZXNjcmlwdGlvbiBwcm92aWRlZCAoZ2VuZXJhdGVkIGJ5IFN3YWdnZXIgQ29kZWdlbiBodHRwczovL2dpdGh1Yi5jb20vc3dhZ2dlci1hcGkvc3dhZ2dlci1jb2RlZ2VuKVxyXG4gKlxyXG4gKiBPcGVuQVBJIHNwZWMgdmVyc2lvbjogMC4yLjBcclxuICogQ29udGFjdDogZGFuaWVsLmJhdXJAdW5pLXVsbS5kZVxyXG4gKlxyXG4gKiBOT1RFOiBUaGlzIGNsYXNzIGlzIGF1dG8gZ2VuZXJhdGVkIGJ5IHRoZSBzd2FnZ2VyIGNvZGUgZ2VuZXJhdG9yIHByb2dyYW0uXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9zd2FnZ2VyLWFwaS9zd2FnZ2VyLWNvZGVnZW4uZ2l0XHJcbiAqIERvIG5vdCBlZGl0IHRoZSBjbGFzcyBtYW51YWxseS5cclxuICovXHJcbi8qIHRzbGludDpkaXNhYmxlOm5vLXVudXNlZC12YXJpYWJsZSBtZW1iZXItb3JkZXJpbmcgKi9cclxuXHJcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT3B0aW9uYWwgfSAgICAgICAgICAgICAgICAgICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBQYXJhbXMsXHJcbiAgICAgICAgIEh0dHBSZXNwb25zZSwgSHR0cEV2ZW50IH0gICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IEN1c3RvbUh0dHBVcmxFbmNvZGluZ0NvZGVjIH0gICAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuLi9lbmNvZGVyJztcclxuXHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IEluc3RhbGxhdGlvblJlcXVlc3QgfSBmcm9tICcuLi9tb2RlbC9pbnN0YWxsYXRpb25SZXF1ZXN0JztcclxuXHJcbmltcG9ydCB7IEJBU0VfUEFUSCwgQ09MTEVDVElPTl9GT1JNQVRTIH0gICAgICAgICAgICAgICAgICAgICBmcm9tICcuLi92YXJpYWJsZXMnO1xyXG5pbXBvcnQgeyBDb25maWd1cmF0aW9uIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi4vY29uZmlndXJhdGlvbic7XHJcblxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTWlzY1NlcnZpY2Uge1xyXG5cclxuICAgIHByb3RlY3RlZCBiYXNlUGF0aCA9ICdodHRwOi8vbG9jYWxob3N0OjkwMDAnO1xyXG4gICAgcHVibGljIGRlZmF1bHRIZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKCk7XHJcbiAgICBwdWJsaWMgY29uZmlndXJhdGlvbiA9IG5ldyBDb25maWd1cmF0aW9uKCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIGh0dHBDbGllbnQ6IEh0dHBDbGllbnQsIEBPcHRpb25hbCgpQEluamVjdChCQVNFX1BBVEgpIGJhc2VQYXRoOiBzdHJpbmcsIEBPcHRpb25hbCgpIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgICBpZiAoYmFzZVBhdGgpIHtcclxuICAgICAgICAgICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29uZmlndXJhdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBjb25maWd1cmF0aW9uO1xyXG4gICAgICAgICAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGggfHwgY29uZmlndXJhdGlvbi5iYXNlUGF0aCB8fCB0aGlzLmJhc2VQYXRoO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSBjb25zdW1lcyBzdHJpbmdbXSBtaW1lLXR5cGVzXHJcbiAgICAgKiBAcmV0dXJuIHRydWU6IGNvbnN1bWVzIGNvbnRhaW5zICdtdWx0aXBhcnQvZm9ybS1kYXRhJywgZmFsc2U6IG90aGVyd2lzZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGNhbkNvbnN1bWVGb3JtKGNvbnN1bWVzOiBzdHJpbmdbXSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGNvbnN0IGZvcm0gPSAnbXVsdGlwYXJ0L2Zvcm0tZGF0YSc7XHJcbiAgICAgICAgZm9yIChjb25zdCBjb25zdW1lIG9mIGNvbnN1bWVzKSB7XHJcbiAgICAgICAgICAgIGlmIChmb3JtID09PSBjb25zdW1lKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKiBJbnN0YWxscyBDbG91ZGlhdG9yIHRvb2xzIG9uIHByb3ZpZGVkIG5vZGVcclxuICAgICAqIEBwYXJhbSBpbnN0YWxsUmVxdWVzdCBhIHJlcXVlc3QgdG8gaW5zdGFsbCB0aGUgY2xvdWRpYXRvciB0b29scyBvbiBhIHByb3ZpZGVkIG5vZGVcclxuICAgICAqIEBwYXJhbSBvYnNlcnZlIHNldCB3aGV0aGVyIG9yIG5vdCB0byByZXR1cm4gdGhlIGRhdGEgT2JzZXJ2YWJsZSBhcyB0aGUgYm9keSwgcmVzcG9uc2Ugb3IgZXZlbnRzLiBkZWZhdWx0cyB0byByZXR1cm5pbmcgdGhlIGJvZHkuXHJcbiAgICAgKiBAcGFyYW0gcmVwb3J0UHJvZ3Jlc3MgZmxhZyB0byByZXBvcnQgcmVxdWVzdCBhbmQgcmVzcG9uc2UgcHJvZ3Jlc3MuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpbnN0YWxsVG9vbHMoaW5zdGFsbFJlcXVlc3Q6IEluc3RhbGxhdGlvblJlcXVlc3QsIG9ic2VydmU/OiAnYm9keScsIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbik6IE9ic2VydmFibGU8YW55PjtcclxuICAgIHB1YmxpYyBpbnN0YWxsVG9vbHMoaW5zdGFsbFJlcXVlc3Q6IEluc3RhbGxhdGlvblJlcXVlc3QsIG9ic2VydmU/OiAncmVzcG9uc2UnLCByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW4pOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxhbnk+PjtcclxuICAgIHB1YmxpYyBpbnN0YWxsVG9vbHMoaW5zdGFsbFJlcXVlc3Q6IEluc3RhbGxhdGlvblJlcXVlc3QsIG9ic2VydmU/OiAnZXZlbnRzJywgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj47XHJcbiAgICBwdWJsaWMgaW5zdGFsbFRvb2xzKGluc3RhbGxSZXF1ZXN0OiBJbnN0YWxsYXRpb25SZXF1ZXN0LCBvYnNlcnZlOiBhbnkgPSAnYm9keScsIHJlcG9ydFByb2dyZXNzOiBib29sZWFuID0gZmFsc2UgKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHJcbiAgICAgICAgaWYgKGluc3RhbGxSZXF1ZXN0ID09PSBudWxsIHx8IGluc3RhbGxSZXF1ZXN0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZXF1aXJlZCBwYXJhbWV0ZXIgaW5zdGFsbFJlcXVlc3Qgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBpbnN0YWxsVG9vbHMuJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgaGVhZGVycyA9IHRoaXMuZGVmYXVsdEhlYWRlcnM7XHJcblxyXG4gICAgICAgIC8vIGF1dGhlbnRpY2F0aW9uIChBcGlLZXlBdXRoKSByZXF1aXJlZFxyXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZ3VyYXRpb24uYXBpS2V5c1tcIlgtQVBJLUtleVwiXSkge1xyXG4gICAgICAgICAgICBoZWFkZXJzID0gaGVhZGVycy5zZXQoJ1gtQVBJLUtleScsIHRoaXMuY29uZmlndXJhdGlvbi5hcGlLZXlzW1wiWC1BUEktS2V5XCJdKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHRvIGRldGVybWluZSB0aGUgQWNjZXB0IGhlYWRlclxyXG4gICAgICAgIGxldCBodHRwSGVhZGVyQWNjZXB0czogc3RyaW5nW10gPSBbXHJcbiAgICAgICAgICAgICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgIF07XHJcbiAgICAgICAgY29uc3QgaHR0cEhlYWRlckFjY2VwdFNlbGVjdGVkOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB0aGlzLmNvbmZpZ3VyYXRpb24uc2VsZWN0SGVhZGVyQWNjZXB0KGh0dHBIZWFkZXJBY2NlcHRzKTtcclxuICAgICAgICBpZiAoaHR0cEhlYWRlckFjY2VwdFNlbGVjdGVkICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBoZWFkZXJzID0gaGVhZGVycy5zZXQoJ0FjY2VwdCcsIGh0dHBIZWFkZXJBY2NlcHRTZWxlY3RlZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB0byBkZXRlcm1pbmUgdGhlIENvbnRlbnQtVHlwZSBoZWFkZXJcclxuICAgICAgICBjb25zdCBjb25zdW1lczogc3RyaW5nW10gPSBbXHJcbiAgICAgICAgICAgICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgIF07XHJcbiAgICAgICAgY29uc3QgaHR0cENvbnRlbnRUeXBlU2VsZWN0ZWQ6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHRoaXMuY29uZmlndXJhdGlvbi5zZWxlY3RIZWFkZXJDb250ZW50VHlwZShjb25zdW1lcyk7XHJcbiAgICAgICAgaWYgKGh0dHBDb250ZW50VHlwZVNlbGVjdGVkICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBoZWFkZXJzID0gaGVhZGVycy5zZXQoJ0NvbnRlbnQtVHlwZScsIGh0dHBDb250ZW50VHlwZVNlbGVjdGVkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQucG9zdDxhbnk+KGAke3RoaXMuYmFzZVBhdGh9L2luc3RhbGxlcmAsXHJcbiAgICAgICAgICAgIGluc3RhbGxSZXF1ZXN0LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRoaXMuY29uZmlndXJhdGlvbi53aXRoQ3JlZGVudGlhbHMsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxyXG4gICAgICAgICAgICAgICAgb2JzZXJ2ZTogb2JzZXJ2ZSxcclxuICAgICAgICAgICAgICAgIHJlcG9ydFByb2dyZXNzOiByZXBvcnRQcm9ncmVzc1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19