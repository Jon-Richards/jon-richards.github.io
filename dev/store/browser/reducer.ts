import { Reducer } from 'redux';
import { BrowserStore } from './interfaces/store';
import { UpdateBreakpoint } from './interfaces/actions';

/**
 * The Redux reducer for the Browser store.  Contains information related to
 * the browser, e.g. calculated values based on the window object.
 * @param state An object representing the current state of the Portfolio store.
 * @param action An action creator for updating the supplied state.
 */
export const BROWSER_REDUCER: Reducer<
  BrowserStore,
  | UpdateBreakpoint
> = (
  state = {
    activeBreakpoint: '0'
  },
  action
) => {
  switch(action.type) {
    case 'BROWSER__UPDATE_BREAKPOINT':
      return {
        ...state,
        activeBreakpoint: action.breakpoint
      };
    default:
      return state;
  }
};