/**
 * @fileoverview
 * Contains a class that manages loading and validating portfolio pieces.
 */

import { Piece, Error } from './mediator';

/** Loads and validates portfolio pieces */
export class PieceLoader {
    /** Fully validated array of portfolio Piece instances. */
    pieces: Piece[] = [];
    /** Any errors that have occurred. */
    errors: Error[] = [];

    constructor(
        /** Array of portfolio pieces to validate and load. */
        pieces: Piece[]
    ) {
        if (pieces.length < 1) console.error('No portfolio pieces were loaded.');
        if (this.hasDuplicateIds(pieces) === false) {
            this.pieces = pieces;
        }
    }

    /** 
     * Checks for duplicate piece ID's.
     * @param pieces Array of portfolio pieces to check.
     * @return If any duplicate id's were found.
     */
    private hasDuplicateIds (pieces: Piece[]) {
        const checkedIds: Array<Piece['uuid']> = [];
        let hasDuplicateIds = false;
        
        pieces.forEach( piece => {
            const { uuid } = piece;
            if (checkedIds.indexOf(uuid) > -1) {
                const message = `Found more than one portfolio piece with UUID: ${uuid}`;
                console.error(message);
                this.errors.push({ message, severity: 3 });
                hasDuplicateIds = true;
            } else {
                checkedIds.push(uuid);
            }
        });

        return hasDuplicateIds;
    }
}