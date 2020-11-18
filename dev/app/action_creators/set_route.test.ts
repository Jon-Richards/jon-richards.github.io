import { setRoute } from './set_route';
import { SetRoute } from '../store/application';
import configureStore from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';

const defaultState = {
  currentRoute: {
    path: '',
    index: 0,
    params: {},
  },
};

type DefaultState = typeof defaultState;

const middlewres = [thunk];
const mockStore = configureStore<
  DefaultState,
  ThunkDispatch<DefaultState, undefined, SetRoute>
>(middlewres);

describe('The setRoute action creator.', () => {
  it('Matches a given path to its corresponding route.', () => {
    const store = mockStore(defaultState);

    store.dispatch(setRoute<DefaultState>('/'));
    store.dispatch(setRoute<DefaultState>('/error/500'));

    expect(store.getActions()).toEqual([
      {
        type: 'APPLICATION__SET_ROUTE',
        route: {
          path: '/',
          params: {},
          schema: '/',
        },
      },
      {
        type: 'APPLICATION__SET_ROUTE',
        route: {
          path: '/error/500',
          params: {
            error_code: '500',
          },
          schema: '/error/:error_code',
        },
      },
    ]);
  });

  it('Replaces invalid routes with a route to the 404 error page.', () => {
    const store = mockStore(defaultState);

    store.dispatch(setRoute<DefaultState>('/ice-cream/banana'));
    store.dispatch(setRoute<DefaultState>('/resume'));

    expect(store.getActions()).toEqual([
      {
        type: 'APPLICATION__SET_ROUTE',
        route: {
          path: '/error/404',
          params: {
            error_code: '404',
          },
          schema: '/error/:error_code',
        },
      },
      {
        type: 'APPLICATION__SET_ROUTE',
        route: {
          path: '/resume',
          params: {},
          schema: '/resume',
        },
      },
    ]);
  });
});
