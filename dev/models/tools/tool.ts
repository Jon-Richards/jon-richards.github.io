/**
 * @fileoverview
 * Contains a class that manages an individual portfolio piece.
 */

/** Manages transformations and validation of a single Portfolio Piece. */
export class Tool {
  /** The UUID for this tool. */
  readonly uuid: string;
  /** The name of the tool as displayed in the UI. */
  readonly name: string;
  /** The css class used for the logo of the tool. */
  readonly logo: string;
  /** If this is a core tool or considered especially important. */
  readonly isCore: boolean;

  constructor(
    /** The uuid for the tool. */
    uuid: Tool['uuid'],
    /** The name of the tool. */
    name: Tool['name'],
    /** The css clas used for the logo of the tool. */
    logo: Tool['logo'],
    /** If this is a core tool or considered especially important. */
    isCore: boolean
  ) {
    this.uuid = uuid;
    this.name = name;
    this.logo = logo;
    this.isCore = isCore;
  }
}
