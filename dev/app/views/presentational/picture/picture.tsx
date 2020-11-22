/** @jsx jsx */

import { css, jsx } from '@emotion/core';
import { Sources, SourcesProps } from './sources';

/**
 * Renders a Picture that supports multiple sources based on the size of the
 * viewport.
 */
export function Picture(props: PictureProps): JSX.Element {
  const { defaultSource, sources, altText } = props;

  return (
    <picture>
      <Sources sources={sources} />
      <img
        css={css`
          display: block;
          width: 100%;
          height: auto;
        `}
        src={defaultSource}
        alt={altText}
      />
    </picture>
  );
}


export interface PictureProps {
  /**
   * Alternative sources for the image to load when various media queries
   * return true.  Media queries will be evaluated based on the order in which
   * they appear in the array.  In browser, the first query to return true takes
   * precedence.
   */
  sources: SourcesProps['sources'];
  /**
   * The default source for the image.  This is used if none of the source
   * media queries evaluate to true.
   */
  defaultSource: string;
  /** The image's alt text. */
  altText: string;
}
