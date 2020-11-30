/**
 * Abstract class for defining color values.  These can bee int8's,
 * percentages, degrees, etc.
 */
export abstract class BaseValue {
  /** The value held by this BaseValue. */
  abstract readonly value: number;
  /**
   * Validates if the value is with an expected range and throws a RangeError
   * if it isn't.
   */
  protected abstract isWithinRange(value: number): void;
}
