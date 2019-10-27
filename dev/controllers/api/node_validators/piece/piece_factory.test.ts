/**
 * @fileoverview
 * Contains unit tests for the Tool Factory module.
 */

import { buildPiece, uuid } from './mediator';

describe('The buildPiece factory method.', () => {
  it('Should generate a valid Piece without any provided data.', () => {
    const tool = buildPiece();
    expect(tool.getErrors().size).toBe(0);
  });

  it('Should generate Pieces with random values.', () => {
    const toolA = buildPiece();
    const toolB = buildPiece();
    expect(toolA.data.id).not.toBe(toolB.data.id);
    expect(toolA.data.uuid).not.toBe(toolB.data.uuid);
  });

  it('Should use provided values when applicable.', () => {
    const testUUID = uuid();
    const tool = buildPiece({
      display_title: 'Foo',
      uuid: testUUID
    });

    expect(tool.data.displayTitle).toBe('Foo');
    expect(tool.data.uuid).toBe(testUUID);
  });
});