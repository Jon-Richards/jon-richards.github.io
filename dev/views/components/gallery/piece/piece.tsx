/**
 * @fileoverview
 * Contains a component that renders a single piece for the gallery.
 */

import { React } from '../mediator';
const CSS = require('./piece.scss');

export interface PieceShape {
  /** UUID for the piece. */
  uuid: string;
  /** The piece's title. */
  title: string;
  /** The piece's description. */
  description: React.ReactFragment;
}

/** Renders a single piece for the gallery. */
export const PIECE = React.memo<PieceShape>(props => {
  return (
    <div className={CSS['root']}>
      <h3>{props.title}</h3>
      <div>{props.description}</div>
    </div>
  );
});
