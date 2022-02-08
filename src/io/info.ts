import Ajv, { JSONSchemaType } from 'ajv';

const ajv = new Ajv();

interface Response {
  repos_url: string;
}

const ResponseSchema: JSONSchemaType<Response> = {
  type: 'object',
  properties: {
    repos_url: { type: 'string' }
  },
  required: ['repos_url'],
  additionalProperties: true
}

const validateResponse = ajv.compile<Response>(ResponseSchema);

/* eslint max-lines-per-function: "off" */
export async function getInfo() {
  const response = await fetch('https://api.github.com/users/jon-richards', {
    method: 'GET'
  })
  .then(response => response.json())
  .then(data => {
    handleData(data);
  });
}

/**
 * Validates the response data.
 */
function handleData(data: Response) {
  if (validateResponse(data)) {
    console.log(data);
  } else {
    console.log(validateResponse.errors)
  }
}

