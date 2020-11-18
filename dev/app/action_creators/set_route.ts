import { ThunkAction } from 'redux-thunk';
import { Store } from 'Store/index';
import { SetRoute } from 'Store/application';
import { ROUTES } from 'Config/routes';
import { match } from 'path-to-regexp';

type RouteMatch = Store['application']['route'] | false;

/**
 * Matches a provided path to one of the routes tracked by this Router
 * instance.
 *
 * @param path The path for which to find a matching route.
 * @return Meta data related to the matching route and any params that were
 * passed to it.  If no match is found, returns false.
 */
const matchRoute = (path: string): RouteMatch => {
  let result: RouteMatch = false;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  for (const [key, value] of Object.entries(ROUTES)) {
    const hasMatch = match(value, { decode: decodeURIComponent })(path);
    if (hasMatch) {
      result = {
        path: hasMatch.path,
        params: hasMatch.params,
        schema: value,
      };
      break;
    }
  }

  return result;
};

/**
 * Sets a new active route in the Application store.  If the provided path does
 * not match any of the pre-configured routes, it will be replaced with the
 * route corresponding to a 404 error.
 *
 * @param path The path to match against a route.
 * @return Dispatches an action to update the active route in the Application
 * store.
 */
export function setRoute<S = Store>(
  path: string
): ThunkAction<SetRoute, S, undefined, SetRoute> {
  return dispatch => {
    let result: RouteMatch = false;

    if (path === '') path = '/';

    for (const route in ROUTES) {
      if (route in ROUTES) {
        const hasMatch = matchRoute(path);
        if (hasMatch) {
          result = hasMatch;
          break;
        }
      }
    }

    if (result === false) result = matchRoute('/error/404');

    if (result !== false) {
      history.pushState(result.path, '', result.path);
      return dispatch({
        type: 'APPLICATION__SET_ROUTE',
        route: result,
      });
    }

    throw Error('Route could not be resolved.');
  };
}
