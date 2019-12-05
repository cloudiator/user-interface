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
 * Represents an API Token, that is used to represent a successful authentication of a user
 */
export interface Token {
    /**
     * The token
     */
    token: string;
    /**
     * owner of the token
     */
    owner?: string;
    /**
     * SystemMillis Token was issued
     */
    issuedTime?: number;
    /**
     * SystemMillis the Token expires
     */
    expireTime?: number;
}