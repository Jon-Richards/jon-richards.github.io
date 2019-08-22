/**
 * @fileoverview
 * Contains a class that manages and validates a collection of portfolio pieces.
 */

import { Piece } from './mediator';

/** Manages and validates a collection of portfolio pieces. */
export class PieceManager {
    /** Array of portfolio pieces to validate. */
    readonly pieces: Piece[];

    constructor(
        /** Array of portfolio pieces to validate. */
        pieces: PieceManager['pieces']
    ) {
        if (Array.isArray(pieces)) {
            this.pieces = this.validatePieces( this.mapPieces(pieces) );
        } else {
            console.error('ERROR: Parameter "pieces" must be an array of Piece instances.');
            this.pieces = [];
        }
    }

    /**
     * Checks an array of Pieces against a series of validators and removes any that do not pass.
     * @param pieces An array of Pieces to validate.
     * @return An array of valid Pieces.
     */
    private validatePieces(pieces: Piece[]): Piece[] {
        const completePieces = this.removeIncompletePieces(pieces);
        const uniquePieces = this.removeDuplicatePieces(completePieces);
        return uniquePieces;
    }

    /** 
     * Maps an array of raw Piece objects into an array of Piece instances so that they can be
     * validated.
     * @param pieces An array of raw Piece objects.
     * @return An array of Piece instances created from the supplied data.
     */
    private mapPieces(pieces: Piece[]): Piece[] {
        return pieces.map( piece => (
            new Piece({
                uuid: piece.uuid,
                title: piece.title,
                url: piece.url,
                description: piece.description,
                thumbDeviceSmall: piece.thumbDeviceSmall,
                thumbDeviceMedium: piece.thumbDeviceMedium,
                thumbDeviceLarge: piece.thumbDeviceLarge,
                tools: piece.tools
            })
        ));
    }

    /**
     * Checks an array of Pieces for empty properties and removes the piece if any are found.
     * @param pieces An array of Pieces.
     * @return An array of Piece in which all required properties are not empty.
     */
    private removeIncompletePieces(pieces: Piece[]): Piece[] {
        const populated: Piece[] = [];

        pieces.forEach(piece => {
            const {uuid, title, url} = piece;
            const hasUUID = uuid.trim().length;
            const hasTitle = title.trim().length;
            const hasURL = url.trim().length;

            if (!hasUUID) this.throwEmptyPropertyError('uuid', '(uuid unavailable)');
            if (!hasTitle) this.throwEmptyPropertyError('title', uuid);
            if (!hasURL) this.throwEmptyPropertyError('url', uuid);
            if (hasUUID && hasTitle && hasURL) populated.push(piece);
        });

        return populated;
    }

    /** 
     * Logs an empty property message to the console for a given piece.
     * @param property The name of the property that is empty.
     * @param uuid The UUID of the piece with the empty property.
     */
    private throwEmptyPropertyError (property: string, uuid: Piece['uuid']): void {
        console.error(
            `ERROR: Property: ${property} is missing from portfolio piece with uuid: ${uuid}.  ` +
            `The piece will be disgarded.`
        );
    }

    /**
     * Checks an array of Pieces for duplicate information and removes the duplicate Piece if one
     * is found.
     * @param pieces An array of Pieces.
     * @return An array of Pieces with no duplicate information.
     */
    private removeDuplicatePieces(pieces: Piece[]): Piece[] {
        const checkedPieces: Piece[] = [];
        
        pieces.forEach( piece => {
            let hasDuplicateId = false;
            let hasDuplicateUrl = false;
            let hasDuplicateTitle = false;

            checkedPieces.forEach( checkedPiece => {
                hasDuplicateId = this.compareProperty(piece.uuid, checkedPiece.uuid, 'uuid');
                hasDuplicateUrl = this.compareProperty(piece.url, checkedPiece.url, 'url');
                hasDuplicateTitle = this.compareProperty(piece.title, checkedPiece.title, 'title');
            });

            if (!hasDuplicateId && !hasDuplicateUrl && !hasDuplicateTitle) {
                checkedPieces.push(piece);
            }
        });

        return checkedPieces;
    }

    /**
     * Compares a given property against another.  Raises an error if the comparison returns true.
     * @param propA The first property to compare.
     * @param propB The second property to compare.
     * @param propName The name of the property being compared.
     * @return True if the comparison resulted in true, else false.
     */
    private compareProperty<T>(propA: T, propB: T, propName: string): boolean {
        const areEqual = propA === propB;
        if (areEqual) {
            console.error(
                `ERROR: Found duplicate piece with property: ${propName}.  The duplicate will be ` +
                `disgarded.`
            );
        }
        return areEqual;
    }
}