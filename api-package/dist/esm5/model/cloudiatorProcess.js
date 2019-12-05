export var CloudiatorProcess;
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
})(CloudiatorProcess || (CloudiatorProcess = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWRpYXRvclByb2Nlc3MuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbG91ZGlhdG9yLXJlc3QtYXBpLyIsInNvdXJjZXMiOlsibW9kZWwvY2xvdWRpYXRvclByb2Nlc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcURBLE1BQU0sS0FBVyxpQkFBaUIsQ0FpQmpDO0FBakJELFdBQWlCLGlCQUFpQjtJQUVqQiwyQkFBUyxHQUFHO1FBQ3JCLE9BQU8sRUFBRSxTQUFzQjtRQUMvQixPQUFPLEVBQUUsU0FBc0I7UUFDL0IsS0FBSyxFQUFFLE9BQW9CO1FBQzNCLE9BQU8sRUFBRSxTQUFzQjtRQUMvQixRQUFRLEVBQUUsVUFBdUI7S0FDcEMsQ0FBQztJQUVXLDBCQUFRLEdBQUc7UUFDcEIsS0FBSyxFQUFFLE9BQW1CO1FBQzFCLEtBQUssRUFBRSxPQUFtQjtRQUMxQixJQUFJLEVBQUUsTUFBa0I7UUFDeEIsVUFBVSxFQUFFLFlBQXdCO1FBQ3BDLE9BQU8sRUFBRSxTQUFxQjtLQUNqQyxDQUFDO0FBQ04sQ0FBQyxFQWpCZ0IsaUJBQWlCLEtBQWpCLGlCQUFpQixRQWlCakMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ2xvdWRpYXRvciBSRVNUIEFwaVxyXG4gKiBObyBkZXNjcmlwdGlvbiBwcm92aWRlZCAoZ2VuZXJhdGVkIGJ5IFN3YWdnZXIgQ29kZWdlbiBodHRwczovL2dpdGh1Yi5jb20vc3dhZ2dlci1hcGkvc3dhZ2dlci1jb2RlZ2VuKVxyXG4gKlxyXG4gKiBPcGVuQVBJIHNwZWMgdmVyc2lvbjogMC4yLjBcclxuICogQ29udGFjdDogZGFuaWVsLmJhdXJAdW5pLXVsbS5kZVxyXG4gKlxyXG4gKiBOT1RFOiBUaGlzIGNsYXNzIGlzIGF1dG8gZ2VuZXJhdGVkIGJ5IHRoZSBzd2FnZ2VyIGNvZGUgZ2VuZXJhdG9yIHByb2dyYW0uXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9zd2FnZ2VyLWFwaS9zd2FnZ2VyLWNvZGVnZW4uZ2l0XHJcbiAqIERvIG5vdCBlZGl0IHRoZSBjbGFzcyBtYW51YWxseS5cclxuICovXHJcbmltcG9ydCB7IElwQWRkcmVzcyB9IGZyb20gJy4vaXBBZGRyZXNzJztcclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENsb3VkaWF0b3JQcm9jZXNzIHsgXHJcbiAgICBpZD86IHN0cmluZztcclxuICAgIG9yaWdpbklkPzogc3RyaW5nO1xyXG4gICAgcHJvY2Vzc1R5cGU/OiBzdHJpbmc7XHJcbiAgICBzdGF0ZT86IENsb3VkaWF0b3JQcm9jZXNzLlN0YXRlRW51bTtcclxuICAgIHR5cGU/OiBDbG91ZGlhdG9yUHJvY2Vzcy5UeXBlRW51bTtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIGlkIG9mIHRoZSBzY2hlZHVsZSB0aGlzIHByb2Nlc3MgYmVsb25ncyB0by5cclxuICAgICAqL1xyXG4gICAgc2NoZWR1bGU/OiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBpZCBvZiB0aGUgdGFzayB0aGF0IGlzIGluc3RhbnRpYXRlZCBieSB0aGlzIHByb2Nlc3MuXHJcbiAgICAgKi9cclxuICAgIHRhc2s/OiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSB0YXNrIGludGVyZmFjZSB1c2VkIGZvciBydW5uaW5nIHRoZSBwcm9jZXNzLlxyXG4gICAgICovXHJcbiAgICB0YXNrSW50ZXJmYWNlPzogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBEaWFnbm9zdGljIGluZm9ybWF0aW9uIGFib3V0IHRoaXMgcHJvY2Vzc1xyXG4gICAgICovXHJcbiAgICBkaWFnbm9zdGljPzogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZWFzb24gdGhpcyBwcm9jZXNzIHdhcyBjcmVhdGVkXHJcbiAgICAgKi9cclxuICAgIHJlYXNvbj86IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogVGhlIHVzZXIgdGhpcyBwcm9jZXNzIHdhcyBjcmVhdGVkIGZvclxyXG4gICAgICovXHJcbiAgICBvd25lcj86IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogVGhlIHB1YmxpYy9wcml2YXRlIGlwIGFkZHJlc3NlcyB1bmRlciB3aGljaCB0aGlzIHByb2Nlc3MgaXMgcmVhY2hhYmxlLiBcclxuICAgICAqL1xyXG4gICAgaXBBZGRyZXNzZXM/OiBBcnJheTxJcEFkZHJlc3M+O1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgZW5kcG9pbnQgd2hlcmUgdGhpcyBwcm9jZXNzIGlzIHJlYWNoYWJsZS4gXHJcbiAgICAgKi9cclxuICAgIGVuZHBvaW50Pzogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBuYW1lc3BhY2UgQ2xvdWRpYXRvclByb2Nlc3Mge1xyXG4gICAgZXhwb3J0IHR5cGUgU3RhdGVFbnVtID0gJ1BFTkRJTkcnIHwgJ1JVTk5JTkcnIHwgJ0VSUk9SJyB8ICdERUxFVEVEJyB8ICdGSU5JU0hFRCc7XHJcbiAgICBleHBvcnQgY29uc3QgU3RhdGVFbnVtID0ge1xyXG4gICAgICAgIFBFTkRJTkc6ICdQRU5ESU5HJyBhcyBTdGF0ZUVudW0sXHJcbiAgICAgICAgUlVOTklORzogJ1JVTk5JTkcnIGFzIFN0YXRlRW51bSxcclxuICAgICAgICBFUlJPUjogJ0VSUk9SJyBhcyBTdGF0ZUVudW0sXHJcbiAgICAgICAgREVMRVRFRDogJ0RFTEVURUQnIGFzIFN0YXRlRW51bSxcclxuICAgICAgICBGSU5JU0hFRDogJ0ZJTklTSEVEJyBhcyBTdGF0ZUVudW1cclxuICAgIH07XHJcbiAgICBleHBvcnQgdHlwZSBUeXBlRW51bSA9ICdMQU5DRScgfCAnU1BBUksnIHwgJ0ZBQVMnIHwgJ1NJTVVMQVRJT04nIHwgJ1VOS05PV04nO1xyXG4gICAgZXhwb3J0IGNvbnN0IFR5cGVFbnVtID0ge1xyXG4gICAgICAgIExBTkNFOiAnTEFOQ0UnIGFzIFR5cGVFbnVtLFxyXG4gICAgICAgIFNQQVJLOiAnU1BBUksnIGFzIFR5cGVFbnVtLFxyXG4gICAgICAgIEZBQVM6ICdGQUFTJyBhcyBUeXBlRW51bSxcclxuICAgICAgICBTSU1VTEFUSU9OOiAnU0lNVUxBVElPTicgYXMgVHlwZUVudW0sXHJcbiAgICAgICAgVU5LTk9XTjogJ1VOS05PV04nIGFzIFR5cGVFbnVtXHJcbiAgICB9O1xyXG59XHJcbiJdfQ==