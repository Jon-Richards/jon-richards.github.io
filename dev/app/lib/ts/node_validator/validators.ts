/**
 * @fileoverview
 * Contains commonly used validation functions.
 */

import * as isEmpty from 'validator/lib/isEmpty';
import * as isURL from 'validator/lib/isURL';
import * as isInt from 'validator/lib/isInt';
import * as isValidUUID from 'validator/lib/isUUID';

/**
 * Checks if a value is empty.
 * @return true if the value is not empty, false if it is.
 */
export function notEmpty(val: string): boolean {
  return !isEmpty(val);
}

/**
 * Checks if a value is a valid version 4 UUID.
 * @return true if the value is a valid UUID else false.
 */
export function isUUID(val: string): boolean {
  return isValidUUID(val, 4);
}

/**
 * Checks if a value is a URI safe string.
 * @return true if the value is a URI safe string, esle false.
 */
export function isURIString(val: string): boolean {
  return isURL(val, {
    require_host: false,
    require_protocol: false,
    require_tld: false,
    require_valid_protocol: false,
    allow_underscores: true,
  });
}

/**
 * Checks if a value is a valid number.
 * @return true if the value is a valid number, else false.
 */
export function isInteger(val: string): boolean {
  return isInt(val, {allow_leading_zeroes: false});
}

/**
 * Checks if a val is a true boolean.  (Booleans that are only truthy will
 * return false.)
 * @param val The value being evaluated.
 * @return true if the value is a valid boolean, else false.
 */
export function isBoolean(val: string): boolean {
  return val === 'true' || val === 'false';
}