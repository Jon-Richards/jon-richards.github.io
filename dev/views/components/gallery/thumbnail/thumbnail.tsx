/**
 * @fileoverview
 * Contains a thumbnail component for the gallery.
 */

import { React } from '../mediator';
const CSS = require('./thumbnail.scss');

/** Shape of a single thumbnail. */
export interface ThumbnailShape {
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
 *
 */
export const THUMBNAIL = React.memo<ThumbnailShape>(props => {
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
