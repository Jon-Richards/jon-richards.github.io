import { Route } from './route';
import { Status } from './status';

/** The shape of the Application model. */
export interface ApplicationStore {
  /** The overall state of the application. */
  status: Status;
  /** The currently active route. */
  route: Route;
}