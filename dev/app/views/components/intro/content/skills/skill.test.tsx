import * as React from 'react';
import {shallow, mount, render} from 'enzyme';
import {Skill, SkillProps} from './skill';
import { v4 as uuid } from 'uuid';

describe('The Skill component.', () => {
  it('Should render without throwing an error.', () => {
    expect(
      shallow(
        <Skill
          uuid={uuid()}
          displayLabel="Foo"
          isCore={true}
        />
      )
      .contains('Foo')
    ).toBe(true);

    expect(
      shallow(
        <Skill
          uuid={uuid()}
          displayLabel="Bar"
          isCore={true}
        />
      )
      .contains('Foo')
    ).toBe(false);
  });
});