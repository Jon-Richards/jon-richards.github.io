/**
 * @fileoverview
 * 
 * Contains the gallery component.
 */

const CSS = require('./gallery.scss');
import { 
    React, 
    Piece,
    PieceShape
} from '../mediator';

/** Renders a gallery of portfolio pieces. */
export class Gallery extends React.Component<
    {
        /** Array of thumnail information for portfolio pieces. */
        pieces: PieceShape[];
    },
    never
> {
    /** Maps piece to Piece components. */
    private mapPieces = (): React.ReactFragment[] => {
        const pieces: React.ReactFragment[] = this.props.pieces.map( piece => {
            return (
                <Piece
                    key={piece.uuid}
                    uuid={piece.uuid}
                    title={piece.title}
                    description={piece.description}
                />
            );
        });
        return pieces;
    }

    /** Renders the gallery to the DOM. */
    render(): JSX.Element {
        return (
            <div className={CSS['root']}>
                {this.mapPieces()}
            </div>
        );
    }
}