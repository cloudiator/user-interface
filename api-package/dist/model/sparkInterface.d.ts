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
import { ProcessMapping } from './processMapping';
import { TaskInterface } from './taskInterface';
/**
 * Subtype of TaskInterface. Describes how to deploy a Task to Spark.
 */
export interface SparkInterface extends TaskInterface {
    /**
     * An URI where the executable of the Spark Application can be retrieved. Either a URL pointing to a web endpoint, or a locally available file.
     */
    file?: string;
    /**
     * Optional className of the class containing the main method. Only required for Java.
     */
    className?: string;
    /**
     * Array of arguments passed to the application.
     */
    arguments?: Array<string>;
    /**
     * Additional Arguments passed to Spark.
     */
    sparkArguments?: any;
    /**
     * Spark configuration properties.
     */
    sparkConfiguration?: any;
    processMapping?: ProcessMapping;
}
