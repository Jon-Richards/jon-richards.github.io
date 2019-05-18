/**
 * @fileoverview
 * Contains JSX compatible HTML entities (unicode numbers corresponding to the html entity)
 * as constants.
 * @see https://shripadk.github.io/react/docs/jsx-gotchas.html
 * @see http://www.fileformat.info/info/unicode/char/00a0/index.htm
 */

/**
 * Non-breaking space.
 * @see http://www.fileformat.info/info/unicode/char/00a0/index.htm
 */
export const NBSP: string = String.fromCharCode(160);

/**
 * Non-breaking hyphen.
 * @see http://www.fileformat.info/info/unicode/char/2011/index.htm
 */
export const NBHP: string = String.fromCharCode(8209);
