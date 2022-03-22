import { getInfo, Response } from './info';

/**
 * Mocks the browser's fetch api to return a JSON response equal to the
 * value of responseStub.  To modify the response, change the value of
 * responseStub.
 */
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(responseStub)
  }),
) as jest.Mock;

/**
 * Variable for arranging the payload that will be returned when the mock
 * fetch request runs.
 */
let responseStub = {};

/**
 * Builds a complete responseStub, replacing corresponding properties with those
 * provided data param.  By default, all properties will hold a valid value.
 */
function buildResponseStub(data?: Partial<Response>) {
  const validStub: Response = {
    repos_url: 'foo'
  };
  responseStub = { ...validStub, ...data };
}

/* eslint max-lines-per-function: "off" */
describe('The Info request', () => {
  beforeEach(() => {
    buildResponseStub();
  });

  it('Gets general info about the developer.', async () => {
    let result;
    await getInfo().then(data => result = data);
    expect(result).toEqual(responseStub);
  });

  it('Returns a rejected promise when the response is invalid.', async () => {
    let result;
    buildResponseStub({ repos_url: undefined });
    await getInfo().catch(err => result = err);
    expect(result).toBeTruthy();
  });
});

