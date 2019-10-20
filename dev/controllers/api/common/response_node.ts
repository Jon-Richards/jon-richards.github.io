/**
 * @fileoverview
 * Contains a base class for storing and validating JSON nodes recieved as
 * responses from the API.  This class allows 
 */

'use strict';

/**
 * Stores and validates data from individual JSON nodes recieved by the API.
 * This allows response validation to be composable, meaning complex response
 * types can be mapped to simple derivitives of this class, making it easy to
 * discern if the response has valid data.
 */
export class ResponseNode<Node extends object> {
  /** Mapping of errors observed by this entity. */
  private errors: Map<keyof Node, Set<string>> = new Map();

  /**
   * Returns a mapping of errors observed by this entity on its content.
   * @return The errors map for this entity.
   */
  getErrors(): ResponseNode<Node>['errors'] {
    return this.errors;
  }

  /** Clears all errors from this entity. */
  clearErrors(): void {
    this.errors.clear();
  }

  /**
   * Adds an error and corresponding descriptions to this entity. If an error
   * already exists, the descriptions will be merged with those belonging to
   * the existing error (duplicates will be discarded).
   * @param property The name of the property with the error.
   * @param reason Brief description(s) of the reason for each error.
   */
  protected addError(property: keyof Node, reason: string | string[]): void {
    const errors = this.errors;
    const currentReasons = errors.get(property);
    const updatedReasons = new Set(Array.isArray(reason) ? reason : [reason]);

    if (currentReasons) {
      currentReasons.forEach(reason => updatedReasons.add(reason));
    }

    errors.set(property, new Set(updatedReasons));
  }

  /** Removes a single error from this entity's errors. */
  protected removeError(property: keyof Node): void {
    this.errors.delete(property);
  }
}
