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
 * Represents the credentials used to authenticate with a cloud
 */
export interface CloudCredential {
    /**
     * Username for authentication at the cloud provider's API
     */
    user: string;
    /**
     * Secret (e.g. Password) for authentication at the cloud provider's API
     */
    secret: string;
}
