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
 * Refers to the attribute that should be optimized
 */
export interface AttributeOptimization extends Optimization {
    objectiveClass?: string;
    objectiveAttribute?: string;
    aggregation?: AttributeOptimization.AggregationEnum;
}
export declare namespace AttributeOptimization {
    type AggregationEnum = 'SUM' | 'AVG';
    const AggregationEnum: {
        SUM: AggregationEnum;
        AVG: AggregationEnum;
    };
}
