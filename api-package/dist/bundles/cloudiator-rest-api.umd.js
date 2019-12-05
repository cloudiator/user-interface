(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http')) :
    typeof define === 'function' && define.amd ? define('cloudiator-rest-api', ['exports', '@angular/core', '@angular/common/http'], factory) :
    (global = global || self, factory(global['cloudiator-rest-api'] = {}, global.ng.core, global.ng.common.http));
}(this, function (exports, core, http) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    /**
    * CustomHttpUrlEncodingCodec
    * Fix plus sign (+) not encoding, so sent as blank space
    * See: https://github.com/angular/angular/issues/11058#issuecomment-247367318
    */
    var CustomHttpUrlEncodingCodec = /** @class */ (function (_super) {
        __extends(CustomHttpUrlEncodingCodec, _super);
        function CustomHttpUrlEncodingCodec() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CustomHttpUrlEncodingCodec.prototype.encodeKey = function (k) {
            k = _super.prototype.encodeKey.call(this, k);
            return k.replace(/\+/gi, '%2B');
        };
        CustomHttpUrlEncodingCodec.prototype.encodeValue = function (v) {
            v = _super.prototype.encodeValue.call(this, v);
            return v.replace(/\+/gi, '%2B');
        };
        return CustomHttpUrlEncodingCodec;
    }(http.HttpUrlEncodingCodec));

    var BASE_PATH = new core.InjectionToken('basePath');
    var COLLECTION_FORMATS = {
        'csv': ',',
        'tsv': '   ',
        'ssv': ' ',
        'pipes': '|'
    };

    var Configuration = /** @class */ (function () {
        function Configuration(configurationParameters) {
            if (configurationParameters === void 0) { configurationParameters = {}; }
            this.apiKeys = configurationParameters.apiKeys;
            this.username = configurationParameters.username;
            this.password = configurationParameters.password;
            this.accessToken = configurationParameters.accessToken;
            this.basePath = configurationParameters.basePath;
            this.withCredentials = configurationParameters.withCredentials;
        }
        /**
         * Select the correct content-type to use for a request.
         * Uses {@link Configuration#isJsonMime} to determine the correct content-type.
         * If no content type is found return the first found type if the contentTypes is not empty
         * @param contentTypes - the array of content types that are available for selection
         * @returns the selected content-type or <code>undefined</code> if no selection could be made.
         */
        Configuration.prototype.selectHeaderContentType = function (contentTypes) {
            var _this = this;
            if (contentTypes.length == 0) {
                return undefined;
            }
            var type = contentTypes.find(function (x) { return _this.isJsonMime(x); });
            if (type === undefined) {
                return contentTypes[0];
            }
            return type;
        };
        /**
         * Select the correct accept content-type to use for a request.
         * Uses {@link Configuration#isJsonMime} to determine the correct accept content-type.
         * If no content type is found return the first found type if the contentTypes is not empty
         * @param accepts - the array of content types that are available for selection.
         * @returns the selected content-type or <code>undefined</code> if no selection could be made.
         */
        Configuration.prototype.selectHeaderAccept = function (accepts) {
            var _this = this;
            if (accepts.length == 0) {
                return undefined;
            }
            var type = accepts.find(function (x) { return _this.isJsonMime(x); });
            if (type === undefined) {
                return accepts[0];
            }
            return type;
        };
        /**
         * Check if the given MIME is a JSON MIME.
         * JSON MIME examples:
         *   application/json
         *   application/json; charset=UTF8
         *   APPLICATION/JSON
         *   application/vnd.company+json
         * @param mime - MIME (Multipurpose Internet Mail Extensions)
         * @return True if the given MIME is JSON, false otherwise.
         */
        Configuration.prototype.isJsonMime = function (mime) {
            var jsonMime = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
            return mime != null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json');
        };
        return Configuration;
    }());

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
    var CloudService = /** @class */ (function () {
        function CloudService(httpClient, basePath, configuration) {
            this.httpClient = httpClient;
            this.basePath = 'http://localhost:9000';
            this.defaultHeaders = new http.HttpHeaders();
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
        CloudService.prototype.canConsumeForm = function (consumes) {
            var e_1, _a;
            var form = 'multipart/form-data';
            try {
                for (var consumes_1 = __values(consumes), consumes_1_1 = consumes_1.next(); !consumes_1_1.done; consumes_1_1 = consumes_1.next()) {
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
        CloudService.prototype.addCloud = function (cloud, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (cloud === null || cloud === undefined) {
                throw new Error('Required parameter cloud was null or undefined when calling addCloud.');
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
            return this.httpClient.post(this.basePath + "/clouds", cloud, {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        CloudService.prototype.addVM = function (virtualMachineRequest, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (virtualMachineRequest === null || virtualMachineRequest === undefined) {
                throw new Error('Required parameter virtualMachineRequest was null or undefined when calling addVM.');
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
            return this.httpClient.post(this.basePath + "/vm", virtualMachineRequest, {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        CloudService.prototype.deleteCloud = function (id, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling deleteCloud.');
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
            return this.httpClient.delete(this.basePath + "/clouds/" + encodeURIComponent(String(id)), {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        CloudService.prototype.discoveryStatus = function (observe, reportProgress) {
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
            return this.httpClient.get(this.basePath + "/discovery/status", {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        CloudService.prototype.editHardware = function (id, hardware, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling editHardware.');
            }
            if (hardware === null || hardware === undefined) {
                throw new Error('Required parameter hardware was null or undefined when calling editHardware.');
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
            return this.httpClient.put(this.basePath + "/hardware/" + encodeURIComponent(String(id)), hardware, {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        CloudService.prototype.editImage = function (id, image, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling editImage.');
            }
            if (image === null || image === undefined) {
                throw new Error('Required parameter image was null or undefined when calling editImage.');
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
            return this.httpClient.put(this.basePath + "/images/" + encodeURIComponent(String(id)), image, {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        CloudService.prototype.editLocation = function (id, location, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling editLocation.');
            }
            if (location === null || location === undefined) {
                throw new Error('Required parameter location was null or undefined when calling editLocation.');
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
            return this.httpClient.put(this.basePath + "/locations/" + encodeURIComponent(String(id)), location, {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        CloudService.prototype.findCloud = function (id, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling findCloud.');
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
            return this.httpClient.get(this.basePath + "/clouds/" + encodeURIComponent(String(id)), {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        CloudService.prototype.findClouds = function (observe, reportProgress) {
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
            return this.httpClient.get(this.basePath + "/clouds", {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        CloudService.prototype.findFunctions = function (observe, reportProgress) {
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
            return this.httpClient.get(this.basePath + "/function", {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        CloudService.prototype.findHardware = function (cloudId, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            var queryParameters = new http.HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
            if (cloudId !== undefined && cloudId !== null) {
                queryParameters = queryParameters.set('cloudId', cloudId);
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
            return this.httpClient.get(this.basePath + "/hardware", {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        CloudService.prototype.findImages = function (cloudId, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            var queryParameters = new http.HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
            if (cloudId !== undefined && cloudId !== null) {
                queryParameters = queryParameters.set('cloudId', cloudId);
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
            return this.httpClient.get(this.basePath + "/images", {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        CloudService.prototype.findLocations = function (cloudId, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            var queryParameters = new http.HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
            if (cloudId !== undefined && cloudId !== null) {
                queryParameters = queryParameters.set('cloudId', cloudId);
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
            return this.httpClient.get(this.basePath + "/locations", {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        CloudService.prototype.findVMs = function (cloudId, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            var queryParameters = new http.HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
            if (cloudId !== undefined && cloudId !== null) {
                queryParameters = queryParameters.set('cloudId', cloudId);
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
            return this.httpClient.get(this.basePath + "/vm", {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        CloudService.prototype.getFunction = function (id, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getFunction.');
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
            return this.httpClient.get(this.basePath + "/function/" + encodeURIComponent(String(id)), {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        CloudService.prototype.getHardware = function (id, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getHardware.');
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
            return this.httpClient.get(this.basePath + "/hardware/" + encodeURIComponent(String(id)), {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        CloudService.prototype.getImage = function (id, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getImage.');
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
            return this.httpClient.get(this.basePath + "/images/" + encodeURIComponent(String(id)), {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        CloudService.prototype.getLocation = function (id, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getLocation.');
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
            return this.httpClient.get(this.basePath + "/locations/" + encodeURIComponent(String(id)), {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        CloudService.prototype.getVM = function (id, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getVM.');
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
            return this.httpClient.get(this.basePath + "/vm/" + encodeURIComponent(String(id)), {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        CloudService = __decorate([
            core.Injectable(),
            __param(1, core.Optional()), __param(1, core.Inject(BASE_PATH)), __param(2, core.Optional()),
            __metadata("design:paramtypes", [http.HttpClient, String, Configuration])
        ], CloudService);
        return CloudService;
    }());

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
    var JobService = /** @class */ (function () {
        function JobService(httpClient, basePath, configuration) {
            this.httpClient = httpClient;
            this.basePath = 'http://localhost:9000';
            this.defaultHeaders = new http.HttpHeaders();
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
        JobService.prototype.canConsumeForm = function (consumes) {
            var e_1, _a;
            var form = 'multipart/form-data';
            try {
                for (var consumes_1 = __values(consumes), consumes_1_1 = consumes_1.next(); !consumes_1_1.done; consumes_1_1 = consumes_1.next()) {
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
        JobService.prototype.addJob = function (job, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (job === null || job === undefined) {
                throw new Error('Required parameter job was null or undefined when calling addJob.');
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
            return this.httpClient.post(this.basePath + "/jobs", job, {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        JobService.prototype.findJob = function (id, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling findJob.');
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
            return this.httpClient.get(this.basePath + "/jobs/" + encodeURIComponent(String(id)), {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        JobService.prototype.findJobs = function (observe, reportProgress) {
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
            return this.httpClient.get(this.basePath + "/jobs", {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        JobService.prototype.jobGraph = function (id, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling jobGraph.');
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
            return this.httpClient.get(this.basePath + "/jobs/" + encodeURIComponent(String(id)) + "/graph", {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        JobService = __decorate([
            core.Injectable(),
            __param(1, core.Optional()), __param(1, core.Inject(BASE_PATH)), __param(2, core.Optional()),
            __metadata("design:paramtypes", [http.HttpClient, String, Configuration])
        ], JobService);
        return JobService;
    }());

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
    var MatchmakingService = /** @class */ (function () {
        function MatchmakingService(httpClient, basePath, configuration) {
            this.httpClient = httpClient;
            this.basePath = 'http://localhost:9000';
            this.defaultHeaders = new http.HttpHeaders();
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
        MatchmakingService.prototype.canConsumeForm = function (consumes) {
            var e_1, _a;
            var form = 'multipart/form-data';
            try {
                for (var consumes_1 = __values(consumes), consumes_1_1 = consumes_1.next(); !consumes_1_1.done; consumes_1_1 = consumes_1.next()) {
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
        MatchmakingService.prototype.findNodeCandidates = function (nodeRequirements, observe, reportProgress) {
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
            return this.httpClient.post(this.basePath + "/nodeCandidates", nodeRequirements, {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        MatchmakingService.prototype.getNodeCandidate = function (id, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getNodeCandidate.');
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
            return this.httpClient.get(this.basePath + "/nodeCandidates/" + encodeURIComponent(String(id)), {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        MatchmakingService.prototype.getSolution = function (id, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getSolution.');
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
            return this.httpClient.get(this.basePath + "/solution/" + encodeURIComponent(String(id)), {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        MatchmakingService.prototype.solveMatchmaking = function (nodeRequirements, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (nodeRequirements === null || nodeRequirements === undefined) {
                throw new Error('Required parameter nodeRequirements was null or undefined when calling solveMatchmaking.');
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
            return this.httpClient.put(this.basePath + "/matchmaking", nodeRequirements, {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        MatchmakingService = __decorate([
            core.Injectable(),
            __param(1, core.Optional()), __param(1, core.Inject(BASE_PATH)), __param(2, core.Optional()),
            __metadata("design:paramtypes", [http.HttpClient, String, Configuration])
        ], MatchmakingService);
        return MatchmakingService;
    }());

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
    var MiscService = /** @class */ (function () {
        function MiscService(httpClient, basePath, configuration) {
            this.httpClient = httpClient;
            this.basePath = 'http://localhost:9000';
            this.defaultHeaders = new http.HttpHeaders();
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
                for (var consumes_1 = __values(consumes), consumes_1_1 = consumes_1.next(); !consumes_1_1.done; consumes_1_1 = consumes_1.next()) {
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
        MiscService = __decorate([
            core.Injectable(),
            __param(1, core.Optional()), __param(1, core.Inject(BASE_PATH)), __param(2, core.Optional()),
            __metadata("design:paramtypes", [http.HttpClient, String, Configuration])
        ], MiscService);
        return MiscService;
    }());

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
    var MonitoringService = /** @class */ (function () {
        function MonitoringService(httpClient, basePath, configuration) {
            this.httpClient = httpClient;
            this.basePath = 'http://localhost:9000';
            this.defaultHeaders = new http.HttpHeaders();
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
                for (var consumes_1 = __values(consumes), consumes_1_1 = consumes_1.next(); !consumes_1_1.done; consumes_1_1 = consumes_1.next()) {
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
        MonitoringService = __decorate([
            core.Injectable(),
            __param(1, core.Optional()), __param(1, core.Inject(BASE_PATH)), __param(2, core.Optional()),
            __metadata("design:paramtypes", [http.HttpClient, String, Configuration])
        ], MonitoringService);
        return MonitoringService;
    }());

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
    var NodeService = /** @class */ (function () {
        function NodeService(httpClient, basePath, configuration) {
            this.httpClient = httpClient;
            this.basePath = 'http://localhost:9000';
            this.defaultHeaders = new http.HttpHeaders();
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
        NodeService.prototype.canConsumeForm = function (consumes) {
            var e_1, _a;
            var form = 'multipart/form-data';
            try {
                for (var consumes_1 = __values(consumes), consumes_1_1 = consumes_1.next(); !consumes_1_1.done; consumes_1_1 = consumes_1.next()) {
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
        NodeService.prototype.addByon = function (newNode, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (newNode === null || newNode === undefined) {
                throw new Error('Required parameter newNode was null or undefined when calling addByon.');
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
            return this.httpClient.post(this.basePath + "/byon", newNode, {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        NodeService.prototype.addNode = function (nodeRequest, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (nodeRequest === null || nodeRequest === undefined) {
                throw new Error('Required parameter nodeRequest was null or undefined when calling addNode.');
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
            return this.httpClient.post(this.basePath + "/node", nodeRequest, {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        NodeService.prototype.deleteByon = function (id, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling deleteByon.');
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
            return this.httpClient.delete(this.basePath + "/byon/" + encodeURIComponent(String(id)), {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        NodeService.prototype.deleteNode = function (id, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling deleteNode.');
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
            return this.httpClient.delete(this.basePath + "/node/" + encodeURIComponent(String(id)), {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        NodeService.prototype.findByons = function (observe, reportProgress) {
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
            return this.httpClient.get(this.basePath + "/byon", {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        NodeService.prototype.findNodes = function (observe, reportProgress) {
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
            return this.httpClient.get(this.basePath + "/node", {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        NodeService.prototype.getNode = function (id, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getNode.');
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
            return this.httpClient.get(this.basePath + "/node/" + encodeURIComponent(String(id)), {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        NodeService = __decorate([
            core.Injectable(),
            __param(1, core.Optional()), __param(1, core.Inject(BASE_PATH)), __param(2, core.Optional()),
            __metadata("design:paramtypes", [http.HttpClient, String, Configuration])
        ], NodeService);
        return NodeService;
    }());

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
    var ProcessService = /** @class */ (function () {
        function ProcessService(httpClient, basePath, configuration) {
            this.httpClient = httpClient;
            this.basePath = 'http://localhost:9000';
            this.defaultHeaders = new http.HttpHeaders();
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
        ProcessService.prototype.canConsumeForm = function (consumes) {
            var e_1, _a;
            var form = 'multipart/form-data';
            try {
                for (var consumes_1 = __values(consumes), consumes_1_1 = consumes_1.next(); !consumes_1_1.done; consumes_1_1 = consumes_1.next()) {
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
        ProcessService.prototype.addSchedule = function (schedule, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (schedule === null || schedule === undefined) {
                throw new Error('Required parameter schedule was null or undefined when calling addSchedule.');
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
            return this.httpClient.post(this.basePath + "/schedule", schedule, {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        ProcessService.prototype.createProcess = function (process, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (process === null || process === undefined) {
                throw new Error('Required parameter process was null or undefined when calling createProcess.');
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
            return this.httpClient.post(this.basePath + "/process", process, {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        ProcessService.prototype.deleteProcess = function (id, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling deleteProcess.');
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
            return this.httpClient.delete(this.basePath + "/process/" + encodeURIComponent(String(id)), {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        ProcessService.prototype.deleteSchedule = function (id, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling deleteSchedule.');
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
            return this.httpClient.delete(this.basePath + "/schedule/" + encodeURIComponent(String(id)), {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        ProcessService.prototype.findProcess = function (id, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling findProcess.');
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
            return this.httpClient.get(this.basePath + "/process/" + encodeURIComponent(String(id)), {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        ProcessService.prototype.findSchedule = function (id, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling findSchedule.');
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
            return this.httpClient.get(this.basePath + "/schedule/" + encodeURIComponent(String(id)), {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        ProcessService.prototype.getProcesses = function (scheduleId, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            var queryParameters = new http.HttpParams({ encoder: new CustomHttpUrlEncodingCodec() });
            if (scheduleId !== undefined && scheduleId !== null) {
                queryParameters = queryParameters.set('scheduleId', scheduleId);
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
            return this.httpClient.get(this.basePath + "/process", {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        ProcessService.prototype.getSchedules = function (observe, reportProgress) {
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
            return this.httpClient.get(this.basePath + "/schedule", {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        ProcessService.prototype.scheduleGraph = function (id, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling scheduleGraph.');
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
            return this.httpClient.get(this.basePath + "/schedule/" + encodeURIComponent(String(id)) + "/graph", {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        ProcessService = __decorate([
            core.Injectable(),
            __param(1, core.Optional()), __param(1, core.Inject(BASE_PATH)), __param(2, core.Optional()),
            __metadata("design:paramtypes", [http.HttpClient, String, Configuration])
        ], ProcessService);
        return ProcessService;
    }());

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
    var QueueService = /** @class */ (function () {
        function QueueService(httpClient, basePath, configuration) {
            this.httpClient = httpClient;
            this.basePath = 'http://localhost:9000';
            this.defaultHeaders = new http.HttpHeaders();
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
        QueueService.prototype.canConsumeForm = function (consumes) {
            var e_1, _a;
            var form = 'multipart/form-data';
            try {
                for (var consumes_1 = __values(consumes), consumes_1_1 = consumes_1.next(); !consumes_1_1.done; consumes_1_1 = consumes_1.next()) {
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
        QueueService.prototype.findQueuedTask = function (id, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling findQueuedTask.');
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
            return this.httpClient.get(this.basePath + "/queue/" + encodeURIComponent(String(id)), {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        QueueService.prototype.getQueuedTasks = function (observe, reportProgress) {
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
            return this.httpClient.get(this.basePath + "/queue", {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        QueueService = __decorate([
            core.Injectable(),
            __param(1, core.Optional()), __param(1, core.Inject(BASE_PATH)), __param(2, core.Optional()),
            __metadata("design:paramtypes", [http.HttpClient, String, Configuration])
        ], QueueService);
        return QueueService;
    }());

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
    var ScaleService = /** @class */ (function () {
        function ScaleService(httpClient, basePath, configuration) {
            this.httpClient = httpClient;
            this.basePath = 'http://localhost:9000';
            this.defaultHeaders = new http.HttpHeaders();
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
        ScaleService.prototype.canConsumeForm = function (consumes) {
            var e_1, _a;
            var form = 'multipart/form-data';
            try {
                for (var consumes_1 = __values(consumes), consumes_1_1 = consumes_1.next(); !consumes_1_1.done; consumes_1_1 = consumes_1.next()) {
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
        ScaleService.prototype.triggerScale = function (scale, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (scale === null || scale === undefined) {
                throw new Error('Required parameter scale was null or undefined when calling triggerScale.');
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
            return this.httpClient.post(this.basePath + "/scale", scale, {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        ScaleService = __decorate([
            core.Injectable(),
            __param(1, core.Optional()), __param(1, core.Inject(BASE_PATH)), __param(2, core.Optional()),
            __metadata("design:paramtypes", [http.HttpClient, String, Configuration])
        ], ScaleService);
        return ScaleService;
    }());

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
    var SecurityService = /** @class */ (function () {
        function SecurityService(httpClient, basePath, configuration) {
            this.httpClient = httpClient;
            this.basePath = 'http://localhost:9000';
            this.defaultHeaders = new http.HttpHeaders();
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
        SecurityService.prototype.canConsumeForm = function (consumes) {
            var e_1, _a;
            var form = 'multipart/form-data';
            try {
                for (var consumes_1 = __values(consumes), consumes_1_1 = consumes_1.next(); !consumes_1_1.done; consumes_1_1 = consumes_1.next()) {
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
        SecurityService.prototype.decrypt = function (text, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (text === null || text === undefined) {
                throw new Error('Required parameter text was null or undefined when calling decrypt.');
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
            return this.httpClient.get(this.basePath + "/decryption/" + encodeURIComponent(String(text)), {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        SecurityService.prototype.deleteSecure = function (key, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (key === null || key === undefined) {
                throw new Error('Required parameter key was null or undefined when calling deleteSecure.');
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
            return this.httpClient.delete(this.basePath + "/secureStore/" + encodeURIComponent(String(key)), {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        SecurityService.prototype.encrypt = function (text, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (text === null || text === undefined) {
                throw new Error('Required parameter text was null or undefined when calling encrypt.');
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
            return this.httpClient.get(this.basePath + "/encryption/" + encodeURIComponent(String(text)), {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        SecurityService.prototype.retrieveSecure = function (key, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (key === null || key === undefined) {
                throw new Error('Required parameter key was null or undefined when calling retrieveSecure.');
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
            return this.httpClient.get(this.basePath + "/secureStore/" + encodeURIComponent(String(key)), {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        SecurityService.prototype.storeSecure = function (key, value, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (key === null || key === undefined) {
                throw new Error('Required parameter key was null or undefined when calling storeSecure.');
            }
            if (value === null || value === undefined) {
                throw new Error('Required parameter value was null or undefined when calling storeSecure.');
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
            return this.httpClient.put(this.basePath + "/secureStore/" + encodeURIComponent(String(key)), value, {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        SecurityService = __decorate([
            core.Injectable(),
            __param(1, core.Optional()), __param(1, core.Inject(BASE_PATH)), __param(2, core.Optional()),
            __metadata("design:paramtypes", [http.HttpClient, String, Configuration])
        ], SecurityService);
        return SecurityService;
    }());

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
    var UserService = /** @class */ (function () {
        function UserService(httpClient, basePath, configuration) {
            this.httpClient = httpClient;
            this.basePath = 'http://localhost:9000';
            this.defaultHeaders = new http.HttpHeaders();
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
                for (var consumes_1 = __values(consumes), consumes_1_1 = consumes_1.next(); !consumes_1_1.done; consumes_1_1 = consumes_1.next()) {
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
        UserService = __decorate([
            core.Injectable(),
            __param(1, core.Optional()), __param(1, core.Inject(BASE_PATH)), __param(2, core.Optional()),
            __metadata("design:paramtypes", [http.HttpClient, String, Configuration])
        ], UserService);
        return UserService;
    }());

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
    var YamlService = /** @class */ (function () {
        function YamlService(httpClient, basePath, configuration) {
            this.httpClient = httpClient;
            this.basePath = 'http://localhost:9000';
            this.defaultHeaders = new http.HttpHeaders();
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
                for (var consumes_1 = __values(consumes), consumes_1_1 = consumes_1.next(); !consumes_1_1.done; consumes_1_1 = consumes_1.next()) {
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
        YamlService = __decorate([
            core.Injectable(),
            __param(1, core.Optional()), __param(1, core.Inject(BASE_PATH)), __param(2, core.Optional()),
            __metadata("design:paramtypes", [http.HttpClient, String, Configuration])
        ], YamlService);
        return YamlService;
    }());

    var APIS = [CloudService, JobService, MatchmakingService, MiscService, MonitoringService, NodeService, /*PlatformService*/ , ProcessService, QueueService, ScaleService, SecurityService, UserService, YamlService];

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
    var CloudType = {
        PRIVATE: 'PRIVATE',
        PUBLIC: 'PUBLIC'
    };


    (function (CloudiatorProcess) {
        CloudiatorProcess.StateEnum = {
            PENDING: 'PENDING',
            RUNNING: 'RUNNING',
            ERROR: 'ERROR',
            DELETED: 'DELETED',
            FINISHED: 'FINISHED'
        };
        CloudiatorProcess.TypeEnum = {
            LANCE: 'LANCE',
            SPARK: 'SPARK',
            FAAS: 'FAAS',
            SIMULATION: 'SIMULATION',
            UNKNOWN: 'UNKNOWN'
        };
    })(exports.CloudiatorProcess || (exports.CloudiatorProcess = {}));

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

    (function (DataSink) {
        DataSink.TypeEnum = {
            KAIROSDB: 'KAIROS_DB',
            INFLUX: 'INFLUX',
            CLI: 'CLI',
            JMS: 'JMS'
        };
    })(exports.DataSink || (exports.DataSink = {}));

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
    var DiscoveryItemState = {
        NEW: 'NEW',
        OK: 'OK',
        REMOTELYDELETED: 'REMOTELY_DELETED',
        LOCALLYDELETED: 'LOCALLY_DELETED',
        DISABLED: 'DISABLED',
        DELETED: 'DELETED',
        UNKNOWN: 'UNKNOWN'
    };

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

    (function (Interval) {
        Interval.UnitEnum = {
            DAYS: 'DAYS',
            HOURS: 'HOURS',
            MICROSECONDS: 'MICROSECONDS',
            MILLISECONDS: 'MILLISECONDS',
            MINUTES: 'MINUTES',
            NANOSECONDS: 'NANOSECONDS',
            SECONDS: 'SECONDS'
        };
    })(exports.Interval || (exports.Interval = {}));

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
    var IpAddressType = {
        PUBLICIP: 'PUBLIC_IP',
        PRIVATEIP: 'PRIVATE_IP'
    };

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
    var IpVersion = {
        V4: 'V4',
        V6: 'V6'
    };


    (function (Location) {
        Location.LocationScopeEnum = {
            PROVIDER: 'PROVIDER',
            REGION: 'REGION',
            ZONE: 'ZONE',
            HOST: 'HOST'
        };
    })(exports.Location || (exports.Location = {}));

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

    (function (MonitoringTarget) {
        MonitoringTarget.TypeEnum = {
            JOB: 'JOB',
            TASK: 'TASK',
            PROCESS: 'PROCESS',
            CLOUD: 'CLOUD',
            NODE: 'NODE'
        };
    })(exports.MonitoringTarget || (exports.MonitoringTarget = {}));


    (function (NewPlatform) {
        NewPlatform.TypeEnum = {
            HEROKU: 'HEROKU',
            OPENSHIFT: 'OPENSHIFT',
            CLOUDFOUNDRY: 'CLOUDFOUNDRY'
        };
    })(exports.NewPlatform || (exports.NewPlatform = {}));

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

    (function (NewPlatformRuntime) {
        NewPlatformRuntime.LanguageEnum = {
            PHP: 'PHP',
            JAVA: 'JAVA',
            RUBY: 'RUBY',
            PYTHON: 'PYTHON'
        };
        NewPlatformRuntime.RuntimeTypeEnum = {
            Standalone: 'standalone',
            Server: 'server'
        };
    })(exports.NewPlatformRuntime || (exports.NewPlatformRuntime = {}));


    (function (NodeCandidate) {
        NodeCandidate.NodeCandidateTypeEnum = {
            IAAS: 'IAAS',
            FAAS: 'FAAS',
            PAAS: 'PAAS',
            BYON: 'BYON'
        };
    })(exports.NodeCandidate || (exports.NodeCandidate = {}));

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
    var OperatingSystemArchitecture = {
        AMD64: 'AMD64',
        UNKOWN: 'UNKOWN',
        I386: 'I386',
        ARM: 'ARM'
    };

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
    var OperatingSystemFamily = {
        UBUNTU: 'UBUNTU',
        UNKOWNOSFAMILY: 'UNKOWN_OS_FAMILY',
        AIX: 'AIX',
        ARCH: 'ARCH',
        CENTOS: 'CENTOS',
        DARWIN: 'DARWIN',
        DEBIAN: 'DEBIAN',
        ESX: 'ESX',
        FEDORA: 'FEDORA',
        FREEBSD: 'FREEBSD',
        GENTOO: 'GENTOO',
        HPUX: 'HPUX',
        COREOS: 'COREOS',
        AMZNLINUX: 'AMZN_LINUX',
        MANDRIVA: 'MANDRIVA',
        NETBSD: 'NETBSD',
        OEL: 'OEL',
        OPENBSD: 'OPENBSD',
        RHEL: 'RHEL',
        SCIENTIFIC: 'SCIENTIFIC',
        CEL: 'CEL',
        SLACKWARE: 'SLACKWARE',
        SOLARIS: 'SOLARIS',
        SUSE: 'SUSE',
        TURBOLINUX: 'TURBOLINUX',
        CLOUDLINUX: 'CLOUD_LINUX',
        WINDOWS: 'WINDOWS'
    };

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
    var OperatingSystemType = {
        LINUX: 'LINUX',
        UNKOWN: 'UNKOWN',
        UNIX: 'UNIX',
        WINDOWSOS: 'WINDOWS_OS',
        BSD: 'BSD',
        MAC: 'MAC'
    };

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

    (function (Optimization) {
        Optimization.ObjectiveEnum = {
            MAXIMIZE: 'MAXIMIZE',
            MINIMIZE: 'MINIMIZE'
        };
    })(exports.Optimization || (exports.Optimization = {}));

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
    var ProcessMapping = {
        SINGLE: 'SINGLE',
        CLUSTER: 'CLUSTER'
    };

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
    var QueueStatus = {
        SCHEDULED: 'SCHEDULED',
        RUNNING: 'RUNNING',
        COMPLETED: 'COMPLETED',
        FAILED: 'FAILED'
    };

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
    var RequirementOperator = {
        EQ: 'EQ',
        LEQ: 'LEQ',
        GEQ: 'GEQ',
        GT: 'GT',
        LT: 'LT',
        NEQ: 'NEQ',
        IN: 'IN'
    };

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
    var Runtime = {
        Nodejs: 'nodejs',
        Python: 'python',
        Java: 'java',
        Dotnet: 'dotnet',
        Go: 'go'
    };

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

    (function (Scale) {
        Scale.ScaleDirectionEnum = {
            IN: 'SCALE_IN',
            OUT: 'SCALE_OUT'
        };
    })(exports.Scale || (exports.Scale = {}));

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

    (function (ScheduleNew) {
        ScheduleNew.InstantiationEnum = {
            AUTOMATIC: 'AUTOMATIC',
            MANUAL: 'MANUAL'
        };
    })(exports.ScheduleNew || (exports.ScheduleNew = {}));

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
    var Tool = {
        DOCKER: 'DOCKER',
        KAIROSDB: 'KAIROSDB',
        LANCE: 'LANCE',
        VISOR: 'VISOR',
        AXE: 'AXE',
        SPARKWORKER: 'SPARK_WORKER',
        DLMSAGENT: 'DLMS_AGENT',
        ALLUXIOCLIENT: 'ALLUXIO_CLIENT',
        EMSCLIENT: 'EMS_CLIENT'
    };


    (function (VirtualMachine) {
        VirtualMachine.StateEnum = {
            RUNNING: 'RUNNING',
            ERROR: 'ERROR'
        };
    })(exports.VirtualMachine || (exports.VirtualMachine = {}));


    (function (AttributeOptimization) {
        AttributeOptimization.AggregationEnum = {
            SUM: 'SUM',
            AVG: 'AVG'
        };
    })(exports.AttributeOptimization || (exports.AttributeOptimization = {}));


    (function (Cloud) {
        Cloud.StateEnum = {
            OK: 'OK',
            ERROR: 'ERROR'
        };
    })(exports.Cloud || (exports.Cloud = {}));


    (function (LanceInterface) {
        LanceInterface.ContainerTypeEnum = {
            NATIVE: 'NATIVE',
            DOCKER: 'DOCKER',
            BOTH: 'BOTH'
        };
    })(exports.LanceInterface || (exports.LanceInterface = {}));


    (function (Node) {
        Node.NodeTypeEnum = {
            UNKNOWNTYPE: 'UNKNOWN_TYPE',
            VM: 'VM',
            BYON: 'BYON',
            CONTAINER: 'CONTAINER',
            FAAS: 'FAAS'
        };
        Node.StateEnum = {
            PENDING: 'PENDING',
            RUNNING: 'RUNNING',
            ERROR: 'ERROR',
            DELETED: 'DELETED'
        };
    })(exports.Node || (exports.Node = {}));


    (function (PeriodicBehaviour) {
        PeriodicBehaviour.CollisionHandlingEnum = {
            CANCEL: 'CANCEL',
            PARALLEL: 'PARALLEL',
            SKIP: 'SKIP'
        };
    })(exports.PeriodicBehaviour || (exports.PeriodicBehaviour = {}));


    (function (Platform) {
        Platform.TypeEnum = {
            HEROKU: 'HEROKU',
            OPENSHIFT: 'OPENSHIFT',
            CLOUDFOUNDRY: 'CLOUDFOUNDRY'
        };
    })(exports.Platform || (exports.Platform = {}));


    (function (PlatformRuntime) {
        PlatformRuntime.LanguageEnum = {
            PHP: 'PHP',
            JAVA: 'JAVA',
            RUBY: 'RUBY',
            PYTHON: 'PYTHON'
        };
        PlatformRuntime.RuntimeTypeEnum = {
            Standalone: 'standalone',
            Server: 'server'
        };
    })(exports.PlatformRuntime || (exports.PlatformRuntime = {}));


    (function (Schedule) {
        Schedule.InstantiationEnum = {
            AUTOMATIC: 'AUTOMATIC',
            MANUAL: 'MANUAL'
        };
        Schedule.StateEnum = {
            PENDING: 'PENDING',
            RUNNING: 'RUNNING',
            ERROR: 'ERROR',
            RESTORING: 'RESTORING',
            DELETED: 'DELETED',
            MANUAL: 'MANUAL'
        };
    })(exports.Schedule || (exports.Schedule = {}));

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
    var PlatformService = /** @class */ (function () {
        function PlatformService(httpClient, basePath, configuration) {
            this.httpClient = httpClient;
            this.basePath = 'http://localhost:9000';
            this.defaultHeaders = new http.HttpHeaders();
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
        PlatformService.prototype.canConsumeForm = function (consumes) {
            var e_1, _a;
            var form = 'multipart/form-data';
            try {
                for (var consumes_1 = __values(consumes), consumes_1_1 = consumes_1.next(); !consumes_1_1.done; consumes_1_1 = consumes_1.next()) {
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
        PlatformService.prototype.addPlatform = function (platform, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (platform === null || platform === undefined) {
                throw new Error('Required parameter platform was null or undefined when calling addPlatform.');
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
            return this.httpClient.post(this.basePath + "/platform", platform, {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        PlatformService.prototype.addPlatformEnvironment = function (platformEnvironment, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (platformEnvironment === null || platformEnvironment === undefined) {
                throw new Error('Required parameter platformEnvironment was null or undefined when calling addPlatformEnvironment.');
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
            return this.httpClient.post(this.basePath + "/platformEnvironment", platformEnvironment, {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        PlatformService.prototype.addPlatformHardware = function (platformHardware, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (platformHardware === null || platformHardware === undefined) {
                throw new Error('Required parameter platformHardware was null or undefined when calling addPlatformHardware.');
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
            return this.httpClient.post(this.basePath + "/platformHardware", platformHardware, {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        PlatformService.prototype.addPlatformRuntime = function (platformRuntime, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (platformRuntime === null || platformRuntime === undefined) {
                throw new Error('Required parameter platformRuntime was null or undefined when calling addPlatformRuntime.');
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
            return this.httpClient.post(this.basePath + "/platformRuntime", platformRuntime, {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        PlatformService.prototype.deletePlatform = function (id, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling deletePlatform.');
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
            return this.httpClient.delete(this.basePath + "/platform/" + encodeURIComponent(String(id)), {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        PlatformService.prototype.findPlatform = function (id, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling findPlatform.');
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
            return this.httpClient.get(this.basePath + "/platform/" + encodeURIComponent(String(id)), {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        PlatformService.prototype.findPlatformEnvironment = function (id, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling findPlatformEnvironment.');
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
            return this.httpClient.get(this.basePath + "/platformEnvironment/" + encodeURIComponent(String(id)), {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        PlatformService.prototype.findPlatformEnvironments = function (observe, reportProgress) {
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
            return this.httpClient.get(this.basePath + "/platformEnvironment", {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        PlatformService.prototype.findPlatformHardware = function (id, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling findPlatformHardware.');
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
            return this.httpClient.get(this.basePath + "/platformHardware/" + encodeURIComponent(String(id)), {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        PlatformService.prototype.findPlatformHardwares = function (observe, reportProgress) {
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
            return this.httpClient.get(this.basePath + "/platformHardware", {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        PlatformService.prototype.findPlatformRuntime = function (id, observe, reportProgress) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling findPlatformRuntime.');
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
            return this.httpClient.get(this.basePath + "/platformRuntime/" + encodeURIComponent(String(id)), {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        PlatformService.prototype.findPlatformRuntimes = function (observe, reportProgress) {
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
            return this.httpClient.get(this.basePath + "/platformRuntime", {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        PlatformService.prototype.findPlatforms = function (observe, reportProgress) {
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
            return this.httpClient.get(this.basePath + "/platform", {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        PlatformService = __decorate([
            core.Injectable(),
            __param(1, core.Optional()), __param(1, core.Inject(BASE_PATH)), __param(2, core.Optional()),
            __metadata("design:paramtypes", [http.HttpClient, String, Configuration])
        ], PlatformService);
        return PlatformService;
    }());

    var ApiModule = /** @class */ (function () {
        function ApiModule(parentModule, http) {
            if (parentModule) {
                throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
            }
            if (!http) {
                throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
                    'See also https://github.com/angular/angular/issues/20575');
            }
        }
        ApiModule_1 = ApiModule;
        ApiModule.forRoot = function (configurationFactory) {
            return {
                ngModule: ApiModule_1,
                providers: [{ provide: Configuration, useFactory: configurationFactory }]
            };
        };
        var ApiModule_1;
        ApiModule = ApiModule_1 = __decorate([
            core.NgModule({
                imports: [],
                declarations: [],
                exports: [],
                providers: [
                    CloudService,
                    JobService,
                    MatchmakingService,
                    MiscService,
                    MonitoringService,
                    NodeService,
                    PlatformService,
                    ProcessService,
                    QueueService,
                    ScaleService,
                    SecurityService,
                    UserService,
                    YamlService
                ]
            }),
            __param(0, core.Optional()), __param(0, core.SkipSelf()),
            __param(1, core.Optional()),
            __metadata("design:paramtypes", [ApiModule,
                http.HttpClient])
        ], ApiModule);
        return ApiModule;
    }());

    exports.APIS = APIS;
    exports.ApiModule = ApiModule;
    exports.BASE_PATH = BASE_PATH;
    exports.COLLECTION_FORMATS = COLLECTION_FORMATS;
    exports.CloudService = CloudService;
    exports.CloudType = CloudType;
    exports.Configuration = Configuration;
    exports.DiscoveryItemState = DiscoveryItemState;
    exports.IpAddressType = IpAddressType;
    exports.IpVersion = IpVersion;
    exports.JobService = JobService;
    exports.MatchmakingService = MatchmakingService;
    exports.MiscService = MiscService;
    exports.MonitoringService = MonitoringService;
    exports.NodeService = NodeService;
    exports.OperatingSystemArchitecture = OperatingSystemArchitecture;
    exports.OperatingSystemFamily = OperatingSystemFamily;
    exports.OperatingSystemType = OperatingSystemType;
    exports.ProcessMapping = ProcessMapping;
    exports.ProcessService = ProcessService;
    exports.QueueService = QueueService;
    exports.QueueStatus = QueueStatus;
    exports.RequirementOperator = RequirementOperator;
    exports.Runtime = Runtime;
    exports.ScaleService = ScaleService;
    exports.SecurityService = SecurityService;
    exports.Tool = Tool;
    exports.UserService = UserService;
    exports.YamlService = YamlService;
    exports.ɵa = PlatformService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=cloudiator-rest-api.umd.js.map
