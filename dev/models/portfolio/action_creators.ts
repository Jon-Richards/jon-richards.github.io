/**
 * @fileoverview
 * Conatains action creators used by the Portfolio reducucer.
 */

import { PortfolioState } from './state';
import { PieceManager } from './piece_manager';
import { Action } from 'redux';

/**
 * Gets all portfolio pieces.
 * @return A Redux action signaling to the app that a request for portfolio
 * pieces is being made.
 */
export function getPieces(): Action {
  return {
    type: 'PORTFOLIO__GET_PIECES'
  };
}

/**
 * Publishes an array of portfolio pieces to the application store.
 * @return A Redux action that updates the application store with an array of
 * portfolio pieces.
 */
export function publishPieces(
  pieces: PortfolioState['pieces']
): Action<'PORTFOLIO__PUBLISH_PIECES'> & {
  /**
   * The array of resulting portfolio pieces that will be published to the
   * store.
   */
  pieces: PortfolioState['pieces'];
} {
  const validatedPieces = new PieceManager(pieces);
  return {
    type: 'PORTFOLIO__PUBLISH_PIECES',
    pieces: validatedPieces.pieces,
  };
}