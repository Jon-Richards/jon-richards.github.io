/**
 * @fileoverview
 * Conatins a class that validates a response from the Overview endpoint.
 */

import { 
  NodeValidator,
  filterByDuplicateProperty
} from '../../../../lib/node_validator';
import { Piece, PieceResponseData } from '../piece';
import { Tool, ToolResponseData } from '../tool';

/** The raw response body of an Overview response. */
export interface OverviewResponseData {
  /** Array of pieces that should appear in the portfolio. */
  pieces: PieceResponseData[];
  /** Array of tools used to build portfolio pieces. */
  tools: ToolResponseData[];
}

/** The raw response body of an Overview response. */
export interface OverviewValidatorData {
  /** Array of pieces that should appear in the portfolio. */
  pieces: Piece[];
  /** Array of tools used to build portfolio pieces. */
  tools: Tool[];
}

/** Validates the response from the Overview endpoint. */
export class Overview extends NodeValidator<OverviewResponseData> {
  /** Contains validated data from the response. */
  readonly data: OverviewValidatorData = {
    pieces: [],
    tools: []
  };

  constructor(responseBody: OverviewResponseData) {
    super();
    this.data.pieces = this.validatePieces(responseBody.pieces);
    this.data.tools = this.validateTools(responseBody.tools);
  }

  /**
   * Creates an array of PieceEntity instances based on the raw "pieces" field
   * of an OverviewResponseShape.  The PieceEntities are then validated and any
   * invalid entities are discarded.
   * @param piecesBody An array of raw piece response data to validate.
   */
  private validatePieces(piecesBody: PieceResponseData[]): Piece[] {
    const mappedPieces = piecesBody.map(piece => new Piece(piece));
    const uniquePieces = filterByDuplicateProperty(
      mappedPieces,
      piece => piece.data.uuid, 
      piece => 
        console.warn(`Found duplicate Piece with uuid: ${piece.data.uuid}.`)
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
  private validateTools(toolsBody: ToolResponseData[]): Tool[] {
    const mappedTools = toolsBody.map(tool => new Tool(tool));
    const uniqueTools = filterByDuplicateProperty(
      mappedTools, 
      tool => tool.data.uuid,
      tool => 
        console.warn(`Found duplicate Tool with uuid: ${tool.data.uuid}.`)
    );
    const validTools = uniqueTools.filter(tool => tool.getErrors().size === 0);
    return validTools;
  }
}
