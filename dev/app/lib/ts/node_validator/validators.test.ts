import {
  isUUID,
  isURIString,
  isInteger,
  notEmpty,
  isBoolean
} from './validators';
import { v4 as uuid } from 'uuid';

describe('The notEmpty validation function:', () => {
  it('Returns true when the supplied with at least one character.', () => {
    const test = notEmpty('test');
    expect(test).toBe(true);
  });

  it('Returns false when supplied with an empty string.', () => {
    const test = notEmpty('');
    expect(test).toBe(false);
  });

  it('Returns true when supplied with a boolean converted to a string.', () => {
    expect( notEmpty(String(false)) ).toBe(true);
  });

  it('Returns true when supplied with 0 converted to a string.', () => {
    expect( notEmpty(String(0)) ).toBe(true);
  });
});

describe('The isUUID validation function:', () => {
  it('Returns true when supplied with a valid v4 UUID.', () => {
    expect(isUUID(uuid())).toBe(true);
  });

  it('Returns false when supplied with an invalid uuid.', () => {
    expect(isUUID('abc-123')).toBe(false);
  });
});

describe('The isURIString validation function:', () => {
  it('Returns true when supplied with a URI safe string.', () => {
    expect(isURIString('foo-bar')).toBe(true);
    expect(isURIString('foo_bar')).toBe(true);
    expect(isURIString('FooBar')).toBe(true);
    expect(isURIString('foobar')).toBe(true);
    expect(isURIString('/foobar')).toBe(true);
    expect(isURIString('foobar.jpg')).toBe(true);
    expect(isURIString('foobar_123.jpg')).toBe(true);
  });

  it('Returns false when supplied with invalid characters for URI\'s', () => {
    expect(isURIString('\\foobar.jpg')).toBe(false);
    expect(isURIString('^foobar.jpg')).toBe(false);
    expect(isURIString('*foobar.jpg')).toBe(false);
    expect(isURIString('$foobar.jpg')).toBe(false);
    expect(isURIString('`foobar.jpg')).toBe(false);
    expect(isURIString('~foobar.jpg')).toBe(false);
  });
});

describe('The isNumber validation function:', () => {
  it('Returns true when the supplied string converts to an integer.', () => {
    expect(isInteger('123')).toBe(true);
    expect(isInteger('-123')).toBe(true);
  });

  it(
    'Returns false when the suppliedargument cannot convert to integer.',
    () =>{
      expect(isInteger('123.4')).toBe(false);
      expect(isInteger('abc123.4')).toBe(false);
      expect(isInteger('123\\4')).toBe(false);
      expect(isInteger('123 * 4')).toBe(false);
      expect(isInteger('001')).toBe(false);
    }
  );
});

describe('The isBoolean validation function:', () => {
  it('Should return true when supplied with a boolean string.', () => {
    expect(isBoolean('true')).toBe(true);
    expect(isBoolean('false')).toBe(true);
  });

  it('Should return false when supplied with a "truthy" boolean.', () => {
    expect(isBoolean('0')).toBe(false);
    expect(isBoolean('null')).toBe(false);
    expect(isBoolean(null as unknown as string)).toBe(false);
    expect(isBoolean('')).toBe(false);
    expect(isBoolean(undefined as unknown as string)).toBe(false);
    expect(isBoolean([] as unknown as string)).toBe(false);
  });
});
