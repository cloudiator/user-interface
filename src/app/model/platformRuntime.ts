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
import { NewPlatformRuntime } from './newPlatformRuntime';


/**
 *  Repesents a PaaS environemnt to run an component 
 */
export interface PlatformRuntime { 
    /**
     * human readable name
     */
    name: string;
    /**
     * the specific runtime language
     */
    language: PlatformRuntime.LanguageEnum;
    /**
     * language version number
     */
    languageVersion?: number;
    /**
     * specifies the runtime type
     */
    runtimeType: PlatformRuntime.RuntimeTypeEnum;
    /**
     * the version of the specified type
     */
    version: number;
    /**
     * Unique identifier for the hardwareRuntime
     */
    id?: string;
}
export namespace PlatformRuntime {
    export type LanguageEnum = 'PHP' | 'JAVA' | 'RUBY' | 'PYTHON';
    export const LanguageEnum = {
        PHP: 'PHP' as LanguageEnum,
        JAVA: 'JAVA' as LanguageEnum,
        RUBY: 'RUBY' as LanguageEnum,
        PYTHON: 'PYTHON' as LanguageEnum
    };
    export type RuntimeTypeEnum = 'standalone' | 'server';
    export const RuntimeTypeEnum = {
        Standalone: 'standalone' as RuntimeTypeEnum,
        Server: 'server' as RuntimeTypeEnum
    };
}
