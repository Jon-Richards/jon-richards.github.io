/**
 * @fileoverview
 * Contains the interface for the Portfolio state.
 */

import { ProjectModelShape } from './interfaces/project';

/**
 * The Portfolio section of the redux store.  Provides valudation and default
 * values.
 */
export class PortfolioState {
  /** Array of projects displayed in the portfolio. */
  readonly projects: ProjectModelShape[];

  constructor(
    /** Array of projects displayed in the portfolio. */
    projects: ProjectModelShape[]
  ) {
    this.projects = projects;
  }
}
