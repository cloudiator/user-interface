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
import { GeoLocation } from './geoLocation';


/**
 *  Repesents a (virtual) location offers by a cloud 
 */
export interface Location { 
    /**
     * Unique identifier
     */
    id: string;
    /**
     * Human-readable name
     */
    name: string;
    /**
     * Original id issued by the provider
     */
    providerId: string;
    /**
     * Scope of the location
     */
    locationScope: Location.LocationScopeEnum;
    /**
     * True of the location can be used to start virtual machines, false if not
     */
    isAssignable: boolean;
    geoLocation?: GeoLocation;
    parent?: Location;
}
export namespace Location {
    export type LocationScopeEnum = 'PROVIDER' | 'REGION' | 'ZONE' | 'HOST';
    export const LocationScopeEnum = {
        PROVIDER: 'PROVIDER' as LocationScopeEnum,
        REGION: 'REGION' as LocationScopeEnum,
        ZONE: 'ZONE' as LocationScopeEnum,
        HOST: 'HOST' as LocationScopeEnum
    };
}
