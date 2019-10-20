/**
 * @fileoverview
 * Unit tests for the ResponseNode class.
 */

import { ResponseNode } from './response_node';

interface MockResponseData {
  /** Foo, should be a string. */
  foo: string;
  /** Some number, any number. */
  age: number;
  /** Some boolean value. */
  awesome: boolean;
}

/** 
 * Represents a single node from a JSON response, with basic validation for
 * each property passed into the constructor.
 */
class MockNode extends ResponseNode<MockResponseData> {
  constructor(
    readonly foo: MockResponseData['foo'],
    readonly age: MockResponseData['age'],
    readonly awesome: MockResponseData['awesome']
  ) {
    super();
    if (typeof foo !== 'string') this.addError('foo', 'Foo must be a string.');
    if (foo !== 'bar') this.addError('foo', 'Foo must equal bar.');
    if (foo !== 'bar') this.addError('foo', 'Foo must equal bar.');
    if (typeof age !== 'number') this.addError('age', 'Age must be a number.');
    if (typeof awesome !== 'boolean') {
      this.addError('awesome', 'Awesome should be of type boolean.');
    }
  }

  /** Removes a provided error by property name. */
  clearError(name: keyof MockResponseData) {
    this.removeError(name);
  }
}

/** Builds a simple MockNode instance for testing. */
function buildMockNode(): MockNode {
  return new MockNode(
    1 as unknown as string,
    'banana' as unknown as number,
    true
  );
}

describe('The ResponseNode class.', () => {
  it('Should store errors.', () => {
    const node = buildMockNode();
    expect(node.getErrors().size).toBeGreaterThan(0);
  });

  it('Should store one error per property.', () => {
    const node = buildMockNode();
    expect(node.getErrors().size).toEqual(2);
  });

  it('Should store multiple reasons per property with error.', () => {
    const node = buildMockNode();
    
    const fooReasons = node.getErrors().get('foo');
    expect(fooReasons).toBeDefined();
    if (fooReasons) expect(fooReasons.size).toEqual(2);
    
    const ageReasons = node.getErrors().get('age');
    expect(ageReasons).toBeDefined();
    if (ageReasons) expect(ageReasons.size).toEqual(1);

    const awesomeReasons = node.getErrors().get('awesome');
    expect(awesomeReasons).toBeUndefined();
  });

  it('Should discard duplicate reasons.', () => {
    const node = buildMockNode();
    const reasons = node.getErrors().get('foo');
    expect(reasons).toBeDefined();
    if (reasons) expect(reasons.size).toEqual(2);
  });

  it('Should be able to clear its errors.', () => {
    const node = buildMockNode();
    expect(node.getErrors().size).toEqual(2);
    node.clearErrors();
    expect(node.getErrors().size).toEqual(0);
  });

  it('Should be able to remove individual errors.', () => {
    const node = buildMockNode();
    expect(node.getErrors().size).toEqual(2);
    node.clearError('foo');
    expect(node.getErrors().size).toEqual(1);
  });
});