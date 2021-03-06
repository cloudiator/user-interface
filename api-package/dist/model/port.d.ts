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
 * polymorphic superclass, only subtypes are allowed. Represents a communication port of a task
 */
export interface Port {
    /**
     * Discriminator for polymorphism. Only subtypes are allowed.
     */
    type: string;
    /**
     * Uniquely identifies a port. Defines the name of the environment variables holding IP addresses of remote tasks.
     */
    name: string;
}
