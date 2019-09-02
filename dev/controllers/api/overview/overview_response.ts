/**
 * @fileoverview
 * Conatins a class that validates a response from the Overview endpoint.
 */

import {
    PieceEntity,
    PieceResponseShape,
    ToolEntity,
    ToolResponseShape
} from '../mediator';

/** The raw response body of an Overview response. */
export interface OverviewResponseShape {
    /** Array of pieces that should appear in the portfolio. */
    pieces: PieceResponseShape[];
    /** Array of tools used to build portfolio pieces. */
    tools: ToolResponseShape[];
}

/** Validates the response from the Overview endpoint. */
export class OverviewResponse {
    /** An array of portfolio pieces. */
    readonly pieces: PieceEntity[];
    /** An array of tools. */
    readonly tools: ToolEntity[];

    constructor(
        responseBody: OverviewResponseShape
    ) {
        this.pieces = this.validatePieces(responseBody.pieces);
        this.tools = this.validateTools(responseBody.tools);
    }

    /**
     * Validates the raw "pieces" field of an OverviewResponseShape, replacing invalid data with
     * valid data.
     * @param piecesBody An array of raw piece response data to validate.
     */
    private validatePieces(
        piecesBody: PieceResponseShape[]    
    ): PieceEntity[] {
        const mappedPieces = piecesBody.map(piece => new PieceEntity(piece));
        const uniquePieces = this.removeDuplicates(mappedPieces, 'uuid', 'Piece');
        const validPieces = this.removeWithStubs(
            uniquePieces,
            [
                {fieldName: 'id', stubValue: -1},
                {fieldName: 'uuid', stubValue: ''},
                {fieldName: 'displayTitle', stubValue: ''},
                {fieldName: 'urlTitle', stubValue: ''},
                {fieldName: 'description', stubValue: ''},
                {fieldName: 'thumbDeviceSmall', stubValue: ''},
                {fieldName: 'thumbDeviceMedium', stubValue: ''},
                {fieldName: 'thumbDeviceLarge', stubValue: ''},
                {fieldName: 'tools', stubValue: []},
            ],
            'Piece'
        );
        return validPieces;
    }

    /**
     * Validates the raw "tools" field of an OverviewResponseShape, replacing invalid data with
     * valid data.
     * @param piecesBody An array of raw piece response data to validate.
     */
    private validateTools(
        toolsBody: ToolResponseShape[]    
    ): ToolEntity[] {
        const mappedTools = toolsBody.map(tool => new ToolEntity(tool));
        const uniqueTools = this.removeDuplicates(mappedTools, 'uuid', 'Tool');
        const validTools = this.removeWithStubs(
            uniqueTools, 
            [
                {fieldName: 'id', stubValue: -1},
                {fieldName: 'uuid', stubValue: ''},
                {fieldName: 'displayTitle', stubValue: ''},
                {fieldName: 'filterableValue', stubValue: ''},
                {fieldName: 'logo', stubValue: ''}
            ],
            'Tool'
        );
        return validTools;
    }

    /**
     * Checks each entity in an array for uniqueness based on a given field.  Duplicate entities
     * will be discarded.
     * @param entities Array of entities on which to ensure uniqueness.
     * @param field The name of the field (string) on which to run the comparison.
     * @param name The name of the entity to include in the console output that appears in the event
     *             of a duplicate entity.
     * @return An array of entities where each of the given field is unique.
     */
    private removeDuplicates<E, F extends keyof E> (
        entities: E[], 
        field: F, 
        entityName: string
    ): E[] {
        const checked:E[] = [];
        
        entities.forEach(entity => {
            const isUnique = checked.every(checkedEntity => checkedEntity[field] !== entity[field]);
            
            if (isUnique) {
                checked.push(entity);
            } else if (process.env.NODE_ENV !== 'test') {
                console.error(
                    `ERROR: Found duplicate ${entityName} with ${field}: ${entity[field]}. ` +
                    `This ${entityName} has been discarded from the Overview response.`
                );
            }
        });

        return checked;
    }

    /**
     * Accepts an array of entities and ensures each of the provided fields does not contain a stub
     * value that may have been added by the app to prevent a runtime error. If a field without a
     * legitimate value is found, e.g. an empty UUID, the entity is discarded.
     * @param entities An array of entities to validate.
     * @param fields An array of objects containing the name of the field to be checked, and the
     *               value by which that field should flagged as invalid.
     * @param entityName The name of the entity, appears in console output when an invalid entity
     *                   is found.
     * @return An array of entities with which all of the designated fields are deemed valid.
     */
    private removeWithStubs<E> (
        entities: E[],
        fields: Array<{
            /** The name of the field to check for a stub value. */
            fieldName: keyof E;
            /** The value of the stub. */
            stubValue: E[keyof E];
        }>,
        entityName: string
    ): E[] {
        const validEntities: E[] = [];

        entities.forEach(entity => {
            let isValid = true;

            for (const field of fields) {
                const {fieldName, stubValue} = field;
                if (entity[fieldName] === stubValue) {
                    console.error(
                        `ERROR: Found invalid field: ${fieldName} with value: ${stubValue} on ` +
                        `response entity: ${entityName} in the Overview response.  This entity ` +
                        `be discarded.`
                    );
                    isValid = false;
                    break;
                }
            }

            if (isValid) validEntities.push(entity);
        });

        return validEntities;
    }
}