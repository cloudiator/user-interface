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
 * A process represents a task running on a node
 */
export interface CloudiatorProcessNew {
    processType?: string;
    /**
     * The id of the schedule this process belongs to.
     */
    schedule: string;
    /**
     * The id of the task that is instantiated by this process.
     */
    task: string;
    /**
     * The task interface used for running the process.
     */
    taskInterface: string;
}
