import {
  NodeValidator,
  isURIString,
  isInteger,
  isUUID,
  notEmpty
} from '../../../lib/node_validator';

/** Shape of a single image node as received by the API. */
export interface ImageResponseData {
  /** The id of the image. */
  id: number;
  /** A unique identifier for the image. */
  uuid: string;
  /** The kind of image, e.g. "thumbnail" or "banner". */
  category: string;
  /** The width (in pixels) of the image file. */
  width: number;
  /** The height (in pixels) of the image file. */
  height: number;
  /** A description of the image. */
  description: string;
  /** A path to the image's source file. */
  source: string;
}

/**
 * Accepts a single image node from the Overview api response,
 * validates and stores it.
 */
export class ImageValidator extends NodeValidator<ImageResponseData> {
  /** Validated data held by this Image entity. */
  data: ImageResponseData;

  constructor(image: ImageResponseData) {
    super();

    const id: ImageResponseData['id'] = Number(
      this.validate('id', String(image.id), [isInteger], false, '0'),
    );

    const uuid: ImageResponseData['uuid'] = this.validate(
      'uuid',
      image.uuid,
      [notEmpty, isUUID],
      false,
      ''
    );

    const category: ImageResponseData['category'] = this.validate(
      'category',
      image.category,
      [notEmpty],
      false,
      ''
    );

    const width: ImageResponseData['width'] = Number(
      this.validate(
        'width',
        String(image.width),
        [notEmpty, isInteger],
        false,
        '0'
      )
    );

    const height: ImageResponseData['height'] = Number(
      this.validate(
        'height',
        String(image.height),
        [notEmpty, isInteger],
        false,
        '0'
      )
    );

    const description: ImageResponseData['description'] = this.validate(
      'description',
      image.description,
      [notEmpty],
      false,
      ''
    );

    const source: ImageResponseData['source'] = this.validate(
      'source',
      image.source,
      [notEmpty, isURIString],
      false,
      ''
    );

    this.data = {
      id,
      uuid,
      category,
      width,
      height,
      description,
      source
    };
  }
}
