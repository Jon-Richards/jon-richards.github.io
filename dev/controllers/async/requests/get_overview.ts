import { 
  OverviewValidator,
  OverviewResponseData
} from '../node_validators/overview';
import { setRequestOptions } from '../request_configs';
import { overviewEndpoint } from '../endpoints';

/** 
 * Makes a GET request to the Overview endpoint, validates and returns a promise
 * with the resulting NodeValidator.
 */
export function getOverview(): Promise<OverviewValidator> {
  return fetch(overviewEndpoint(), setRequestOptions('GET'))
  .then(resp => resp.json())
  .then(resp => {
    const body = resp as unknown as OverviewResponseData;
    return new OverviewValidator(body);
  }).catch(error => {
    return Promise.reject(error);
  });
}