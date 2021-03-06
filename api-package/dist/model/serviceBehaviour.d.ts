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
import { Behaviour } from './behaviour';
/**
 * Subtype of Behaviour Represents a service runtime behaviour
 */
export interface ServiceBehaviour extends Behaviour {
    /**
     * True if the service should be restarted failure, false if not
     */
    restart?: boolean;
}
