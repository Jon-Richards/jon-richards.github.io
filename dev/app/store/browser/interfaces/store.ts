import { MEDIA_QUERIES } from 'Config/media_queries';

/**
 * Contains information about the environment in which the application is
 * running.
 */
export interface BrowserStore {
  /** List of all media queries that are tracked by the application. */
  possible_media_queries: typeof MEDIA_QUERIES;
  /** Media queries that are known to match the current environment. */
  matching_media_queries: typeof MEDIA_QUERIES;
}