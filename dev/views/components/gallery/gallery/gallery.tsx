/**
 * @fileoverview
 * 
 * Contains the gallery component.
 */

const CSS = require('./gallery.scss');
import { React, Thumbnail, ThumbnailShape, uuid } from '../mediator';

/** Renders a gallery of portfolio pieces. */
export class Gallery extends React.Component<
    {
        /** Array of thumnail information for portfolio pieces. */
        pieces: ThumbnailShape[];
    },
    never
> {

    /** Maps the thumbnail data to Thumbnail components. */
    private getThumbnails = (): React.ReactFragment => {
        const thumbnails = this.props.pieces.map(thumbnail => {
            return <Thumbnail
                key={`gallery__thumbnail-${uuid()}`}
                text={thumbnail.text}
                src={thumbnail.src}
                href={thumbnail.href}
                onClick={thumbnail.onClick}
            />;
        });

        return <>{ thumbnails }</>;
    }

    /** Renders the gallery to the DOM. */
    render(): JSX.Element {
        return (
            <div className={CSS['root']}>
                {this.getThumbnails()}
            </div>
        );
    }
}