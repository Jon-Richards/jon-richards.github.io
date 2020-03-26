import { MatchResult } from 'path-to-regexp';
import { Status } from './status';

/** The shape of the Application model. */
export interface ApplicationStore {
  /** The overall state of the application. */
  status: Status;
  /** The currently active route. */
  currentRoute: MatchResult;
}