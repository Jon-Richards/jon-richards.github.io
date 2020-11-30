import { filterByDuplicateProperty } from './filters';

describe('The filterByDuplicateProperty filter:', () => {
  it('Removes objects with a given duplicate property.', () => {
    const ary = [{ foo: 'bar' }, { foo: 'baz' }, { foo: 'bar' }];
    const filtered = filterByDuplicateProperty(ary, o => o.foo);
    expect(filtered.length).toEqual(2);
  });

  it('Omits duplicate properties that are not the target property.', () => {
    const ary = [
      { foo: 'bar', marco: 'polo' },
      { foo: 'baz', marco: 'polo' },
      { foo: 'bar', marco: 'polo' },
    ];
    const filtered = filterByDuplicateProperty(ary, o => o.foo);
    expect(filtered.length).toEqual(2);
  });

  it('Passes a duplicate object to a callback when found.', () => {
    const ary = [{ foo: 'bar' }, { foo: 'baz' }, { foo: 'bar' }];
    let duplicate = '';
    filterByDuplicateProperty(
      ary,
      o => o.foo,
      o => (duplicate = o.foo),
    );
    expect(duplicate).toBe('bar');
  });

  it('Fires the callback each time a duplicate is found.', () => {
    const ary = [
      { foo: 'bar' },
      { foo: 'baz' },
      { foo: 'bar' },
      { foo: 'bar' },
    ];
    let count = 0;
    filterByDuplicateProperty(
      ary,
      o => o.foo,
      () => count++
    );
    expect(count).toEqual(2);
  });

  it('Returns a new array without modifying the old one.', () => {
    const ary = [{ foo: 'bar' }, { foo: 'baz' }, { foo: 'bar' }];
    const filtered = filterByDuplicateProperty(ary, o => o.foo);
    expect(ary.length).toEqual(3);
    expect(filtered.length).toEqual(2);
    expect(ary).not.toBe(filtered);
  });
});
