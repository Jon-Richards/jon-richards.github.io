import { BaseValue } from './base_value';

/** A percentage value.. */
export class Percentage extends BaseValue {
  constructor(readonly value: number) {
    super();
    this.isWithinRange(value);
    this.value = value;
  }

  /** Validates that the value is within acceptable range. */
  protected isWithinRange = (value: number): void => {
    if (value < 0 || value > 100) {
      throw RangeError('Percentage can only range from 0 to 100.');
    }
  };
}
