/**
 * @fileoverview
 * Contains the interface for the Portfolio state.
 */

export interface State {
  /** The ID of the active portfolio project. */
  activeProjectId: number;
  /** Some message */
  message: string;
}
