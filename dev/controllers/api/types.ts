/**
 * @fileoverview
 * Contains types that are returned from the API.
 */

'use strict';

/**
 * A single overview portfolio piece.
 * @see /overview/piece
 */
export interface OverviewPiece {
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
 * A single overview tool.
 * @see /overview/tools
 */
export interface OverviewTool {
  /** The tool's ID in the database. */
  id: number;
  /** The tool's UUID. */
  uuid: string;
  /** The tool's name. */
  name: string;
  /** The tools value when being filtered. */
  value: string;
  /** URL to the tool's logo. */
  logo: string;
  /** If the tool is considered a core skill. */
  core: boolean;
}

/** Mapping of the /overview response. */
export interface OverviewResponse {
  /** An array of OverviewPieces. */
  pieces: OverviewPiece[];
  /** An array of tools. */
  tools: OverviewTool[];
}
