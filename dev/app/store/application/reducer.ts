import { Reducer } from 'redux';
import { ApplicationStore } from './interfaces/store';
import { UpdateStatus, SetRoute } from './interfaces/actions';

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
  | SetRoute
> = (
  state = {
    status: 'initializing',
    route: {
      path: '',
      params: {},
      schema: '',
    }
  },
  action
) => {
  switch(action.type) {
    case 'APPLICATION__UPDATE_STATUS':
      return {
        ...state,
        status: action.status
      };
    case 'APPLICATION__SET_ROUTE':
      return {
        ...state,
        route: action.route
      };
    default:
      return state;
  }
};