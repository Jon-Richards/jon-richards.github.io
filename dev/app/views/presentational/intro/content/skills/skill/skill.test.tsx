import * as React from 'react';
import { shallow, mount, render } from 'enzyme';
import { Skill, SkillProps } from './skill';
import { v4 as uuid } from 'uuid';

describe('The Skill component.', () => {
  it('Should render to reflect its props.', () => {
    const test_1 = shallow(
      <Skill uuid={uuid()} displayLabel="Foo" isCore={true} />
    );
    const test_2 = shallow(
      <Skill uuid={uuid()} displayLabel="Bar" isCore={false} />
    );

    expect(test_1.contains('Foo')).toBe(true);
    expect(test_2.contains('Foo')).toBe(false);
  });

  it('Should match the snapshot.', () => {
    const test_1 = shallow(
      <Skill uuid={uuid()} displayLabel="Foo" isCore={true} />
    );

    expect(test_1).toMatchSnapshot();
  });
});
