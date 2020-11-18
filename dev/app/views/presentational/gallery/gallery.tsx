/** @jsx jsx */

import * as React from 'react';
import { css, jsx } from '@emotion/core';
import { Thumbnail } from './thumbnail';
import { STYLES } from './styles';

/**
 * Renders a gallery section with thumbnails that, when clicked, lead to a
 * dedicated page about the piece the thumbnail depicts.
 * @param props Required information for rendering the Gallery.
 */
function Gallery(props: GalleryProps): JSX.Element {
  const { thumbnails, thumbnailSize, onClick } = props;
  const mappedThumbs = mapThumbnails(thumbnails, thumbnailSize, onClick);
  return <div css={css(STYLES.root)}>{mappedThumbs}</div>;
}

export type GalleryProps = {
  thumbnails: ThumbnailShape[];
  /** The size at which all thumbnails should render. */
  thumbnailSize: ThumbnailSize;
  /**
   * A method that fires whenever a thumbnail is clicked.  The URL to the
   * thumbnail's link destination is passed as a result.
   */
  onClick: (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    path?: string
  ) => void;
};

type ThumbnailShape = {
  uuid: string;
  sourceSmall: string;
  sourceMedium: string;
  sourceLarge: string;
  description: string;
  href: string;
};

type ThumbnailSize = 'SMALL' | 'MEDIUM' | 'LARGE';

/**
 * Maps an array of raw thumbnail data to Thumbnail components.
 * @param thumbnails Array of raw thumbnail data to write to Thumbnail
 * instances.
 * @param size The size at which the thumbnails should render.
 * @param onClick A click handler that a thumbnail can call when clicked.
 */
function mapThumbnails(
  thumbnails: ThumbnailShape[],
  size: ThumbnailSize,
  onClick: GalleryProps['onClick']
): JSX.Element {
  const mapped = thumbnails.map(thumbnail => {
    const { description, uuid, href } = thumbnail;
    const src = computeThumbnailSourceFromSize(size, thumbnail);

    return (
      <Thumbnail
        key={uuid}
        src={src}
        altText={description}
        href={href}
        onClick={e => onClick(e, href)}
      />
    );
  });

  return <React.Fragment>{mapped}</React.Fragment>;
}

function computeThumbnailSourceFromSize(
  size: ThumbnailSize,
  thumbnail: ThumbnailShape
): string {
  switch (size) {
  case 'LARGE':
    return thumbnail.sourceLarge;
  case 'MEDIUM':
    return thumbnail.sourceMedium;
  default:
    return thumbnail.sourceSmall;
  }
}

const GALLERY_MEMO = React.memo<GalleryProps>(Gallery);

export { GALLERY_MEMO as Gallery };
