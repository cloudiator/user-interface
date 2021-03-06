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
import { CloudiatorProcess } from './cloudiatorProcess';
import { ScheduleNew } from './scheduleNew';
export interface Schedule {
    /**
     * The identifier of the job
     */
    job?: string;
    /**
     * If the instantiation should be handled AUTOMATIC or MANUAL
     */
    instantiation?: Schedule.InstantiationEnum;
    id?: string;
    owner?: string;
    processes?: Array<CloudiatorProcess>;
    state?: Schedule.StateEnum;
}
export declare namespace Schedule {
    type InstantiationEnum = 'AUTOMATIC' | 'MANUAL';
    const InstantiationEnum: {
        AUTOMATIC: ScheduleNew.InstantiationEnum;
        MANUAL: ScheduleNew.InstantiationEnum;
    };
    type StateEnum = 'PENDING' | 'RUNNING' | 'ERROR' | 'RESTORING' | 'DELETED' | 'MANUAL';
    const StateEnum: {
        PENDING: StateEnum;
        RUNNING: StateEnum;
        ERROR: StateEnum;
        RESTORING: StateEnum;
        DELETED: StateEnum;
        MANUAL: StateEnum;
    };
}
