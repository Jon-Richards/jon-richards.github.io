/** @jsx jsx */

import * as React from 'react';
import { css, jsx } from '@emotion/core';
import { STYLES } from './styles';
import { Panel } from 'Views/presentational/panel';
import { PictureSources, PictureSourcesProps } from './picture_sources';

/** Shape of a single thumbnail. */
export type ThumbnailProps = {
  /** An array of sources and the min-width at which they should be loaded. */
  sources: PictureSource[];
  /** The fallback source for browsers that don't support the picture tag. */
  fallbackSource: string;
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

type PictureSource = PictureSourcesProps['sources'][0];

/** A single thumbnail. */
export function Thumbnail(props: ThumbnailProps): JSX.Element {
  const { sources, fallbackSource, altText, href, onClick } = props;

  return (
    <a
      css={css(STYLES.root)}
      href={href}
      onClick={e => {
        onClick(e);
      }}
      data-testid="gallery__thumb"
    >
      <Panel>
        <figure aria-label="thumbnail" css={css(STYLES.figure)}>
          <picture css={css(STYLES.picture)}>
            <PictureSources sources={sources} />
            <img
              css={css(STYLES.image)}
              src={fallbackSource}
              alt={altText}
              data-testid="gallery__thumb__img"
            />
          </picture>
          <figcaption css={css(STYLES.caption)}>{altText}</figcaption>
        </figure>
      </Panel>
    </a>
  );
}
