import { Action } from 'redux';
import { BrowserStore } from './store';

/** 
 * Updates the list of media queries that match the current runtime environment.
 */
export interface UpdateMatchingMediaQueries extends Action<
  'BROWSER__UPDATE_MATCHING_MEDIA_QUERIES'
> {
  /** A list of media queries that match the current runtime environment. */
  matches: BrowserStore['matching_media_queries'];
}

/**
 * Sets the list of media queries that the application can test against the
 * runtime environment.
 */
export interface SetPossibleMediaQueries extends Action<
  'BROWSER__SET_POSSIBLE_MEDIA_QUERIES'
> {
  /** 
   * A list of possible media queries that the application can test against
   * the current environment.
   */
  queries: BrowserStore['possible_media_queries'];
}