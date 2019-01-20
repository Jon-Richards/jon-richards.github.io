/**
 * @fileoverview
 * The main controller that bootstraps the application.
 */

// @ts-check
'use strict';

/**
 * @class
 * Main
 *
 * @classdesc
 * Bootstraps the application.
 */
export class Main {
    /** Constructor method. */
    constructor() {
        console.log('hello world!');
    }

    /**
     * Throws a type error.
     * @param {number} num a number
     */
    test(num) {
        console.log('foo + ' + num);
    }
}

new Main();
