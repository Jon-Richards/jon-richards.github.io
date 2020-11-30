/**
 * Checks each object in an array of objects for uniqueness of a given
 * property, e.g. a UUID, and fires an optional callback function if one is
 * found.  Returns a new array in which the duplicates have been discarded.
 * @param objects Array of objects on which to make the comparison.
 * @param getComparableProperty A method whos first argument is one of the
 * objects being compared and that returns the property on which to run the
 * comparison.  This facilitates comparing deeply nested properties.
 * @param onFindDuplicate Optional callback function that passes the duplicate
 * object if one is found.
 * @return A new array of objects in which the duplicates have been discarded.
 *
 * @example
 * const cat_a = {coat: 'calico', name: 'Rachel'}
 * const cat_b = {coat: 'calico', name: 'Sarah'}
 * const cat_C = {coat: 'black', name: 'Fred'}
 * filterByDuplicateProperty(
 *  [cat_a, cat_b, cat_c],
 *  (cat) => cat.coat,
 *  (cat) => console.log(`${cat.name} : ${cat.coat}`) // 'Sarah : calico'
 * ); // [cat_a, cat_c]
 */
export function filterByDuplicateProperty<O extends object, P>(
  objects: O[],
  getComparableProperty: (object: O) => P,
  onFindDuplicate?: (object: O) => void
): O[] {
  const checked: O[] = [];

  objects.forEach(object => {
    const isUnique = checked.every(
      checkedObject =>
        getComparableProperty(checkedObject) !== getComparableProperty(object)
    );

    if (isUnique) {
      checked.push(object);
    } else if (onFindDuplicate !== undefined) {
      onFindDuplicate(object);
    }
  });

  return checked;
}
