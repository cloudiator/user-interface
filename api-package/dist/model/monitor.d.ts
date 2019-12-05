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
import { DataSink } from './dataSink';
import { MonitoringTarget } from './monitoringTarget';
import { Sensor } from './sensor';
export interface Monitor {
    /**
     * Name of the collected metric
     */
    metric: string;
    targets?: Array<MonitoringTarget>;
    sensor?: Sensor;
    sinks?: Array<DataSink>;
    /**
     * MonitoringTags as key-value map
     */
    tags?: any;
}
