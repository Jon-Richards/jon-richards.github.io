/**
 * @fileoverview
 * Contains a class for resolving API endpoints.
 */

const API_BASE = 'http://localhost:3004';

/**
 * Returns the API endpoint for an outline of all portfolio projects. 
 * @return The API endpoint for an outline of all portfolio projects.
 */
export function projects(): string {
    return `${API_BASE}/projects`;
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
    projects,
    tools
};