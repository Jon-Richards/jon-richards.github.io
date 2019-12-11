import { Reducer } from 'redux';
import { ApplicationStore } from './interfaces/store';
import { UpdateStatus } from './interfaces/actions';

/**
 * The Application reducer for the Application store.  Contains information
 * related to the overall application, e.g. initialization status and flash
 * messages.
 * @param state An object representing the current state of the Application
 * store.
 * @param action An action creator for updating the supplied state.
 */
export const APPLICATION_REDUCER: Reducer<
  ApplicationStore,
  | UpdateStatus
> = (
  state = {
    status: 'initializing'
  },
  action
) => {
  switch(action.type) {
    case 'APPLICATION__UPDATE_STATUS':
      return {
        ...state,
        status: action.status
      };
    default:
      return state;
  }
};