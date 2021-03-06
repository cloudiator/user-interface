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
/**
 * Schedules an already created job within the system.
 */
export interface ScheduleNew {
    /**
     * The identifier of the job
     */
    job?: string;
    /**
     * If the instantiation should be handled AUTOMATIC or MANUAL
     */
    instantiation?: ScheduleNew.InstantiationEnum;
}
export declare namespace ScheduleNew {
    type InstantiationEnum = 'AUTOMATIC' | 'MANUAL';
    const InstantiationEnum: {
        AUTOMATIC: InstantiationEnum;
        MANUAL: InstantiationEnum;
    };
}
