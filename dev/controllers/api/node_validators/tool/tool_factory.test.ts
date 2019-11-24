/**
 * @fileoverview
 * Contains unit tests for the Tool Factory module.
 */

import { buildToolValidator } from './tool_factory';
import { v4 as uuid } from 'uuid';

describe('The buildToolValidator factory method.', () => {
  it('Should generate a valid tool without any provided data.', () => {
    const tool = buildToolValidator();
    expect(tool.getErrors().size).toBe(0);
  });

  it('Should generate tools with random values.', () => {
    const toolA = buildToolValidator();
    const toolB = buildToolValidator();
    expect(toolA.data.id).not.toBe(toolB.data.id);
    expect(toolA.data.uuid).not.toBe(toolB.data.uuid);
  });

  it('Should use provided values when applicable.', () => {
    const testUUID = uuid();
    const tool = buildToolValidator({
      display_title: 'Foo',
      is_core: true,
      uuid: testUUID
    });

    expect(tool.data.display_title).toBe('Foo');
    expect(tool.data.is_core).toBe(true);
    expect(tool.data.uuid).toBe(testUUID);
  });
});