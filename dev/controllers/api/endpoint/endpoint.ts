/** /**
 * @fileoverview
 * Contains the base class for API endpoints.
 */

'use strict';

import { isUrl } from '../mediator';

/**
 * Base class for API endpoints.  Provides scaffolding for an endpoint URL,
 * response structure and runtime validation for the response.
 */
export class Endpoint<R> {
  /** The url for the endpoint. */
  readonly URL: string;
  /**
   * Member for storing a response of a given type. Runtime validation for the
   * response should be handled by subclasses.
   */
  response?: R;

  constructor(
    /** The url for the endpoint. */
    url: Endpoint<R>['URL']
  ) {
    this.URL = this.validateUrl(url);
  }

  /**
   * Validates the URL passed into the constructor.  If the url is invalid,
   * returns an emptystring and logs an error to the console.
   * @param url The url as passed into the constructor.
   * @retun The url if valid, else returns an empty string.
   */
  private validateUrl(url: Endpoint<R>['URL']): string {
    const isValid =
      typeof url === 'string' && isUrl(url, { require_tld: false });
    if (!isValid && process.env.NODE_ENV !== 'test') {
      console.error(
        `ERROR: Endpoint was instantiated with invalid URL: ${url}, ` +
          `replacing with an emoty string.`
      );
    }
    return isValid ? url : '';
  }
}
