/**
 * @fileoverview
 * Mediates dependencies within the Gallery module.
 */

import * as React from 'react';
export { React };

export { Gallery } from './gallery/gallery';

import { THUMBNAIL as Thumbnail, ThumbnailShape } from './thumbnail/thumbnail';
export { Thumbnail, ThumbnailShape };

import { v4 as uuid } from 'uuid';
export { uuid };