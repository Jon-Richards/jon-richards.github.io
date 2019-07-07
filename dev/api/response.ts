/**
 * @fileoverview
 * Contains a class for standardizing and validating the overall shape of API responses.
 */

'use strict';

import { Status } from './mediator';

/** 
 * Provides a standardized shape for handling API responses including status codes, the original
 * payload, etc.  The response body and request payload are not validated.
 * 
 * @example
 * type bodyShape = {foo: string}
 * type payloadShape = {bar: string}
 * 
 * const resp = new Response<bodyShape, payloadShape>(
 * 200, 
 * {foo: 'foo'}, 
 * {bar: 'bar'}
 * );
 * console.log( resp.status.code ) // 200
 * console.log( resp.status.code.isValid ) // true
 * console.log( resp.body.foo ) // 'foo'
 * console.log( resp.payload.bar ) // 'bar'
 */
export class Response<BodyShape = undefined, PayloadShape = undefined> {
    /** The repsonse status that was returned by the API. */
    readonly status: Status;
    /** The body of the response. */
    readonly body: BodyShape | undefined;
    /** The payload sent with the original request. */
    readonly payload: PayloadShape | undefined;

    constructor (
        /** The status code sent from the API. */
        statusCode: Status['code'],
        /** The body of the api response. */
        body: BodyShape,
        /** The payload sent with the original request. */
        payload?: PayloadShape
    ) {
        this.status = new Status(statusCode);
        this.body = body;
        this.payload = payload;
    }
}