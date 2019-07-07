/**
 * @fileoverview
 * Utility class for making requests to the API.
 */

import { Response as APIResponse} from './mediator';

/** 
 * Makes fetch requests to the API and returns responses in a standardized format.
 * **NOTE**  Does not validate the payload or response bodies, this should be handled
 * externally.
 */
export class Requestor<ResponseBody = undefined, RequestBody = undefined> {
    /** 
     * The base configuration for the fetch request.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
     */
    private static readonly BASE_CONFIG: RequestInit = {
        mode: 'cors',
        cache: 'default',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json' },
        redirect: 'error',
        referrer: 'no-referrer'
    };
    /** The type of request to make. */
    private readonly METHOD: 'GET';
    /** The request body. */
    private readonly BODY: RequestBody | undefined;
    /** The url to use for the request. */
    private readonly URL: string;

    constructor (
        /** The type of request to make. */
        method: Requestor<ResponseBody, RequestBody>['METHOD'],
        /** The destination url at which to make the call. */
        url: string,
        /** The JSON encoded body to send in the request. */
        body?: RequestBody,
    ) {
        this.URL = url;
        this.METHOD = method;
        this.BODY = body;
    }

    /** 
     * Makes the fetch call and converts the response into an instance of APIResponse.  Returns
     * the APIResponse instance as the result of a new Promise.
     * @return A Promise with an APIResponse instance as the result.
     * @TODO Handle promise errors more gracefully.
     */
    fetch(): Promise<void | APIResponse<ResponseBody, RequestBody>> {
        return fetch(
            this.URL,
            {
                ...Requestor.BASE_CONFIG,
                method: this.METHOD,
                body: JSON.stringify(this.BODY)
            }
        )
        .then(response => {
            if (response.ok) return this.buildAPIResponse(response);
            else throw new Error(response.statusText);
        })
        .catch((error: Error) => {
            console.error(error);
        });
    }

    /** 
     * Builds out an instance of APIResponse and returns it in a promise.
     * @param response The Promise response from which to build the APIResponse.
     * @return A promise containing the API response as the result.
     */
    private buildAPIResponse(response: Response): Promise<APIResponse<ResponseBody, RequestBody>> {
        return response.json()
        .then(data => data) // data is of type "any" because it comes from the outside world.
        .then(data => new APIResponse<ResponseBody, RequestBody>(
            response.status,
            data as ResponseBody,
            this.BODY
        ));
    }
}