/**
 * @fileoverview
 * Contains a class that validates the structure of a tool object from the API.
 */

import { isUrl, isEmpty, isUUID, isNumeric, uuid } from './mediator';

/** Shape of a single tool node as recieved by the API. */
export interface ToolResponseShape {
    /** The id of the tool. */
    id: number;
    /** The tool's UUID */
    uuid: string;
    /** The display name of the tool. */
    display_title: string;
    /** A value by which the tool can be filtered amongst other tools. */
    filterable_value: string;
    /** URL safe string for the tool's logo image. */
    logo: string;
    /** 
     * If the tool should be considered a "core skill", something employers would look for directly.
     */
    is_core: boolean;
}

/** Possible types that can be passed into the "tool" param when instantiating a new Tool. */
type ToolField = string | number | boolean | null | undefined;

/** 
 * Accepts a single portfolio piece node from the Overview api response, validates and stores it.
 * If a value is invalid, it is replaced with a valid stub.
 */
export class Tool {
    /** The id of the tool. */
    readonly id: number;
    /** The tool's UUID/ */
    readonly uuid: string;
    /** The display name of the tool. */
    readonly displayTitle: string;
    /** A value by which the tool can be filtered amongst other tools. */
    readonly filterableValue: string;
    /** URL safe string for the tool's logo image. */
    readonly logo: string;
    /** 
     * If the tool should be considered a "core skill", something employers would look for directly.
     */
    readonly isCore: boolean;
    /** If this tool recieved an unexpected value and corrected it with a valid stub. */
    private selfCorrected = false;
    
    constructor (
        tool: ToolResponseShape
    ) {
        this.id = this.validate(tool.id, [this.isNumber], false, -1);
        this.uuid = this.validate(tool.uuid, [this.notEmpty, this.isUUID], false, uuid());
        this.displayTitle = this.validate(tool.display_title, [this.notEmpty], false, '');
        this.filterableValue = this.validate(
            tool.filterable_value, 
            [this.notEmpty, this.isURLString], 
            false, 
            ''
        );
        this.logo = this.validate(tool.logo, [this.notEmpty, this.isURLString], false, '');
        this.isCore = this.validate(tool.is_core, [this.isBoolean], false, false);
    }

    /**
     * Validates a provided property against a provided array of validators.  If the property is
     * invalid, it will be replaced with an acceptable value and an error will be logged to the
     * console.
     * @param prop The property to validate.
     * @param validators An array validation methods to run against the provided prop param.
     * @param isNullable If null is a valid property value.
     * @param replaceWith If the prop is invalid, it will be replaced with the value of this
     *                    parameter.
     * @return The original property value or its replacement, depending on if prop was valid.
     */
    private validate<T extends number | string | boolean | null>(
        prop: T, 
        validators: Array<
            | Tool['notEmpty']
            | Tool['isUUID']
            | Tool['isURLString']
            | Tool['isNumber']
            | Tool['isBoolean']
        >,
        isNullable: boolean, 
        replaceWith: T
    ): T {
        let isValid = true;

        if (prop === undefined) isValid = false;
        if (prop === null && !isNullable) isValid = false;
        
        if (isValid) {
            validators.forEach(validator => {
                if (validator(prop) === false) isValid = false;
            });
        }

        if (!isValid) this.selfCorrected = true;
        return isValid ? prop : replaceWith;
    }

    /** 
     * Checks if a prop is empty.
     * @param prop The property being evaluated.
     * @return true if the prop is not empty, false if it is.
     */
    private notEmpty(prop: ToolField): boolean {
        if (typeof prop === 'string') {
            return !isEmpty(prop);
        }
        return false;
    }

    /**
     * Checks if a prop is a valid version 4 UUID.
     * @param prop The property being evaluated.
     * @return true if the prop is a valid UUID else false.
     */
    private isUUID(prop: ToolField): boolean {
        if (typeof prop === 'string') {
            return isUUID(prop, 4);
        }
        return false;
    }

    /** 
     * Checks if a prop is a URL safe string.
     * @param prop The property being evaluated.
     * @return true if the prop is a URL safe string, esle false.
     */
    private isURLString(prop: ToolField): boolean {
        if (typeof prop === 'string') {
            return isUrl(prop, {
                require_host: false,
                require_protocol: false,
                require_tld: false, 
                require_valid_protocol: false,
                allow_underscores: true
            });
        }
        return false;
    }

    /**
     * Checks if a prop is a valid integer.
     * @param prop The property being evaluated.
     * @retrun true if the prop is a valid number, else false.
     */
    private isNumber(prop: ToolField): boolean {
        if (typeof prop === 'number') {
            return isNumeric(String(prop), {no_symbols: true});
        }
        return false;
    }

    /**
     * Checks if a prop is a valid boolean.
     * @param prop The property being evaluated.
     * @return true if the prop is a valid boolean, else false.
     */
    private isBoolean(prop: ToolField): boolean {
        return typeof prop === 'boolean';
    }

    /** 
     * If this Tool instance recieved an unexpected value for a property and corrected it with a
     * valid stub.
     */
    get isSelfCorrected(): Tool['selfCorrected'] {
        return this.selfCorrected;
    }
}