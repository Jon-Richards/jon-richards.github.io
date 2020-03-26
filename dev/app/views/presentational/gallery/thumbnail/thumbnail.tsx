import * as React from 'react';
const CSS = require('./thumbnail.scss');

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
      className={CSS['root']}
      href={href}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      <figure
        role="button"
        aria-label="thumbnail"
        className={`${CSS['root']}`}
      >
        <img className={CSS['image']} src={src} alt={altText} />
      </figure>
    </a>
  );
}

const THUMBNAIL_MEMO = React.memo<ThumbnailProps>(Thumbnail);

export { THUMBNAIL_MEMO as Thumbnail };