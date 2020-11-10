/**
 * Provides methods for validating individual JSON nodes and for storing errors
 * in a predictable format if any are found.
 */
export class NodeValidator<ValidatedData extends object> {
  private errors: Map<keyof ValidatedData, Set<string>> = new Map();

  /**
   * Returns a mapping of errors observed by this entity on its content.
   * @return The errors map for this entity.
   */
  getErrors (): NodeValidator<ValidatedData>['errors'] {
    return this.errors;
  }

  /**
   * Returns true if the errors map of this NodeValidator is populated.
   * @return True if this NodeValidator has errors, else false.
   */
  hasErrors (): boolean {
    return this.errors.size > 0;
  }

  /** Clears all errors from this entity. */
  clearErrors (): void {
    this.errors.clear();
  }

  /**
   * Runs the provided value through a series of mandatory validators to
   * ensure it is of an acceptable type for subsequent validators. At the time
   * of this writing, the accepted data types are string and null.  String due
   * to its ease in parsing (making it suitable for a wide variety of
   * validators) and null due to its role as an intentional "no" value. If the
   * type is unexpected, an error for the corresponding property will be
   * registered and the method will return false.
   * @param name The name of the property being validated.
   * @param value The value to be validated.
   * @param isNullable If null is an acceptable value.
   * @return True if the value passes validation, else false.
   */
  private prevalidate<T extends string | null> (
    name: keyof ValidatedData,
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
   * this instance's errors map.
   *
   * __Note__ Values and replacements must be of type `string`, this allows more
   * flexibility when parsing the provided value and providing a replacement if
   * need be.
   *
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
  protected validate<T extends string | null> (
    name: keyof ValidatedData,
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
  protected addError (
    property: keyof ValidatedData,
    reason: string | string[]
  ): void {
    const errors = this.errors;
    const currentReasons = errors.get(property);
    const updatedReasons = new Set(Array.isArray(reason) ? reason : [reason]);

    if (currentReasons) {
      currentReasons.forEach(reason => updatedReasons.add(reason));
    }

    errors.set(property, new Set(updatedReasons));
    if (process.env.NODE_ENV !== 'test') {
      console.warn(`${property}: ${reason}`);
    }
  }

  /** Removes a single error from this entity's errors. */
  protected removeError (property: keyof ValidatedData): void {
    this.errors.delete(property);
  }
}
