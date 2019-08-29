/**
 * @fileoverview
 * Contains tests for the Endpoint class.
 */

import * as isUrl from 'validator/lib/isURL';
import { Endpoint } from '../mediator';

/** A simple repsonse object for testing the Endpoint class. */
class MockResponse {
    /** A mock property. */
    foo: string;
    
    constructor( foo: MockResponse['foo'] ) {
        this.foo = foo;
    }
}

describe('The Endpoint class.', () => {
    it('Accepts a valid URL as the first parameter.', () => {
        const endpoint = new Endpoint('http://www.google.com', new MockResponse('bar'));
        expect(endpoint.URL.length).toEqual(21);
        expect(isUrl(endpoint.URL)).toBe(true);
    });

    it('Replaces an invalid URL parameter with an empty string.', () => {
        const endpoint = new Endpoint('abcde', new MockResponse('bar'));
        expect(typeof endpoint.URL).toBe('string');
        expect(endpoint.URL.length).toEqual(0);
    });

    it('Replaces a URL parameter of the wrong type with an empty string.', () => {
        const endpoint = new Endpoint(false as unknown as string, new MockResponse('bar'));
        expect(typeof endpoint.URL).toBe('string');
        expect(endpoint.URL.length).toEqual(0);
    });

    it('Accepts a second parameter that can be any type.', () => {
        const endpoint = new Endpoint('http://www.google.com', new MockResponse('bar'));
        expect(endpoint.RESPONSE).toBeInstanceOf(MockResponse);
        expect(endpoint.RESPONSE).toHaveProperty('foo');
        expect(endpoint.RESPONSE.foo).toBe('bar');
    });
});