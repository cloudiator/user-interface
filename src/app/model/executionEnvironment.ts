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
 *  ExecutionEnvironment of a Task 
 */
export type ExecutionEnvironment = 'SPARK' | 'NATIVE' | 'CONTAINER' | 'LANCE';

export const ExecutionEnvironment = {
    SPARK: 'SPARK' as ExecutionEnvironment,
    NATIVE: 'NATIVE' as ExecutionEnvironment,
    CONTAINER: 'CONTAINER' as ExecutionEnvironment,
    LANCE: 'LANCE' as ExecutionEnvironment
};
