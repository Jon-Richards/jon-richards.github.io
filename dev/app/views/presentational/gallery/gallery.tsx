/** @jsx jsx */

import * as React from 'react';
import { css, jsx} from '@emotion/core';
import { Thumbnail, ThumbnailProps } from './thumbnail';
import { STYLES } from './styles';

type ThumbnailShape = {
  /** A unique identifier for this thumbnail. */
  uuid: string;
  /** The image's source url for small screens. (phones) */
  sourceSmall: string;
  /** The image's source url for medium screens. (tablets, low-end laptops) */
  sourceMedium: string;
  /** The image's source url for large screens. (freestanding monitors) */
  sourceLarge: string;
  /** A very short description of the project that the thumbnail represents. */
  description: ThumbnailProps['altText'];
  /** The destination for the thumbnail's link. */
  href: ThumbnailProps['href'];
};

/** For computing the size of the image that will be loaded by a thumbnail. */
type ThumbnailSize = 'SMALL' | 'MEDIUM' | 'LARGE';

/** Props used by the Gallery component. */
export interface GalleryProps {
  /**
   * Information about the thumbnails that should be displayed in the gallery.
   */
  thumbnails: ThumbnailShape[];
  /** The size at which thumbnails should render. */
  thumbnailSize: ThumbnailSize;
  /** Click handler that passes the URI of the thumbnail that was clicked. */
  onClick: (path: string) => {};
}

function computeThumbnailSource (
  size: ThumbnailSize,
  thumbnail: ThumbnailShape
): string {
  switch(size) {
    case 'LARGE':
      return thumbnail.sourceLarge;
    case 'MEDIUM':
      return thumbnail.sourceMedium;
    default:
      return thumbnail.sourceSmall;
  }
}

function mapThumbnails(
  thumbnails: ThumbnailShape[],
  size: ThumbnailSize,
  onClick: GalleryProps['onClick']
): JSX.Element {
  const mapped = thumbnails.map(thumbnail => {
    const {
      description,
      uuid,
      href
    } = thumbnail;
    
    const src = computeThumbnailSource(size, thumbnail);

    return(
      <Thumbnail
        key={uuid}
        src={src}
        altText={description}
        href={href}
        onClick={() => onClick(href)}
      />
    );
  });

  return <React.Fragment>{mapped}</React.Fragment>;
}

function Gallery (props: GalleryProps): JSX.Element {
  const { thumbnails, thumbnailSize, onClick } = props;
  const mappedThumbs = mapThumbnails(thumbnails, thumbnailSize, onClick);

  return (<div css={css(STYLES.root)}>{mappedThumbs}{mappedThumbs}</div>);
}

const GALLERY_MEMO = React.memo<GalleryProps>(Gallery);

export { GALLERY_MEMO as Gallery };