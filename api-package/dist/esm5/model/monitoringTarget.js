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
export var MonitoringTarget;
(function (MonitoringTarget) {
    MonitoringTarget.TypeEnum = {
        JOB: 'JOB',
        TASK: 'TASK',
        PROCESS: 'PROCESS',
        CLOUD: 'CLOUD',
        NODE: 'NODE'
    };
})(MonitoringTarget || (MonitoringTarget = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uaXRvcmluZ1RhcmdldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Nsb3VkaWF0b3ItcmVzdC1hcGkvIiwic291cmNlcyI6WyJtb2RlbC9tb25pdG9yaW5nVGFyZ2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0dBVUc7QUFhSCxNQUFNLEtBQVcsZ0JBQWdCLENBU2hDO0FBVEQsV0FBaUIsZ0JBQWdCO0lBRWhCLHlCQUFRLEdBQUc7UUFDcEIsR0FBRyxFQUFFLEtBQWlCO1FBQ3RCLElBQUksRUFBRSxNQUFrQjtRQUN4QixPQUFPLEVBQUUsU0FBcUI7UUFDOUIsS0FBSyxFQUFFLE9BQW1CO1FBQzFCLElBQUksRUFBRSxNQUFrQjtLQUMzQixDQUFDO0FBQ04sQ0FBQyxFQVRnQixnQkFBZ0IsS0FBaEIsZ0JBQWdCLFFBU2hDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENsb3VkaWF0b3IgUkVTVCBBcGlcclxuICogTm8gZGVzY3JpcHRpb24gcHJvdmlkZWQgKGdlbmVyYXRlZCBieSBTd2FnZ2VyIENvZGVnZW4gaHR0cHM6Ly9naXRodWIuY29tL3N3YWdnZXItYXBpL3N3YWdnZXItY29kZWdlbilcclxuICpcclxuICogT3BlbkFQSSBzcGVjIHZlcnNpb246IDAuMi4wXHJcbiAqIENvbnRhY3Q6IGRhbmllbC5iYXVyQHVuaS11bG0uZGVcclxuICpcclxuICogTk9URTogVGhpcyBjbGFzcyBpcyBhdXRvIGdlbmVyYXRlZCBieSB0aGUgc3dhZ2dlciBjb2RlIGdlbmVyYXRvciBwcm9ncmFtLlxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vc3dhZ2dlci1hcGkvc3dhZ2dlci1jb2RlZ2VuLmdpdFxyXG4gKiBEbyBub3QgZWRpdCB0aGUgY2xhc3MgbWFudWFsbHkuXHJcbiAqL1xyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTW9uaXRvcmluZ1RhcmdldCB7IFxyXG4gICAgLyoqXHJcbiAgICAgKiB0YXJnZXQgdG8gYmUgbW9uaXRvcmVkXHJcbiAgICAgKi9cclxuICAgIHR5cGU6IE1vbml0b3JpbmdUYXJnZXQuVHlwZUVudW07XHJcbiAgICAvKipcclxuICAgICAqIGlkZW50aWZpZXIgb2YgYSBzcGVjaWZpYyBpbnN0YW5jZSBvZiB0aGUgYWJvdmUgdHlwZVxyXG4gICAgICovXHJcbiAgICBpZGVudGlmaWVyPzogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBuYW1lc3BhY2UgTW9uaXRvcmluZ1RhcmdldCB7XHJcbiAgICBleHBvcnQgdHlwZSBUeXBlRW51bSA9ICdKT0InIHwgJ1RBU0snIHwgJ1BST0NFU1MnIHwgJ0NMT1VEJyB8ICdOT0RFJztcclxuICAgIGV4cG9ydCBjb25zdCBUeXBlRW51bSA9IHtcclxuICAgICAgICBKT0I6ICdKT0InIGFzIFR5cGVFbnVtLFxyXG4gICAgICAgIFRBU0s6ICdUQVNLJyBhcyBUeXBlRW51bSxcclxuICAgICAgICBQUk9DRVNTOiAnUFJPQ0VTUycgYXMgVHlwZUVudW0sXHJcbiAgICAgICAgQ0xPVUQ6ICdDTE9VRCcgYXMgVHlwZUVudW0sXHJcbiAgICAgICAgTk9ERTogJ05PREUnIGFzIFR5cGVFbnVtXHJcbiAgICB9O1xyXG59XHJcbiJdfQ==