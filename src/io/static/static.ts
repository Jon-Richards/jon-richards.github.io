import Ajv from 'ajv';
import { Response } from './types';
import { ResponseSchema } from './schema';

const ajv = new Ajv({ allErrors: true });
const validate = ajv.compile<Response>(ResponseSchema);

/**
 * Gets application info from a static source.
 */
export async function getStatic(): Promise<Response> {
  return await fetch('/assets/static.json', {
    method: 'GET'
  })
  .then(response => response.json())
  .then(json => validateResponse(json));
}

/**
 * Validates the json payload recieved from the endpoint.
 */
function validateResponse(json: Response): Promise<Response> {
  const valid = validate(json);
  if (valid === true) {
    return Promise.resolve(json);
  }
  console.error(validate.errors);
  return Promise.reject('Response data is invalid.');
}

