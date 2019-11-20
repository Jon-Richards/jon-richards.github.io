/**
 * @fileoverview
 * Contains unit tests for the Tool Factory module.
 */

import { v4 as uuid } from 'uuid';
import { buildProject } from './project_factory';

describe('The buildProject factory method.', () => {
  it('Should generate a valid Project without any provided data.', () => {
    const tool = buildProject();
    expect(tool.getErrors().size).toBe(0);
  });

  it('Should generate Projects with random values.', () => {
    const toolA = buildProject();
    const toolB = buildProject();
    expect(toolA.data.id).not.toBe(toolB.data.id);
    expect(toolA.data.uuid).not.toBe(toolB.data.uuid);
  });

  it('Should use provided values when applicable.', () => {
    const testUUID = uuid();
    const tool = buildProject({
      display_title: 'Foo',
      uuid: testUUID
    });

    expect(tool.data.displayTitle).toBe('Foo');
    expect(tool.data.uuid).toBe(testUUID);
  });
});