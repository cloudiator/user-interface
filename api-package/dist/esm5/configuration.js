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
export { Configuration };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Nsb3VkaWF0b3ItcmVzdC1hcGkvIiwic291cmNlcyI6WyJjb25maWd1cmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNBO0lBUUksdUJBQVksdUJBQXFEO1FBQXJELHdDQUFBLEVBQUEsNEJBQXFEO1FBQzdELElBQUksQ0FBQyxPQUFPLEdBQUcsdUJBQXVCLENBQUMsT0FBTyxDQUFDO1FBQy9DLElBQUksQ0FBQyxRQUFRLEdBQUcsdUJBQXVCLENBQUMsUUFBUSxDQUFDO1FBQ2pELElBQUksQ0FBQyxRQUFRLEdBQUcsdUJBQXVCLENBQUMsUUFBUSxDQUFDO1FBQ2pELElBQUksQ0FBQyxXQUFXLEdBQUcsdUJBQXVCLENBQUMsV0FBVyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxRQUFRLEdBQUcsdUJBQXVCLENBQUMsUUFBUSxDQUFDO1FBQ2pELElBQUksQ0FBQyxlQUFlLEdBQUcsdUJBQXVCLENBQUMsZUFBZSxDQUFDO0lBQ25FLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSSwrQ0FBdUIsR0FBOUIsVUFBZ0MsWUFBc0I7UUFBdEQsaUJBVUM7UUFURyxJQUFJLFlBQVksQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQzFCLE9BQU8sU0FBUyxDQUFDO1NBQ3BCO1FBRUQsSUFBSSxJQUFJLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQWxCLENBQWtCLENBQUMsQ0FBQztRQUN0RCxJQUFJLElBQUksS0FBSyxTQUFTLEVBQUU7WUFDcEIsT0FBTyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDMUI7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0ksMENBQWtCLEdBQXpCLFVBQTBCLE9BQWlCO1FBQTNDLGlCQVVDO1FBVEcsSUFBSSxPQUFPLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUNyQixPQUFPLFNBQVMsQ0FBQztTQUNwQjtRQUVELElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFsQixDQUFrQixDQUFDLENBQUM7UUFDakQsSUFBSSxJQUFJLEtBQUssU0FBUyxFQUFFO1lBQ3BCLE9BQU8sT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3JCO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVEOzs7Ozs7Ozs7T0FTRztJQUNJLGtDQUFVLEdBQWpCLFVBQWtCLElBQVk7UUFDMUIsSUFBTSxRQUFRLEdBQVcsSUFBSSxNQUFNLENBQUMsK0RBQStELEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDMUcsT0FBTyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssNkJBQTZCLENBQUMsQ0FBQztJQUN6RyxDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQUFDLEFBckVELElBcUVDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGludGVyZmFjZSBDb25maWd1cmF0aW9uUGFyYW1ldGVycyB7XHJcbiAgICBhcGlLZXlzPzoge1sga2V5OiBzdHJpbmcgXTogc3RyaW5nfTtcclxuICAgIHVzZXJuYW1lPzogc3RyaW5nO1xyXG4gICAgcGFzc3dvcmQ/OiBzdHJpbmc7XHJcbiAgICBhY2Nlc3NUb2tlbj86IHN0cmluZyB8ICgoKSA9PiBzdHJpbmcpO1xyXG4gICAgYmFzZVBhdGg/OiBzdHJpbmc7XHJcbiAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ29uZmlndXJhdGlvbiB7XHJcbiAgICBhcGlLZXlzPzoge1sga2V5OiBzdHJpbmcgXTogc3RyaW5nfTtcclxuICAgIHVzZXJuYW1lPzogc3RyaW5nO1xyXG4gICAgcGFzc3dvcmQ/OiBzdHJpbmc7XHJcbiAgICBhY2Nlc3NUb2tlbj86IHN0cmluZyB8ICgoKSA9PiBzdHJpbmcpO1xyXG4gICAgYmFzZVBhdGg/OiBzdHJpbmc7XHJcbiAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZ3VyYXRpb25QYXJhbWV0ZXJzOiBDb25maWd1cmF0aW9uUGFyYW1ldGVycyA9IHt9KSB7XHJcbiAgICAgICAgdGhpcy5hcGlLZXlzID0gY29uZmlndXJhdGlvblBhcmFtZXRlcnMuYXBpS2V5cztcclxuICAgICAgICB0aGlzLnVzZXJuYW1lID0gY29uZmlndXJhdGlvblBhcmFtZXRlcnMudXNlcm5hbWU7XHJcbiAgICAgICAgdGhpcy5wYXNzd29yZCA9IGNvbmZpZ3VyYXRpb25QYXJhbWV0ZXJzLnBhc3N3b3JkO1xyXG4gICAgICAgIHRoaXMuYWNjZXNzVG9rZW4gPSBjb25maWd1cmF0aW9uUGFyYW1ldGVycy5hY2Nlc3NUb2tlbjtcclxuICAgICAgICB0aGlzLmJhc2VQYXRoID0gY29uZmlndXJhdGlvblBhcmFtZXRlcnMuYmFzZVBhdGg7XHJcbiAgICAgICAgdGhpcy53aXRoQ3JlZGVudGlhbHMgPSBjb25maWd1cmF0aW9uUGFyYW1ldGVycy53aXRoQ3JlZGVudGlhbHM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZWxlY3QgdGhlIGNvcnJlY3QgY29udGVudC10eXBlIHRvIHVzZSBmb3IgYSByZXF1ZXN0LlxyXG4gICAgICogVXNlcyB7QGxpbmsgQ29uZmlndXJhdGlvbiNpc0pzb25NaW1lfSB0byBkZXRlcm1pbmUgdGhlIGNvcnJlY3QgY29udGVudC10eXBlLlxyXG4gICAgICogSWYgbm8gY29udGVudCB0eXBlIGlzIGZvdW5kIHJldHVybiB0aGUgZmlyc3QgZm91bmQgdHlwZSBpZiB0aGUgY29udGVudFR5cGVzIGlzIG5vdCBlbXB0eVxyXG4gICAgICogQHBhcmFtIGNvbnRlbnRUeXBlcyAtIHRoZSBhcnJheSBvZiBjb250ZW50IHR5cGVzIHRoYXQgYXJlIGF2YWlsYWJsZSBmb3Igc2VsZWN0aW9uXHJcbiAgICAgKiBAcmV0dXJucyB0aGUgc2VsZWN0ZWQgY29udGVudC10eXBlIG9yIDxjb2RlPnVuZGVmaW5lZDwvY29kZT4gaWYgbm8gc2VsZWN0aW9uIGNvdWxkIGJlIG1hZGUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZWxlY3RIZWFkZXJDb250ZW50VHlwZSAoY29udGVudFR5cGVzOiBzdHJpbmdbXSk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XHJcbiAgICAgICAgaWYgKGNvbnRlbnRUeXBlcy5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHR5cGUgPSBjb250ZW50VHlwZXMuZmluZCh4ID0+IHRoaXMuaXNKc29uTWltZSh4KSk7XHJcbiAgICAgICAgaWYgKHR5cGUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gY29udGVudFR5cGVzWzBdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHlwZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNlbGVjdCB0aGUgY29ycmVjdCBhY2NlcHQgY29udGVudC10eXBlIHRvIHVzZSBmb3IgYSByZXF1ZXN0LlxyXG4gICAgICogVXNlcyB7QGxpbmsgQ29uZmlndXJhdGlvbiNpc0pzb25NaW1lfSB0byBkZXRlcm1pbmUgdGhlIGNvcnJlY3QgYWNjZXB0IGNvbnRlbnQtdHlwZS5cclxuICAgICAqIElmIG5vIGNvbnRlbnQgdHlwZSBpcyBmb3VuZCByZXR1cm4gdGhlIGZpcnN0IGZvdW5kIHR5cGUgaWYgdGhlIGNvbnRlbnRUeXBlcyBpcyBub3QgZW1wdHlcclxuICAgICAqIEBwYXJhbSBhY2NlcHRzIC0gdGhlIGFycmF5IG9mIGNvbnRlbnQgdHlwZXMgdGhhdCBhcmUgYXZhaWxhYmxlIGZvciBzZWxlY3Rpb24uXHJcbiAgICAgKiBAcmV0dXJucyB0aGUgc2VsZWN0ZWQgY29udGVudC10eXBlIG9yIDxjb2RlPnVuZGVmaW5lZDwvY29kZT4gaWYgbm8gc2VsZWN0aW9uIGNvdWxkIGJlIG1hZGUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZWxlY3RIZWFkZXJBY2NlcHQoYWNjZXB0czogc3RyaW5nW10pOiBzdHJpbmcgfCB1bmRlZmluZWQge1xyXG4gICAgICAgIGlmIChhY2NlcHRzLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgdHlwZSA9IGFjY2VwdHMuZmluZCh4ID0+IHRoaXMuaXNKc29uTWltZSh4KSk7XHJcbiAgICAgICAgaWYgKHR5cGUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYWNjZXB0c1swXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHR5cGU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVjayBpZiB0aGUgZ2l2ZW4gTUlNRSBpcyBhIEpTT04gTUlNRS5cclxuICAgICAqIEpTT04gTUlNRSBleGFtcGxlczpcclxuICAgICAqICAgYXBwbGljYXRpb24vanNvblxyXG4gICAgICogICBhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURjhcclxuICAgICAqICAgQVBQTElDQVRJT04vSlNPTlxyXG4gICAgICogICBhcHBsaWNhdGlvbi92bmQuY29tcGFueStqc29uXHJcbiAgICAgKiBAcGFyYW0gbWltZSAtIE1JTUUgKE11bHRpcHVycG9zZSBJbnRlcm5ldCBNYWlsIEV4dGVuc2lvbnMpXHJcbiAgICAgKiBAcmV0dXJuIFRydWUgaWYgdGhlIGdpdmVuIE1JTUUgaXMgSlNPTiwgZmFsc2Ugb3RoZXJ3aXNlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaXNKc29uTWltZShtaW1lOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zdCBqc29uTWltZTogUmVnRXhwID0gbmV3IFJlZ0V4cCgnXihhcHBsaWNhdGlvblxcL2pzb258W147LyBcXHRdK1xcL1teOy8gXFx0XStbK11qc29uKVsgXFx0XSooOy4qKT8kJywgJ2knKTtcclxuICAgICAgICByZXR1cm4gbWltZSAhPSBudWxsICYmIChqc29uTWltZS50ZXN0KG1pbWUpIHx8IG1pbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2FwcGxpY2F0aW9uL2pzb24tcGF0Y2granNvbicpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==