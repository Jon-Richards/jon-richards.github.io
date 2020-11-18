/**
 * Factory function for generating an array of response nodes used in test data.
 * @param factory A factory method for generating the response nodes that
 * comprise the array.
 * @param length Optional length for the returned array, defaults to 3.  Does
 * not include values passed into the third argument.
 * @param include Explicit value(s) to include in the generated data.  These
 * will be concatenated to the end of the returned array.
 * @return An array of the specified type.
 */
export function mockResponseNodes<T>(
  factory: () => T,
  length = 3,
  include: T | T[] = [],
): T[] {
  const nodes: T[] = Array
    .from<typeof length>({ length })
    .map(() => factory());
  const additions = Array.isArray(include) ? include : [include];
  return [...nodes, ...additions];
}
