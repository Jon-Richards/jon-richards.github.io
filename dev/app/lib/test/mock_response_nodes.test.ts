/**
 * @fileoverview
 * Contains tests for the mockResponseNosed method.
 */

import { mockResponseNodes } from './mock_response_nodes';

/**
 * Generates an object with some calculated property values.
 * @return An object literal with calculated property values.
 */
function testNodeFactory () {
  const id = Math.ceil(Math.random() * 1000000000);
  return {
    id,
    foo: 'bar'
  };
}

describe('The mockResponseNodes factory function.', () => {
  it('Returns an array of the provided object literal.', () => {
    const nodes = mockResponseNodes(testNodeFactory);
    expect(nodes[2].foo).toEqual('bar');
  });

  it('Returns generated nodes when passed a factory function.', () => {
    const nodes = mockResponseNodes(testNodeFactory);
    expect(nodes[1].id).not.toEqual(nodes[2].id);
  });

  it('Returns an array matching the provided length.', () => {
    const customLength = 5;
    const nodes = mockResponseNodes(testNodeFactory, customLength);
    expect(nodes.length).toBe(customLength);
  });

  it('Concatenates additional nodes passed as the third argument.', () => {
    const nodes = mockResponseNodes(
      testNodeFactory,
      undefined,
      testNodeFactory()
    );
    expect(nodes.length).toBe(4);

    const withArray = mockResponseNodes(
      testNodeFactory,
      1,
      [testNodeFactory(), testNodeFactory()]
    );
    expect(withArray.length).toBe(3);
    expect(withArray[1]).not.toEqual(withArray[2]);
  });
});
