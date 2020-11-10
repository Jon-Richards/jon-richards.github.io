/** @jsx jsx */

import * as React from 'react';
import { css, jsx } from '@emotion/core';
import { STYLES } from './styles';
import { Panel } from 'Views/presentational/panel';

/** Shape of a single thumbnail. */
export interface ThumbnailProps {
  /** This thumbnail's source image. */
  src: string;
  /** Alt text for the thumbnail's link. */
  altText: string;
  /** The destination for the thumbnail's link. */
  href: string;
  /** Method that fires when this thumbnail is clicked. */
  onClick(
    /** The HTML element's click event. */
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ): void;
}

/** A single thumbnail. */
function Thumbnail (props: ThumbnailProps): JSX.Element {
  const { src, altText, href, onClick } = props;

  return (
    <a
      css={css(STYLES.root)}
      href={href}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      <Panel>
        <figure
          aria-label="thumbnail"
          css={css(STYLES.figure)}
        >
          <img css={css(STYLES.image)} src={src} alt={altText} />
          <figcaption css={css(STYLES.caption)}>{altText}</figcaption>
        </figure>
      </Panel>
    </a>
  );
}

const THUMBNAIL_MEMO = React.memo<ThumbnailProps>(Thumbnail);

export { THUMBNAIL_MEMO as Thumbnail };
