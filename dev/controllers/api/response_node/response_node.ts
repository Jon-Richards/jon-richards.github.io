/**
 * @fileoverview
 * Contains a base class for storing and validating JSON nodes recieved as
 * responses from the API.
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
   * Runs the provided value through a series of mandatory validators to
   * ensure it is of an expected type.  If the type is unexpected, an error
   * for the corresponding property will be registered and the method will
   * return false.
   * @param name The name of the property being validated.
   * @param value The value to be validated.
   * @param isNullable If null is an acceptable value.
   * @return True if the value passes validation, else false.
   */
  protected prevalidate<T extends string | null>(
    name: keyof Node,
    value: T,
    isNullable: boolean
  ): boolean {
    let isValid = true;

    if (value === undefined) isValid = false;
    if (!isNullable && value === null) isValid = false;
    if (typeof value !== 'string' && !isNullable) isValid = false;
    if (isNullable && (value !== null && typeof value !== 'string')) {
      isValid = false;
    }
    if (isValid === false) {
      this.addError(name, `Is of an unexpected type: ${typeof value}`);
    }

    return isValid;
  }

  /**
   * Validates a provided property against a provided array of validators.
   * If the property is invalid, it will be replaced with an acceptable
   * placeholder and an error for the property will be registered with
   * this entity's errors map.
   * @param name The name of the property being validated.
   * @param value The value to validate.
   * @param validators An array of functions that accept a value (string) as
   * their first parameter and return true if the validator passes, false if
   * not.
   * @param isNullable If null is a valid value.
   * @param replaceWith If the value is invalid, it will be replaced with the
   * value of this parameter.
   * @return The original property value or its replacement, depending on if
   * the value passed validation.
   */
  protected validate<T extends string | null>(
    name: keyof Node,
    value: T,
    validators: Array<(value:string) => boolean>,
    isNullable: boolean,
    replaceWith: T
  ): T {
    let isValid = this.prevalidate(name, value, isNullable);

    if (isValid === true && typeof value === 'string') {
      validators.forEach(validator => {
        const result = validator(value);
        if (result === false) {
          isValid = false;
          this.addError(name, `Failed on validator: ${validator.name}`);
        }
      });
    }

    return isValid ? value : replaceWith;
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
