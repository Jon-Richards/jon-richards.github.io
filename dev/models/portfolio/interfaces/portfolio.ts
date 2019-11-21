import { ProjectModelShape } from './project';
import { ToolModelShape } from './tool';

/** The shape of the Portfolio model. */
export interface PortfolioModelShape {
  /** A complete array of portfolio projects displayed by the application. */
  projects: ProjectModelShape[];
  /** A complete array of the tools used to build projects in the portfolio. */
  tools: ToolModelShape[];
}