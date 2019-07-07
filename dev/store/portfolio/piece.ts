/**
 * @fileoverview
 * Contains a class that manages an individual portfolio piece.
 */

/** Manages transformations and validation of a single Portfolio Piece. */
export class Piece {
    /** The UUID for this piece. */
    readonly uuid: string;
    /** The title displayed in the UI. */
    readonly displayTitle: string;
    /** URL friendly title. */
    readonly urlTitle: string;
    /** URL of the banner image. */
    readonly bannerImage: string;

    constructor(
        /** The uuid for the piece. */
        uuid: Piece['uuid'],
        /** The piece's title as displayed in the UI. */
        displayTitle: Piece['displayTitle'],
        /** A URL safe version of the piece's title. */
        urlTitle: Piece['urlTitle'],
        /** URL of the banner image. */
        bannerImage: Piece['bannerImage'],
    ) {
        this.uuid = uuid;
        this.displayTitle = displayTitle;
        this.urlTitle = urlTitle;
        this.bannerImage = bannerImage;
    }
}