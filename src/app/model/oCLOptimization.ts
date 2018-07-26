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
import { Optimization } from './optimization';


/**
 * An OCL attribute expression that should be optimized
 */
export interface OCLOptimization extends Optimization { 
    /**
     *  The expression that is to be opimized. 
     */
    expression?: string;
}
export namespace OCLOptimization {
}
