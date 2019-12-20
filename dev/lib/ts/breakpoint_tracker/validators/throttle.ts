import { Options } from '../interfaces';

/** 
 * Validates the throttle property of an Options type.  If the throttle is
 * invalid, an error will be logged to the console and the function will
 * return false.
 * @param rate The debounce rate to validate.
 * @return True if all validations pass.
 */
export function validateThrottle(rate: Options['throttle']): boolean{
  let isValid = true;
  try {
    if (typeof rate !== 'number') {
      throw new TypeError('throttle must be a number.');
    }
    if (rate < 0) {
      throw new RangeError('throttle cannot be negative.');
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