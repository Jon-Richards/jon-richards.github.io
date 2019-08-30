/**
 * @fileoverview
 * Contains a class that validates the structure of a portfolio piece when recieved as part of the
 * overview response.
 */

/** 
 * Shape of a single portfolio piece node as recieved by the API when hitting the Overview
 * endpoint.
 */
export interface OverviewPieceResponse {
    /** The piece's ID in the database. */
    id: number;
    /** The piece's UUID. */
    uuid: string;
    /** The piece's title as it should be displayed to the user. */
    display_title: string;
    /** A URL safe version of the piece's title. */
    url_title: string;
    /** The piece's description. */
    description: string;
    /** The piece's thumbnail for small devices. */
    thumb_device_small: string;
    /** The piece's thumbnail for medium devices. */
    thumb_device_medium: string;
    /** The piece's thumbnail for large devices. */
    thumb_device_large: string;
    /** An array of tool UUID's used by the piece. */
    tools: string[];
}

/** 
 * Accepts a single portfolio piece node from the Overview api response, validates and stores it.
 * If a value is invalid, it is replaced with a valid stub.
 */
export class OverviewPiece {
    /** The piece's ID in the database. */
    readonly ID: number;
    /** The piece's UUID. */
    readonly UUID: string;
    /** The piece's title as it should be displayed to the user. */
    readonly DISPLAY_TITLE: string;
    /** A URL safe version of the piece's title. */
    readonly URL_TITLE: string;
    /** The piece's description. */
    readonly DESCRIPTION: string;
    /** The piece's thumbnail for small devices. */
    readonly THUMB_DEVICE_SMALL: string;
    /** The piece's thumbnail for medium devices. */
    readonly THUMB_DEVICE_MEDIUM: string;
    /** The piece's thumbnail for large devices. */
    readonly THUMB_DEVICE_LARGE: string;
    /** An array of tool UUID's used by the piece. */
    readonly TOOLS: string[];
    
    constructor (
        pieceNode: OverviewPieceResponse
    ) {
        this.ID = pieceNode.id;
        this.UUID = pieceNode.uuid;
        this.DISPLAY_TITLE = pieceNode.display_title;
        this.URL_TITLE = pieceNode.url_title;
        this.DESCRIPTION = pieceNode.description;
        this.THUMB_DEVICE_SMALL = pieceNode.thumb_device_small;
        this.THUMB_DEVICE_MEDIUM = pieceNode.thumb_device_medium;
        this.THUMB_DEVICE_LARGE = pieceNode.thumb_device_large;
        this.TOOLS = pieceNode.tools;
    }
}