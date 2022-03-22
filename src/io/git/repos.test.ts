import { getRepos, Response } from './repos';

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
 * Variable for arranging the response payload that will be returned when the
 * mock fetch request runs.
 */
let responseStub: Array<Response> = [];

/**
 * Stubs a single Repo in the response with valid values.  Data passed into
 * this method will be merged with the stub.
 */
function buildRepoStub(data?: Partial<Response>): Response {
  const validStub: Response = {
    name: 'foo',
    id: 1,
    languages_url: 'bar',
    updated_at: '2022-01-02',
    description: null,
    homepage: 'www.google.com'
  };
  return { ...validStub, ...data };
}

/* eslint max-lines-per-function: "off" */
describe('The Repos request', () => {
  beforeEach(() => {
    responseStub = [
      buildRepoStub({ id: 1, name: 'foo' }),
      buildRepoStub({ id: 2, name: 'bar' }),
      buildRepoStub({ id: 3, name: 'baz' })
    ];
  });

  it('Gets a list of repositories under the account.', async () => {
    let result;
    await getRepos('jon-richards').then(data => { result = data });
    expect(result).toEqual(responseStub);
  });

  it('Returns a rejected promise when the response is invalid.', async () => {
    let result;
    responseStub = [
      buildRepoStub(),
      buildRepoStub({ id: 'invalid-id' as unknown as number })
    ];
    await getRepos('jon-richards').catch(err => result = err);
    expect(result).toBeTruthy();
  });
});

