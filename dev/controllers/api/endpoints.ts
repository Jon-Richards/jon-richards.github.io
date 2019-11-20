const API_BASE = 'http://localhost:3004';

/**
 * Returns the API endpoint for an overview of the portfolio.
 * @return The API endpoint for an overview of the portfolio.
 */
export function overviewEndpoint(): string {
  return `${API_BASE}/overview`;
}

/**
 * Returns the API endpoint for a list of tools used for projects.
 * @return The API endpoint for tools used in porjects.
 */
export function toolsEndpoint(): string {
  return `${API_BASE}/tools`;
}

/**
 * Returns the API endpoint for a list of projects.
 * @return The API endpoint for projects.
 */
export function projectsEndpoint(): string {
  return `${API_BASE}/projects`;
}