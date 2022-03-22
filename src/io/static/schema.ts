import { JSONSchemaType } from 'ajv';
import { Response } from './types';

/**
 * Defines the valid JSON schema for the payload received by the response from
 * the Static endpoint.
 */
export const ResponseSchema: JSONSchemaType<Response> = {
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

