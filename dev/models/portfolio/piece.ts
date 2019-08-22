/**
 * @fileoverview
 * Contains a class that manages an individual portfolio piece.
 */

import * as isEmpty from 'validator/lib/isEmpty';
import * as isUUID from 'validator/lib/isUUID';
import {v4 as uuid} from 'uuid';

/** Possible validators to run against a given property. */
type Validators = 'notEmpty' | 'isUUID';

/** Manages transformations and validation of a single Portfolio Piece. */
export class Piece {
    /** The UUID for this piece. */
    readonly uuid: string;
    /** The title displayed in the UI. */
    readonly title: string;
    /** URL friendly title. */
    readonly url: string;
    /** A description of the project. */
    readonly description: string;
    /** Path to the Piece's thumbnail for small device sizes. */
    readonly thumbDeviceSmall: string | null;
    /** Path to the Piece's thumbnail for medium device sizes. */
    readonly thumbDeviceMedium: string | null;
    /** Path to the Piece's thumbnail for large device sizes. */
    readonly thumbDeviceLarge: string | null;
    /** Array of UUID's corresponding to the tools used to create the piece. */
    readonly tools: string[];

    constructor(
        /** A portfolio piece to validate. */
        piece: {
            /** The uuid for the piece. */
            uuid: Piece['uuid'],
            /** The piece's title as displayed in the UI. */
            title: Piece['title'],
            /** A URL safe version of the piece's title. */
            url: Piece['url'],
            /** A description of the project. */
            description: Piece['description'],
            /** Path to the Piece's thumbnail for small device sizes. */
            thumbDeviceSmall: Piece['thumbDeviceSmall'],
            /** Path to the Piece's thumbnail for medium device sizes. */
            thumbDeviceMedium: Piece['thumbDeviceMedium'],
            /** Path to the Piece's thumbnail for large device sizes. */
            thumbDeviceLarge: Piece['thumbDeviceLarge'],
            /** Array of UUID's corresponding to the tools used to create the piece. */
            tools: string[]
        }
    ) {
        this.uuid = this.validate(piece.uuid, ['notEmpty', 'isUUID'], false, uuid());
        this.title = this.validate(piece.title, ['notEmpty'], false, '');
        this.url = this.validate(piece.url, ['notEmpty'], false, '');
        this.description = this.validate(piece.description, ['notEmpty'], false, '');
        this.thumbDeviceSmall = this.validate(piece.thumbDeviceSmall, ['notEmpty'], true, null);
        this.thumbDeviceMedium = this.validate(piece.thumbDeviceMedium, ['notEmpty'], true, null);
        this.thumbDeviceLarge = this.validate(piece.thumbDeviceLarge, ['notEmpty'], true, null);
        this.tools = piece.tools
            .map(tool => this.validate(tool, ['notEmpty'], false, ''))
            .filter(tool => !isEmpty(tool));
    }

    /**
     * Validates a provided property against a provided array of validators.  If the property is
     * invalid, it will be replaced with an acceptable value and an error will be logged to the
     * console.
     * @param prop The property to validate.
     * @param validators An array of strings designating which validators to run on the property.
     * @param isNullable If null is a valid property value.
     * @param replaceWith If the prop is invalid, it will be replaced with the value of this
     *                    parameter.
     * @return The original property value or its replacement, depending on if prop was valid.
     */
    private validate<T extends string | null>(
        prop: T, 
        validators: Validators[],
        isNullable: boolean, 
        replaceWith: T
    ): T {
        let isValid = true;
        
        if (prop === undefined) isValid = false;
        if (prop === null && !isNullable) isValid = false;
        if (isValid === true && typeof prop === 'string') {
            validators.forEach(validator => {
                if (!this[validator](prop)) isValid = false;
            });
        }

        return isValid ? prop : replaceWith;
    }

    /** 
     * Checks if a prop is empty.
     * @return true if the prop is not empty, false if it is.
     */
    private notEmpty(prop: string): boolean {
        return !isEmpty(prop);
    }

    /**
     * Checks if a prop is a valid version 4 UUID.
     * @return true if the prop is a valid UUID else false.
     */
    private isUUID(prop: string): boolean {
        return isUUID(prop, 4);
    }
}