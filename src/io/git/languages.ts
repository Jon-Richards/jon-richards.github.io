import Ajv, { JSONSchemaType } from 'ajv';

const ajv = new Ajv({ allErrors: true });

export type Response = Record<string, number>;

const ResponseSchema: JSONSchemaType<Response> = {
  type: 'object',
  patternProperties: {
    "^.*$": {
      type: 'number',
    }
  },
  required: []
}

const validate = ajv.compile<Response>(ResponseSchema);

/**
 * Returns the list of languages for a given repo.
 */
export async function getLanguages(languages_url: string) {
  return fetch(languages_url, {
    method: 'GET'
  })
  .then(response => response.json())
  .then(json => validateResponse(json));
}

/**
 * Checks if the provided data is an array.  If so, returns the provided data.
 * Else, returns a rejected Promise.
 */
function validateResponse(json: Response): Promise<Response> {
  const valid = validate(json);
  if (valid) {
    return Promise.resolve(json);
  }
  console.error(validate.errors, json);
  return Promise.reject('Response data was invalid');
}


