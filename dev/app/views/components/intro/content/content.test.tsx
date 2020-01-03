import * as React from 'react';
import { shallow, mount, render } from 'enzyme';
import { Content } from './content';

describe('The Intro\'s Content component', () => {
  it('Should match the snaptshot.', () => {
    const test_1 = shallow(
      <Content title="Foo" subtitle="Bar" skills={[]} />
    );

    expect(test_1).toMatchSnapshot();
  });

  it('Should render according to its props.', () => {
    const test_1 = shallow(
      <Content title="Foo" subtitle="Bar" skills={[]} />
    );

    expect(test_1.find('.title').contains('Foo')).toBe(true);
    expect(test_1.find('.subtitle').contains('Bar')).toBe(true);
  });
});