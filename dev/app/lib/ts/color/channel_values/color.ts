import { BaseValue } from './base_value';

/** A single color channel. */
export class Color extends BaseValue {
  constructor (
    readonly value: number
  ) {
    super();
    Color.isInteger(value);
    this.isWithinRange(value);
    this.value = value;
  }

  private static isInteger = (int: number): void => {
    if (int % 1 !== 0) {
      throw RangeError('Color must be an integer.');
    }
  }

  /** Validates that the value is within acceptable range. */
  protected isWithinRange = (int: number): void => {
    if (int < 0 || int > 255) {
      throw RangeError('Color must be an integer from 0 to 255.');
    }
  }
}
