/**
 * @fileoverview
 * Contains a class that validates the structure of a single portfolio piece
 * from the API.
 */

import { 
  NodeValidator,
  isURIString,
  isUUID,
  isInteger,
  notEmpty
} from '../../../../lib/node_validator';

/** Shape of a single portfolio piece JSON node as recieved by the API. */
export interface PieceResponseData {
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
  thumb_device_small: string | null;
  /** The piece's thumbnail for medium devices. */
  thumb_device_medium: string | null;
  /** The piece's thumbnail for large devices. */
  thumb_device_large: string | null;
  /** An array of tool UUID's used by the piece. */
  tools: string[] | null;
}

/** Validated data held by the Piece entity. */
export interface PieceValidatorData {
  /** The piece's ID in the database. */
  id: PieceResponseData['id'];
  /** The piece's UUID. */
  uuid: PieceResponseData['uuid'];
  /** The piece's title as it should be displayed to the user. */
  displayTitle: PieceResponseData['display_title'];
  /** A URL safe version of the piece's title. */
  urlTitle: PieceResponseData['url_title'];
  /** The piece's description. */
  description: PieceResponseData['description'];
  /** The piece's thumbnail for small devices. */
  thumbDeviceSmall: PieceResponseData['thumb_device_small'];
  /** The piece's thumbnail for medium devices. */
  thumbDeviceMedium: PieceResponseData['thumb_device_medium'];
  /** The piece's thumbnail for large devices. */
  thumbDeviceLarge: PieceResponseData['thumb_device_large'];
  /** An array of tool UUID's used by the piece. */
  tools: PieceResponseData['tools'];
}

/**
 * Accepts a single portfolio piece node from the Overview api response,
 * validates and stores it.
 */
export class Piece extends NodeValidator<PieceResponseData> {
  /** Stores the data related to this piece. */
  readonly data: PieceValidatorData;

  constructor(piece: PieceResponseData) {
    super();

    const id = Number(
      this.validate(
        'id',
        String(piece.id),
        [notEmpty, isInteger],
        false,
        '0'
      )
    );

    const uuid = this.validate(
      'uuid',
      piece.uuid,
      [notEmpty, isUUID],
      false,
      ''
    );

    const displayTitle = this.validate(
      'display_title',
      piece.display_title,
      [notEmpty],
      false,
      ''
    );

    const urlTitle = this.validate(
      'url_title',
      piece.url_title,
      [notEmpty],
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
      'thumb_device_small',
      piece.thumb_device_small,
      [notEmpty, isURIString],
      true,
      ''
    );

    const thumbDeviceMedium = this.validate(
      'thumb_device_medium',
      piece.thumb_device_medium,
      [notEmpty, isURIString],
      true,
      ''
    );

    const thumbDeviceLarge = this.validate(
      'thumb_device_large',
      piece.thumb_device_large,
      [notEmpty, isURIString],
      true,
      ''
    );

    const tools = Array.isArray(piece.tools)
      ? piece.tools
          .map(tool => this.validate('tools', tool, [notEmpty], false, ''))
          .filter(tool => typeof tool === 'string' && notEmpty(tool))
      : [];

    this.data = {
      id,
      uuid,
      displayTitle,
      urlTitle,
      description,
      thumbDeviceSmall,
      thumbDeviceMedium,
      thumbDeviceLarge,
      tools,
    };
  }
}
