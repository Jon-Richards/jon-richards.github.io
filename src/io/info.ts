import Ajv, { JSONSchemaType } from 'ajv';

const ajv = new Ajv({ allErrors: true });

export interface Response {
  repos_url: string;
}

const ResponseSchema: JSONSchemaType<Response> = {
  type: 'object',
  properties: {
    repos_url: { type: 'string' },
  },
  required: ['repos_url'],
  additionalProperties: true
}

const validate = ajv.compile<Response>(ResponseSchema);

/**
 * Fetches overall data about the public repositories.
 */
export async function getInfo() {
  return await fetch('https://api.github.com/users/jon-richards', {
    method: 'GET'
  })
  .then(response => response.json())
  .then(json => validateResponse(json));
}

/**
 * Runs validation on a parsed info response payload and returns either a
 * resolved or rejected Promise based on the outcome of the validation.
 *
 * If validation passes, returns a resolved Promise with the JSON payload.
 * Else returns a rejected Promise with an error object describing the
 * validation errors.
 *
 * @param json The JSON to validate.
 */
function validateResponse(json: Response): Promise<Response> {
  const valid = validate(json);
  if (valid === true) {
    return Promise.resolve(json);
  }
  console.error(validate.errors);
  return Promise.reject('Response data was invalid.');
}

