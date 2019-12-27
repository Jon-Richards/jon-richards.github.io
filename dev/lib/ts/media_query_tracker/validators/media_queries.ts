import { MQTMediaQuery } from '../interfaces';

function validateQueries(queries: MQTMediaQuery[]): void {
  if (!Array.isArray(queries)) {
    throw new TypeError('Queries must be an array.');
  }
  if (queries.length === 0) {
    throw new RangeError('At least one MQTMediaQuery is required.');
  }
}

function validateId (id: MQTMediaQuery['id']): void {
  if (typeof id !== 'string' && typeof id !== 'number') {
    throw new TypeError(
      'Media query id property must be a string or number.'
    );
  }
  if (typeof id === 'string' && id.length === 0) {
    throw new TypeError(
      'Media query id property cannot be an empty string.'
    );
  }
}

function validateQuery (query: MQTMediaQuery['query']) {
  if (typeof query !== 'string') {
    throw new TypeError('Media query "query" property must be a string.');
  }
  if (query.length === 0) {
    throw new TypeError('Media query should not be an empty string.');
  }
}

function validateUniqueness (
  validated: MQTMediaQuery[],
  query: MQTMediaQuery
): void {
  const duplicateQueries = validated.filter(existing => {
    return query.query === existing.query;
  });
  if (duplicateQueries.length > 0) {
    throw new TypeError(
      `MediaQueryTracker recieved two queries with the same query string:` +
      ` ${query.query}.`
    );
  }

  const duplicateIds = validated.filter(existing => {
    return query.id === existing.id;
  });
  if (duplicateIds.length > 0) {
    throw new TypeError(
      `MediaQueryTracker recieved two queries with the same id: ` +
      `${query.id}.`
    );
  }
}

/** 
 * Validates an array of media queries and responds accordingly if a validator
 * fails.
 * @param queries An array of MQTMediaQueries to validate.
 * @return True if all validations pass, false if not.
 */
export function validateMediaQueries(queries: MQTMediaQuery[]): boolean {
  let isValid = true;
  try {
    validateQueries(queries);
    
    const validated: MQTMediaQuery[] = [];
    queries.forEach(query => {
      validateUniqueness(validated, query);
      validateQuery(query.query);
      validateId(query.id);
      validated.push(query);
    });
  }
  catch (error) {
    console.error(error);
    isValid = false;
  }
  finally {
    return isValid;
  }
}