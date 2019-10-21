/**
 * @fileoverview
 * Conatins a class that validates a response from the Overview endpoint.
 */

import {
  PieceEntity,
  PieceResponseData,
  ToolEntity,
  ToolResponseData,
} from '../mediator';

/** The raw response body of an Overview response. */
export interface OverviewResponseData {
  /** Array of pieces that should appear in the portfolio. */
  pieces: PieceResponseData[];
  /** Array of tools used to build portfolio pieces. */
  tools: ToolResponseData[];
}

/** Validates the response from the Overview endpoint. */
export class OverviewResponse {
  /** An array of portfolio pieces. */
  readonly pieces: PieceEntity[];
  /** An array of tools. */
  readonly tools: ToolEntity[];

  constructor(responseBody: OverviewResponseData) {
    this.pieces = this.validatePieces(responseBody.pieces);
    this.tools = this.validateTools(responseBody.tools);
  }

  /**
   * Creates an array of PieceEntity instances based on the raw "pieces" field
   * of an OverviewResponseShape.  The PieceEntities are then validated and any
   * invalid entities are discarded.
   * @param piecesBody An array of raw piece response data to validate.
   */
  private validatePieces(piecesBody: PieceResponseData[]): PieceEntity[] {
    const mappedPieces = piecesBody.map(piece => new PieceEntity(piece));
    const uniquePieces = this.removeDuplicates(
      mappedPieces,
      piece => piece.data.uuid, 
      piece => 
        console.log(`Found duplicate Piece with uuid: ${piece.data.uuid}.`)
    );
    const validPieces = uniquePieces.filter(piece => 
      piece.getErrors().size === 0
    );
    return validPieces;
  }

  /**
   * Creates an array of ToolEntities based on the raw "tools" field of an
   * OverviewResponseShape. ToolEntities are then validated and any invalid
   * entities are discarded.
   * @param toolsBody An array of raw tool response data to validate.
   */
  private validateTools(toolsBody: ToolResponseData[]): ToolEntity[] {
    const mappedTools = toolsBody.map(tool => new ToolEntity(tool));
    const uniqueTools = this.removeDuplicates(
      mappedTools, 
      tool => tool.data.uuid,
      tool => console.log(`Found duplicate Tool with uuid: ${tool.data.uuid}.`)
    );
    const validTools = uniqueTools.filter(tool => tool.getErrors().size === 0);
    return validTools;
  }

  /**
   * Checks each entity in an array for uniqueness based on a given property.
   * Duplicate entities will be discarded.
   * @param entities Array of entities on which to ensure uniqueness.
   * @param getComparableProperty A method that passes the entity param and
   * returns a field containing the value for the comparator.
   * @param onFindDuplicate Optional callback function that passes the duplicate
   * entity if one is found.
   * @return An array of entities where each of the given field is unique.
   */
  private removeDuplicates<E, F>(
    entities: E[],
    getComparableProperty: (entity: E) => F,
    onFindDuplicate?: (entity: E) => void
  ): E[] {
    const checked: E[] = [];

    entities.forEach(entity => {
      const isUnique = checked.every(checkedEntity => 
        getComparableProperty(checkedEntity) !== getComparableProperty(entity)
      );

      if (isUnique) {
        checked.push(entity);
      } else if (onFindDuplicate !== undefined) {
        onFindDuplicate(entity);
      }
    });

    return checked;
  }
}
