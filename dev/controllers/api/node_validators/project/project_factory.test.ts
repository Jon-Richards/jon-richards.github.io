/**
 * @fileoverview
 * Contains unit tests for the ProjectValdiator factory.
 */

import { v4 as uuid } from 'uuid';
import { buildProjectValidator } from './project_factory';

describe('The buildProjectValidator factory method.', () => {
  it('Should generate aProjectValidator without any provided data.', () => {
    const tool = buildProjectValidator();
    expect(tool.getErrors().size).toBe(0);
  });

  it('Should generate Projects with random values.', () => {
    const toolA = buildProjectValidator();
    const toolB = buildProjectValidator();
    expect(toolA.data.id).not.toBe(toolB.data.id);
    expect(toolA.data.uuid).not.toBe(toolB.data.uuid);
  });

  it('Should use provided values when applicable.', () => {
    const testUUID = uuid();
    const tool = buildProjectValidator({
      display_title: 'Foo',
      uuid: testUUID
    });

    expect(tool.data.display_title).toBe('Foo');
    expect(tool.data.uuid).toBe(testUUID);
  });
});