import { BaseValue } from './base_value';

/** A value in geometric degrees. */
export class Degree extends BaseValue {
  constructor(
    readonly value: number
  ) {
    super();
    this.isWithinRange(value);
    this.value = value;
  }

  /** Validates that the value is within acceptable range. */
  protected isWithinRange = (value: number): void => {
    if (value < 0 || value > 360) {
      throw RangeError('Degree can only range from 0 to 360.');
    }
  }
}