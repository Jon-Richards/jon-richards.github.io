import Ajv, { JSONSchemaType } from 'ajv';

const ajv = new Ajv({ allErrors: true });

export interface Response {
  info: {
    name: string;
    title: string;
  },
  projects: Array<{
    name: string;
    url: string;
    description: string;
  }>;
}

const ResponseSchema: JSONSchemaType<Response> = {
  type: 'object',
  properties: {
    info: {
      type: 'object',
      properties: {
        name: { type: 'string' },
        title: { type: 'string' },
      },
      required: ['name', 'title'],
      additionalProperties: false,
    },
    projects: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          name: { type: 'string' },
          url: { type: 'string' },
          description: { type: 'string' },
        },
        required: ['name', 'url', 'description'],
        additionalProperties: false,
      },
    },
  },
  required: ['info', 'projects'],
  additionalProperties: false
}

const validate = ajv.compile<Response>(ResponseSchema);

/**
 * Gets application info from a static source.
 */
export async function getStatic(): Promise<Response> {
  return await fetch('/assets/static.json', {
    method: 'GET'
  })
  .then(response => response.json())
  .then(json => validateRepsonse(json));
}

/**
 * Validates the json payload recieved from the endpoint.
 */
function validateRepsonse(json: Response): Promise<Response> {
  const valid = validate(json);
  if (valid === true) {
    return Promise.resolve(json);
  }
  console.error(validate.errors);
  return Promise.reject('Response data is invalid.');
}

