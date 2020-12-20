/** @jsx jsx */

import { css, jsx } from '@emotion/core';
import { Thumbnails, ThumbnailsProps } from './thumbnails';
import { STYLES } from './styles';

/**
 * Renders a gallery section with thumbnails that, when clicked, lead to a
 * dedicated page about the piece the thumbnail depicts.
 * @param props Required information for rendering the Gallery.
 */
export function Gallery(props: GalleryProps): JSX.Element {
  const { thumbnails, thumbnailClickHandler } = props;

  return (
    <section css={css(STYLES.root)}>
      <Thumbnails
        data={thumbnails}
        clickHandler={thumbnailClickHandler}
      />
    </section>
  );
}

export type GalleryProps = {
  thumbnails: ThumbnailsProps['data'];
  /**
   * A method that fires whenever a thumbnail is clicked.  The URL to the
   * thumbnail's link destination is passed as a result.
   */
  thumbnailClickHandler: ThumbnailsProps['clickHandler'];
};
