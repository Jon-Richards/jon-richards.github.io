/**
 * @fileoverview
 * Contains a class that validates a Portfolio Piece node before it is
 * placed in the Redux Store.
 */

import { 
  NodeValidator,
  isUUID,
  isURIString,
  notEmpty,
} from '../../../lib/node_validator';

/** Shape of a single Porfolio Piece node in the Store. */
export interface PieceStoreNode {
  /** The uuid for the piece. */
  uuid: string;
  /** The piece's title as displayed in the UI. */
  title: string;
  /** A URL safe version of the piece's title. */
  url:string;
  /** A description of the project. */
  description: string;
  /** Path to the Piece's thumbnail for small device sizes. */
  thumbDeviceSmall: string | null;
  /** Path to the Piece's thumbnail for medium device sizes. */
  thumbDeviceMedium: string | null;
  /** Path to the Piece's thumbnail for large device sizes. */
  thumbDeviceLarge: string | null;
  /** Array of UUID's corresponding to the tools used to create the piece. */
  tools: string[];
}

/** Validates a Portfolio Piece node before it reaches the Redux Store. */
export class Piece extends NodeValidator<PieceStoreNode> {
  /** Validated data about a single Portfolio Piece. */
  readonly data: PieceStoreNode;

  constructor(
    piece: PieceStoreNode
  ) {
    super();

    const uuid = this.validate(
      'uuid',
      piece.uuid,
      [notEmpty, isUUID],
      false,
      ''
    );

    const title = this.validate(
      'title',
      piece.title,
      [notEmpty],
      false,
      ''
    );

    const url = this.validate(
      'url',
      piece.url,
      [notEmpty, isURIString],
      false,
      ''
    );

    const description = this.validate(
      'description',
      piece.description,
      [notEmpty],
      false,
      ''
    );

    const thumbDeviceSmall = this.validate(
      'thumbDeviceSmall',
      piece.thumbDeviceSmall,
      [notEmpty, isURIString],
      true,
      null
    );

    const thumbDeviceMedium = this.validate(
      'thumbDeviceMedium',
      piece.thumbDeviceMedium,
      [notEmpty, isURIString],
      true,
      null
    );

    const thumbDeviceLarge = this.validate(
      'thumbDeviceLarge',
      piece.thumbDeviceLarge,
      [notEmpty, isURIString],
      true,
      null
    );

    const tools = piece.tools
      .map(tool => this.validate('tools', tool, [notEmpty], false, ''))
      .filter(tool => notEmpty(tool));

    this.data = {
      uuid,
      title,
      url,
      description,
      thumbDeviceSmall,
      thumbDeviceMedium,
      thumbDeviceLarge,
      tools
    };
  }
}