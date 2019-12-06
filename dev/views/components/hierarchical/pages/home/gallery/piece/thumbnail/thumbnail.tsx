import * as React from 'react';
const CSS = require('./thumbnail.scss');

/** Shape of a single thumbnail. */
export interface ThumbnailProps {
  /** This thumbnail's source image. */
  src: string;
  /** If the thumbnail should load its source. */
  shouldLoad: boolean;
  /** The thumbnail's width and height. */
  sizeModifier:
    | 'phone-vertical'
    | 'phone-horizontal'
    | 'tablet-vertical'
    | 'tablet-horizontal'
    | 'desktop'
    | 'banner';
  /** Alt text for the thumbnail's link. */
  altText: string;
  /** Method that fires when this thumbnail is clicked. */
  onClick?(): void;
}

/**
 * A single thumneail
 */
export const THUMBNAIL = React.memo<ThumbnailProps>(props => {
  const { src, shouldLoad, sizeModifier, altText, onClick = () => {} } = props;

  return (
    <figure
      role="button"
      aria-label="thumbnail"
      className={`${CSS['root']} ${CSS['root']}--${sizeModifier}`}
      onClick={() => onClick}
    >
      <img className={CSS['image']} src={src} alt={altText} />
    </figure>
  );
});
