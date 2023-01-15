/* tslint:disable */
/* eslint-disable */
/**
 * Gym service
 * Gym service api document
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { GetFranchiseRelatedGymsInner } from './get-franchise-related-gyms-inner';

/**
 * 
 * @export
 * @interface GetFranchise
 */
export interface GetFranchise {
    /**
     * gyms of the franchise
     * @type {Array<GetFranchiseRelatedGymsInner>}
     * @memberof GetFranchise
     */
    'relatedGyms'?: Array<GetFranchiseRelatedGymsInner>;
    /**
     * name of the franchise
     * @type {string}
     * @memberof GetFranchise
     */
    'name'?: string;
    /**
     * description of the franchise
     * @type {string}
     * @memberof GetFranchise
     */
    'description'?: string;
    /**
     * id of the franchise
     * @type {number}
     * @memberof GetFranchise
     */
    'id'?: number;
}

