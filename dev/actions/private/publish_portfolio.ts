import { PublishPortfolio } from '../../store/portfolio/interfaces/actions';

/** 
 * Publishes a complete collection of portfolio data to the store.
 * @param projects An array of projects to add to the Portfolio store.
 * @param tools An array of tools that were used in each project of the
 * portfolio.
 */
export function publishPortfolio(
  projects: PublishPortfolio['projects'],
  tools: PublishPortfolio['tools']
): PublishPortfolio {
  return {
    type: 'PORTFOLIO__PUBLISH_PORTFOLIO',
    projects,
    tools
  };
}