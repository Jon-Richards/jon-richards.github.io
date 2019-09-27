/**
 * @fileoverview
 * Contains a class that validates the structure of a single portfolio piece
 * from the API.
 */

import { isUrl, isEmpty, isUUID, isNumeric, uuid } from './mediator';

/** Shape of a single portfolio piece node as recieved by the API. */
export interface PieceResponseShape {
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

/** Possible validators to run against a given property. */
type Validators = 'notEmpty' | 'isUUID' | 'isURLString' | 'isNumber';

/**
 * Accepts a single portfolio piece node from the Overview api response,
 * validates and stores it. If a value is invalid, it is replaced with a valid
 * stub and a "isSelfCorrected" flag is raised.
 */
export class Piece {
  /** The piece's ID in the database. */
  readonly id: number;
  /** The piece's UUID. */
  readonly uuid: string;
  /** The piece's title as it should be displayed to the user. */
  readonly displayTitle: string;
  /** A URL safe version of the piece's title. */
  readonly urlTitle: string;
  /** The piece's description. */
  readonly description: string;
  /** The piece's thumbnail for small devices. */
  readonly thumbDeviceSmall: string | null;
  /** The piece's thumbnail for medium devices. */
  readonly thumbDeviceMedium: string | null;
  /** The piece's thumbnail for large devices. */
  readonly thumbDeviceLarge: string | null;
  /** An array of tool UUID's used by the piece. */
  readonly tools: string[] | null;
  /**
   * If this piece revieved an unexpected value and corrected it with a valid
   * stub.
   */
  private selfCorrected = false;
  /**
   * Stub values used in the event an invalid property is passed into the
   * constructor.
   */
  static readonly STUBS = {
    ID: -1,
    UUID: '',
    DISPLAY_TITLE: '',
    URL_TITLE: '',
    DESCRIPTION: '',
    THUMB_DEVICE_SMALL: null,
    THUMB_DEVICE_MEDIUM: null,
    THUMB_DEVICE_LARGE: null,
    TOOLS: null,
  };

  constructor(piece: PieceResponseShape) {
    this.id = Number(
      this.validate(
        String(piece.id),
        ['notEmpty', 'isNumber'],
        false,
        String(Piece.STUBS.ID)
      )
    );
    this.uuid = this.validate(
      piece.uuid,
      ['notEmpty', 'isUUID'],
      false,
      Piece.STUBS.UUID
    );
    this.displayTitle = this.validate(
      piece.display_title,
      ['notEmpty'],
      false,
      Piece.STUBS.DISPLAY_TITLE
    );
    this.urlTitle = this.validate(
      piece.url_title,
      ['notEmpty'],
      false,
      Piece.STUBS.URL_TITLE
    );
    this.description = this.validate(
      piece.description,
      ['notEmpty'],
      false,
      Piece.STUBS.DESCRIPTION
    );
    this.thumbDeviceSmall = this.validate(
      piece.thumb_device_small,
      ['notEmpty', 'isURLString'],
      true,
      Piece.STUBS.THUMB_DEVICE_SMALL
    );
    this.thumbDeviceMedium = this.validate(
      piece.thumb_device_medium,
      ['notEmpty', 'isURLString'],
      true,
      Piece.STUBS.THUMB_DEVICE_MEDIUM
    );
    this.thumbDeviceLarge = this.validate(
      piece.thumb_device_large,
      ['notEmpty', 'isURLString'],
      true,
      Piece.STUBS.THUMB_DEVICE_LARGE
    );
    this.tools = Array.isArray(piece.tools)
      ? piece.tools
          .map(tool => this.validate(tool, ['notEmpty'], false, ''))
          .filter(tool => typeof tool === 'string' && !isEmpty(tool))
      : Piece.STUBS.TOOLS;
  }

  /**
   * Validates a provided property against a provided array of validators.
   * If the property is invalid, it will be replaced with an acceptable value
   * and an error will be logged to the console.
   * @param prop The property to validate.
   * @param validators An array of strings designating which validators to run
   * on the property.
   * @param isNullable If null is a valid property value.
   * @param replaceWith If the prop is invalid, it will be replaced with the
   * value of this parameter.
   * @return The original property value or its replacement, depending on if
   * prop was valid.
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

    if (!isValid) this.selfCorrected = true;
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

  /**
   * If this Piece instance contains a self corrected property due to recieving
   * an unexpected value.
   */
  get isSelfCorrected(): Piece['selfCorrected'] {
    return this.selfCorrected;
  }
}
