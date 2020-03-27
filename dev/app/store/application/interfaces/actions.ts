import { Route } from './route';
import { Action } from 'redux';
import { Status } from './status';

/** Updates the overall status of the application. */
export interface UpdateStatus extends Action<'APPLICATION__UPDATE_STATUS'> {
  /** Value of the status update. */
  status: Status;
}

/** Updates the active route. */
export interface SetRoute extends Action<'APPLICATION__SET_ROUTE'> {
  /** The value of the new route. */
  route: Route;
}