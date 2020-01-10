import { Reducer } from 'redux';
import { BrowserStore } from './interfaces/store';
import { UpdateMatchingMediaQueries } from './interfaces/actions';

/**
 * The Redux reducer for the Browser store.  Contains information related to
 * the browser, e.g. calculated values based on the window object.
 * @param state An object representing the current state of the Portfolio store.
 * @param action An action creator for updating the supplied state.
 */
export const BROWSER_REDUCER: Reducer<
  BrowserStore,
  | UpdateMatchingMediaQueries
> = (
  state = {
    possible_media_queries: [
      {id: '375', query: '(min-width: 375px)'},
      {id: '480', query: '(min-width: 480px)'},
      {id: '720', query: '(min-width: 720px)'},
      {id: '1080', query: '(min-width: 1080px)'},
      {id: '1440', query: '(min-width: 1440px)'}
    ],
    matching_media_queries: []
  },
  action
) => {
  switch(action.type) {
    case 'BROWSER__UPDATE_MATCHING_MEDIA_QUERIES':
      return {
        ...state,
        matching_media_queries: action.matches
      };
    default:
      return state;
  }
};