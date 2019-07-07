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

/** Mapping of all endpoint methods. */
export const ENDPOINTS = {
    projects
};