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
 * Repesents the configuration of a cloud.
 */
export interface CloudConfiguration {
    /**
     * A prefix all Cloudiator managed entities will belong to.
     */
    nodeGroup?: string;
    /**
     * Configuration as key-value map.
     */
    properties?: any;
}