/**
 * Builds a source object for a Gallery Thumbnail.
 * @param query The exact media query to include in the source object.
 * @param preferredWidth The preferred width of the image who's path will be
 * included in the source object.
 * @param imagePool A pool of images from which to find a best match for the
 * preferred width.
 * @return A source object for a Gallery Thumbnail.
 */
export function buildThumbnailSource(
  mediaQuery: string,
  preferredWidth: number,
  imagePool: Image[]
): ThumbnailSource {
  const image = findImageForPreferredWidth(imagePool, preferredWidth);

  return {
    mediaQuery,
    source: image.source
  }
}

export type Image = {
  source: string;
  width: number;
}

export type ThumbnailSource = {
  mediaQuery: string;
  source: string;
}

/**
 * Finds the image from a supplied array of images whos width is closest to the
 * provided preferred width value.  If no image can be found, the image with
 * the smallest width is returned.
 * @param images An array of images from which to search.
 * @param preferredWidth The preferred width in pixels by which to match the
 * image.
 * @return The image with the best fit for the preferred width.
 */
function findImageForPreferredWidth(
  images: Image[],
  preferredWidth: number
): Image {
  validateImagePool(images);
  const sorted = sortImagesByWidth(images);
  for (const image of sorted) {
    if (image.width >= preferredWidth) {
      return image;
    }
  }
  return sorted[0];
}

function validateImagePool(images: Image[]) {
  if (images.length < 1) {
    throw RangeError('Length of images array must be at least 1.');
  }
}

/**
 * Sorts an array of Images based on width, from smallest to largest.
 * @param images The images to sort.
 */
function sortImagesByWidth(images: Image[]): Image[] {
  const copy = [...images];
  return copy.sort((a, b) => a.width - b.width);
}
