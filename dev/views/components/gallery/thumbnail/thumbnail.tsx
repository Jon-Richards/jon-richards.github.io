/**
 * @fileoverview
 * Contains a thumbnail component for the gallery.
 */

import { React } from '../mediator';
const CSS = require('./thumbnail.scss');

/** Shape of a single thumbnail. */
export interface ThumbnailShape {
    /** The display text for this thumbnail. */
    text: string;
    /** This thumbnail's source image. */
    src: string;
    /** The destination for this thumbnail's URL. */
    href: string;
    /** Method that fires when this thumbnail is clicked. */
    onClick(href: ThumbnailShape['href']): void;
}

export const THUMBNAIL = React.memo<ThumbnailShape>( (props) => 
    <figure className={CSS['root']} onClick={() => props.onClick(props.href)}>
        <img className={CSS['image']} src={props.src} alt={props.text} />
        <figcaption className={CSS['caption']}>
            <a className={CSS['link']} href={props.href}>{props.text}</a>
        </figcaption>
    </figure>
);