import { MatchResult } from 'path-to-regexp';

/** The currently active route. */
export type Route = Pick<MatchResult, 'path' | 'params'> & {
  /** The schema that defines how the route's path is resolved. */ 
  schema: string;
};