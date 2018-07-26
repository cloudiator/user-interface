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
import { TaskInterface } from './taskInterface';


/**
 *  Subtype of TaskInterface  Represents a PaaS interface 
 */
export interface PlatformInterface extends TaskInterface { 
    /**
     *  URL to the source code repository (currently only git is supported) 
     */
    sourceRepository?: string;
}
