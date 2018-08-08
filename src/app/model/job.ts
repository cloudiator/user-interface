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
import { Communication } from './communication';
import { JobNew } from './jobNew';
import { Requirement } from './requirement';
import { Task } from './task';


/**
 *  Represents a job in the system. A job is a logical  group of tasks 
 */
export interface Job { 
    name: string;
    /**
     *  An array of tasks that form this application. 
     */
    tasks?: Array<Task>;
    communications?: Array<Communication>;
    requirements?: Array<Requirement>;
    id?: string;
}