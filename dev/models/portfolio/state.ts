/**
 * @fileoverview
 * Contains the interface for the Portfolio state.
 */

import { Piece } from './mediator';

/** The Portfolio section of the redux store.  Provides valudation and default values. */
export class PortfolioState {
    /** Array of pieces displayed in the portfolio. */
    readonly pieces: Piece[];

    constructor(
        /** Array of pieces displayed in the portfolio. */
        pieces: Piece[]
    ) {
        this.pieces = pieces;
    }
}