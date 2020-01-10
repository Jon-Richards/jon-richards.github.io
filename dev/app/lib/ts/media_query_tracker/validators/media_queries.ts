import { MQTMediaQuery } from '../interfaces';

function validateQueries(queries: MQTMediaQuery[]): void {
  if (!Array.isArray(queries)) {
    throw new TypeError('Queries must be an array.');
  }
  if (queries.length === 0) {
    throw new RangeError('At least one MQTMediaQuery is required.');
  }
}

function validateIdProp (id: MQTMediaQuery['id']): void {
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

function validateQueryProp (query: MQTMediaQuery['query']) {
  if (typeof query !== 'string') {
    throw new TypeError('Media query "query" property must be a string.');
  }
  if (query.length === 0) {
    throw new TypeError('Media query should not be an empty string.');
  }
}

function validateQueryUniqueness (
  validated: MQTMediaQuery[],
  query: MQTMediaQuery
): void {
  const duplicateQueries = validated.filter(existing => {
    return query.query === existing.query;
  });
  if (duplicateQueries.length > 0) {
    throw new TypeError(
      `MediaQueryTracker received two queries with the same query string:` +
      ` ${query.query}.`
    );
  }

  const duplicateIds = validated.filter(existing => {
    return query.id === existing.id;
  });
  if (duplicateIds.length > 0) {
    throw new TypeError(
      `MediaQueryTracker received two queries with the same id: ` +
      `${query.id}.`
    );
  }
}

/** 
 * Verifies that all MQTMediaQueries in an array meet the requirements for
 * MediaQueryTracker.
 * @param queries An array of MQTMediaQueries to validate.
 * @return True if all validations pass, false if not.
 */
export function validateMediaQueries(queries: MQTMediaQuery[]): boolean {
  let isValid = true;
  try {
    validateQueries(queries);
    
    const validated: MQTMediaQuery[] = [];
    queries.forEach(query => {
      validateQueryUniqueness(validated, query);
      validateQueryProp(query.query);
      validateIdProp(query.id);
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