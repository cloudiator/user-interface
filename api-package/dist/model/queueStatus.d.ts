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
 * Status of the running task
 */
export declare type QueueStatus = 'SCHEDULED' | 'RUNNING' | 'COMPLETED' | 'FAILED';
export declare const QueueStatus: {
    SCHEDULED: QueueStatus;
    RUNNING: QueueStatus;
    COMPLETED: QueueStatus;
    FAILED: QueueStatus;
};
