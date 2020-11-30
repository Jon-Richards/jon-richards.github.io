import { BaseValue } from './base_value';

/** A value ranging from 0 to 1. */
export class UnitInterval extends BaseValue {
  constructor(readonly value: number) {
    super();
    this.isWithinRange(value);
    this.value = value;
  }

  /** Validates that the value is within acceptable range. */
  protected isWithinRange = (int: number): void => {
    if (int < 0 || int > 1) {
      throw RangeError('Unit interval must range from 0 to 1.');
    }
  };
}
