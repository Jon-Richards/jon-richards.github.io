/**
 * @fileoverview
 * Contains a standardized interface for the structure of errors.
 */

/** A standardized structure for errors. */
export interface Error {
    /** A message describing the error. */
    message: string;
    /** Severity level, 1 being the lowest and 3 being the highest. */
    severity: 1 | 2 | 3;
}