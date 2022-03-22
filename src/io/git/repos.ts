import Ajv, { JSONSchemaType } from 'ajv';

const ajv = new Ajv({ allErrors: true });

export interface Response {
  name: string;
  id: number;
  languages_url: string;
  updated_at: string;
  description: string | null;
  homepage: string | null;
}

const ResponseSchema: JSONSchemaType<Array<Response>> = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      name: { type: 'string' },
      id: { type: 'number' },
      languages_url: { type: 'string' },
      updated_at: { type: 'string' },
      description: { type: 'string', nullable: true },
      homepage: { type: 'string', nullable: true }
    },
    required: [
      'name', 'id', 'languages_url', 'updated_at', 'description', 'homepage'],
    additionalProperties: true
  }
}

const validate = ajv.compile<Response>(ResponseSchema);

/**
 * Gets a list of repositories under the provided Github user.
 */
export async function getRepos(user: string) {
  return await fetch(`https://api.github.com/users/${user}/repos`, {
    method: 'GET'
  })
  .then(response => response.json())
  .then(json => validateResponse(json))
}

/**
 * Checks if the provided data is an array.  If so, returns the provided data.
 * Else, returns a rejected Promise.
 */
function validateResponse(json: Response[]): Promise<Response[]>  {
  const valid = validate(json);
  if (valid) {
    return Promise.resolve(json);
  }
  console.error(validate.errors, json);
  return Promise.reject('Response data was invalid');
}

