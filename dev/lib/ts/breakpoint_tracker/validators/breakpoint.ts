import { Breakpoint, IterableBreakpoints } from '../interfaces';

/**
 * Validates a single breakpoint.  If validation fails, an error will be
 * logged to the console and the function will return false.
 * @param validated The breakpoints that have already been validated, this
 * allows the breakpoint to be evaluated in context of its siblings.
 * @param value The breakpoint on which to run the validation.
 * @return True if all validations pass.
 */
export function validateBreakpoint(
  validated: IterableBreakpoints, 
  value: Breakpoint
): boolean {
  const { name, min, max, unit } = value;
  let isValid = true;
  try {
    if (typeof name !== 'string') {
      throw new TypeError('Breakpoint name must be a string.');
    }
    if (validated.has(name)) {
      throw new TypeError(`Duplicate breakpoint identifier: ${name}.`);
    }
    if (typeof min !== 'number') {
      throw new TypeError('Property "min" must be a number.');
    }
    if (typeof max !== 'number') {
      throw new TypeError('Property "max" must be a number.');
    }
    if (min >= max) {
      throw new RangeError('Breakpoint min must be less than its max.');
    }
    if (min < 0) {
      throw new RangeError(
        'Breakpoint\'s min value must not be less than 0.'
      );
    }
    if (max < 1) {
      throw new RangeError('Breakpoint\'s max value must be greater than 0.');
    }
    if (typeof unit !== 'string') {
      throw new TypeError('Breakpoint unit must be a string.');
    }
  }
  catch(error) {
    console.error(error);
    isValid = false;
  }
  finally {
    return isValid;
  }
}