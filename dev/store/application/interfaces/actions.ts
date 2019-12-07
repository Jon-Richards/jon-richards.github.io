import { Action } from 'redux';
import { Status } from './status';

/** Updates the overall status of the application. */
export interface UpdateStatus extends Action<'APPLICATION__UPDATE_STATUS'> {
  /** Value of the status update. */
  status: Status;
}