/**
 * @fileoverview
 * Contains a class that validates the structure of a single portfolio piece
 * from the API.
 * @TODO Move core validation functionality into either its own class or the
 * ResponseNode class.
 */

import { isUrl, isEmpty, isUUID, isNumeric, ResponseNode } from './mediator';

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
export interface PieceEntityData {
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

/** Available validators to run against a given property. */
type Validators = 'notEmpty' | 'isUUID' | 'isURLString' | 'isNumber';

/**
 * Accepts a single portfolio piece node from the Overview api response,
 * validates and stores it. If a value is invalid, it is replaced with a valid
 * stub and a "isSelfCorrected" flag is raised.
 */
export class Piece extends ResponseNode<PieceResponseData> {
  /** Stores the data related to this piece. */
  readonly data: PieceEntityData;

  constructor(piece: PieceResponseData) {
    super();

    const id = Number(
      this.validate(
        'id',
        String(piece.id),
        [this.notEmpty, this.isNumber],
        false,
        '0'
      )
    );

    const uuid = this.validate(
      'uuid',
      piece.uuid,
      [this.notEmpty, this.isUUID],
      false,
      ''
    );

    const displayTitle = this.validate(
      'display_title',
      piece.display_title,
      [this.notEmpty],
      false,
      ''
    );

    const urlTitle = this.validate(
      'url_title',
      piece.url_title,
      [this.notEmpty],
      false,
      ''
    );

    const description = this.validate(
      'description',
      piece.description,
      [this.notEmpty],
      false,
      ''
    );

    const thumbDeviceSmall = this.validate(
      'thumb_device_small',
      piece.thumb_device_small,
      [this.notEmpty, this.isURLString],
      true,
      ''
    );
    const thumbDeviceMedium = this.validate(
      'thumb_device_medium',
      piece.thumb_device_medium,
      [this.notEmpty, this.isURLString],
      true,
      ''
    );
    const thumbDeviceLarge = this.validate(
      'thumb_device_large',
      piece.thumb_device_large,
      [this.notEmpty, this.isURLString],
      true,
      ''
    );

    const tools = Array.isArray(piece.tools)
      ? piece.tools
          .map(tool => this.validate('tools', tool, [this.notEmpty], false, ''))
          .filter(tool => typeof tool === 'string' && !isEmpty(tool))
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

  /**
   * Checks if a prop is a URL safe string.
   * @return true if the prop is a URL safe string, esle false.
   */
  private isURLString(prop: string): boolean {
    return isUrl(prop, {
      require_host: false,
      require_protocol: false,
      require_tld: false,
      require_valid_protocol: false,
      allow_underscores: true,
    });
  }

  /**
   * Checks if a prop is a valid number.
   * @retrun true if the prop is a valid number, else false.
   */
  private isNumber(prop: string): boolean {
    return isNumeric(prop, { no_symbols: true });
  }
}
