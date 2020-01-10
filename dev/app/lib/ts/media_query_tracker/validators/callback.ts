import {
  MQTCallback,
  MQTMediaQuery
} from '../interfaces';

/**
 * Validates the callback that fires in response to one of the supplied
 * event listeners.
 * @param callback The callback function to validate.
 * @return True if all validations pass, false if not.
 */
export function validateCallback<
  Q extends MQTMediaQuery = MQTMediaQuery
>(callback: MQTCallback<Q>): boolean {
  let isValid = true;
  try {
    if (typeof callback !== 'function') {
      throw new TypeError('Callback is not a function.');
    }
  }
  catch (error) {
    console.error(error);
    isValid = false;
  }
  finally {
    return isValid;
  }
}