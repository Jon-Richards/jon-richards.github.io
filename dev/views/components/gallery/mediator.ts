/**
 * @fileoverview
 * Mediates dependencies within the Gallery module.
 */

 /** External */
import * as React from 'react';
export { React };
import { v4 as uuid } from 'uuid';
export { uuid };

/** Internal */
export { Gallery } from './gallery/gallery';
import { THUMBNAIL as Thumbnail, ThumbnailShape } from './thumbnail/thumbnail';
export { Thumbnail, ThumbnailShape };