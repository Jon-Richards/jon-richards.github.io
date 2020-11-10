/**
 * The base URL for the api.  (Dev only)
 * @TODO Implement actual configuration.
 */
export const API_BASE = 'http://localhost:3004';

/**
 * Returns the API endpoint for an overview of the portfolio.
 * @return The API endpoint for an overview of the portfolio.
 */
export function overviewEndpoint (): string {
  return `${API_BASE}/overview`;
}
