/** @jsx jsx */

import * as React from 'react';
import { jsx } from '@emotion/core';
import { STYLES } from './styles';
import { Panel } from 'Views/presentational/panel';
import { Picture, PictureProps } from 'Views/presentational/picture';

/** A single thumbnail. */
export function Thumbnail(props: ThumbnailProps): JSX.Element {
  const { sources, fallbackSource, title, description, href, onClick } = props;
  const [ hasFocus, setHasFocus ] = React.useState(false);

  return (
    <a
      css={[STYLES.link, hasFocus && STYLES.linkWithFocus ]}
      href={href}
      onClick={e => {
        onClick(e);
      }}
      onFocus={() => setHasFocus(true)}
      onMouseEnter={() => setHasFocus(true)}
      onBlur={() => setHasFocus(false)}
      onMouseLeave={() => setHasFocus(false)}
      data-testid="gallery__thumb"
    >
      <Panel>
        <div css={STYLES.content}>
          <div css={[STYLES.front, hasFocus && STYLES.frontWithFocus]}>
            <Picture
              sources={sources}
              defaultSource={fallbackSource}
              altText={`${title} - ${description}`}
            />
          </div>
          <div
            css={[STYLES.back, hasFocus && STYLES.backWithFocus]}>
            <h3 css={STYLES.title}>
              {title}
            </h3>
            <p css={STYLES.description}>
              {description}
            </p>
          </div>
        </div>
      </Panel>
    </a>
  );
}

/** Shape of a single thumbnail. */
export type ThumbnailProps = {
  /** An array of sources and the min-width at which they should be loaded. */
  sources: PictureProps['sources'];
  /** The fallback source for browsers that don't support the picture tag. */
  fallbackSource: string;
  /** The piece's title. */
  title: string;
  /** A brief description of the piece the thumbnail describes. */
  description: string;
  /** The destination for the thumbnail's link. */
  href: string;
  /** Method that fires when this thumbnail is clicked. */
  onClick(
    /** The HTML element's click event. */
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ): void;
};
