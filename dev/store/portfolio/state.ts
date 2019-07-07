/**
 * @fileoverview
 * Contains the interface for the Portfolio state.
 */

export interface State {
    /** The ID of the active portfolio piece. */
    activePieceId: number;
    /** Some message */
    message: string;
}