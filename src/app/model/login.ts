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
import { Tenant } from './tenant';


/**
 *  Login information provided by the user to be authorized 
 */
export interface Login { 
    /**
     * EMail address of the user
     */
    email: string;
    tenant: Tenant;
    /**
     * Password of the user
     */
    password: string;
}