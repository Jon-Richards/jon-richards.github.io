/**
 * @fileoverview
 * Contains an action creator that sets up the application.
 */

import { ThunkAction } from 'redux-thunk';
import { GetPortfolio, PublishPortfolio } from '../store/portfolio';
import { RootStore } from '../store';
import { setRequestOptions } from '../async/request_configs';
import { OverviewValidator, OverviewResponseData } from '../async/node_validators/overview';
import { overviewEndpoint } from '../async/endpoints';

// /** Coordinates bootstrapping the application. */
// export function bootstrap(): ThunkAction<
  
// > {

// };