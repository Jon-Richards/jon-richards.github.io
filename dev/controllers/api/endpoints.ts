/**
 * @fileoverview
 * Contains a class for resolving API endpoints.
 */

const API_BASE = 'http://localhost:3004';

/**
 * Returns the API endpoint for an overview of the portfolio.
 * @return The API endpoint for an overview of the portfolio.
 */
export function overview(): string {
    return `${API_BASE}/overview`;
}

/**
 * Returns the API endpoint for a list of tools used for projects. 
 * @return The API endpoint for a list of tools used for projects.
 */
export function tools(): string {
    return `${API_BASE}/tools`;
}

/** Mapping of all endpoint methods. */
export const ENDPOINTS = {
    overview,
    tools
};