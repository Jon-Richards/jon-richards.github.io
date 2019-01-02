/**
 * @file Contains a simple test class.
 */


// @ts-check

/**
 * A simple phrase.
 * @typedef {string | number} Phrase
 */

/**
 * A slightly more complex object.
 * @template T
 * @typedef  {object}  Complex
 * @property {string}  foo
 * @property {boolean} coin
 * @property {number}  total
 * @property {Phrase}  [phrase]
 * @property {T}       generic
 */

/**
 * A slightly less complex object.
 * @typedef {Readonly< Partial< Complex<boolean> > >} LessComplex
 */


'use strict';


/** A simple test class. */
export class Test {
    /**
     * Not much going on here.
     * @constructor
     * @param {Phrase} phrase A simple phrase.
     */
    constructor(phrase) {
        /** @type {Phrase} */
        this.phrase = phrase;
    }

    /** Says hello. */
    sayHi() {
        console.log(this.phrase);
    }
}
