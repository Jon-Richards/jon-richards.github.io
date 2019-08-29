/** /**
 * @fileoverview
 * Contains the base class for API endpoints.
 */

'use strict';

import * as isUrl from 'validator/lib/isURL';

/** 
 * Base class for API endpoints.  Provides scaffolding for an endpoint URL, response structure and
 * runtime validation for the response.
 */
export class Endpoint<R> {
    /** The url for the endpoint. */
    readonly URL: string;
    /** The expected response type when making a request to the endpoint. */
    readonly RESPONSE: R;

    constructor(
        /** The url for the endpoint. */
        url: Endpoint<R>['URL'],
        /** The expected response type when making a request to the endpoint. */
        response: Endpoint<R>['RESPONSE']
    ) {
        this.URL = this.validateUrl(url);
        this.RESPONSE = response;
    }
    
    /** 
     * Validates the URL passed into the constructor.  If the url is invalid, returns an empty
     * string and logs an error to the console.
     * @param url The url as passed into the constructor.
     * @retun The url if valid, else returns an empty string.
     */
    private validateUrl(url: Endpoint<R>['URL']): string {
        const isValid = typeof url === 'string' && isUrl(url);
        if (!isValid && process.env.NODE_ENV !== 'test') {
            console.error(
                `ERROR: Endpoint was instantiated with invalid URL: ${url}, ` +
                `replacing with an emoty string.`
            );
        }
        return isValid ? url : '';
    }
}