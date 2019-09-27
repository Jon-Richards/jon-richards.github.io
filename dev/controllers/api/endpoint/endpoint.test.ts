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

  constructor(foo: MockResponse['foo']) {
    this.foo = foo;
  }
}

describe('The Endpoint class.', () => {
  it('Accepts a valid URL as the first parameter.', () => {
    const endpoint = new Endpoint<MockResponse>('http://www.google.com');
    expect(endpoint.URL.length).toEqual(21);
    expect(isUrl(endpoint.URL)).toBe(true);
  });

  it('Replaces an invalid URL parameter with an empty string.', () => {
    const endpoint = new Endpoint<MockResponse>((12345 as unknown) as string);
    expect(typeof endpoint.URL).toBe('string');
    expect(endpoint.URL.length).toEqual(0);
  });

  it('Replaces a URL parameter of the wrong type with an empty string.', () => {
    const endpoint = new Endpoint<MockResponse>((false as unknown) as string);
    expect(typeof endpoint.URL).toBe('string');
    expect(endpoint.URL.length).toBe(0);
  });

  it('Can store a response of any type.', () => {
    const endpoint = new Endpoint<MockResponse>('http://www.google.com');
    endpoint.response = new MockResponse('bar');
    expect(endpoint.response).toBeInstanceOf(MockResponse);
    expect(endpoint.response).toHaveProperty('foo');
    expect(endpoint.response.foo).toBe('bar');
  });
});
