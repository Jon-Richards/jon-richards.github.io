/**
 * @fileoverview
 * Contains common configurations for API requests.
 */

'use strict';

/**
 * Configures a Fetch RequestInit object by merging provided parameter values
 * with default values.
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 * @param method The request method.
 * @param body The request body.  Defaults to `undefined`.
 * @param headers The request headers.
 * Defaults to `"Content-Type": "application/json"`.
 * @return A configured RequestInit object.
 */
export function setRequestOptions(
  method: RequestInit['method'],
  body: RequestInit['body'] = undefined,
  headers: RequestInit['headers'] = { 'Content-Type': 'application/json' }
): RequestInit {
  return {
    mode: 'cors',
    cache: 'default',
    credentials: 'same-origin',
    redirect: 'error',
    referrer: 'no-referrer',
    method,
    headers,
    body,
  };
}
