import { MQTMediaQuery } from '../interfaces';
import { validateMediaQueries } from './media_queries';

describe('The validateMediaQueries function', () => {
  it('Returns false if not passed an array.', () => {
    const test_1 = validateMediaQueries(
      undefined as unknown as MQTMediaQuery[]
    );
    const test_2 = validateMediaQueries(
      null as unknown as MQTMediaQuery[]
    );
    const test_3 = validateMediaQueries(
      'banana' as unknown as MQTMediaQuery[]
    );

    expect(test_1).toBe(false);
    expect(test_2).toBe(false);
    expect(test_3).toBe(false);
  });

  it('Returns false when passed an empty array.', () => {
    const test_1 = validateMediaQueries([]);
    expect(test_1).toBe(false);
  });

  it('Returns false when passed an invalid media query.', () => {
    const test_1 = validateMediaQueries([
      { id: 123 as unknown as string, query: 456 as unknown as string }
    ]);
    const test_2 = validateMediaQueries([
      { foo: 'bar', apple: 'banana' } as unknown as MQTMediaQuery
    ]);
    const test_3 = validateMediaQueries([
      { id: 'foo', query: '' }
    ]);
    const test_4 = validateMediaQueries([
      { id: '', query: '(min-width: 320px)' }
    ]);
    const test_5 = validateMediaQueries([
      { id: 'foo', query: '(min-width: 320px)' },
      { id: false as unknown as string, query: false as unknown as string }
    ]);

    expect(test_1).toBe(false);
    expect(test_2).toBe(false);
    expect(test_3).toBe(false);
    expect(test_4).toBe(false);
    expect(test_5).toBe(false);
  });

  it('Returns false when passed media queries with duplicate values.', () => {
    const test_1 = validateMediaQueries([
      { id: 'foo', query: '(min-width: 320px)' },
      { id: 'foo', query: '(min-width: 480px)' }
    ]);
    const test_2 = validateMediaQueries([
      { id: 'foo', query: '(min-width: 320px)' },
      { id: 'bar', query: '(min-width: 320px)' }
    ]);

    expect(test_1).toBe(false);
    expect(test_2).toBe(false);
  });

  it('Returns true when passed a valid array of MQTMediaQueries.', () => {
    const test_1 = validateMediaQueries([
      { id: 'xs', query: '(min-width: 320px)' },
      { id: 'sm', query: '(min-width: 480px)' }
    ]);

    expect(test_1).toBe(true);
  });
});
