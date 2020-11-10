import * as React from 'react';
import { shallow, render } from 'enzyme';
import { Content } from './content';

describe('The Intro\'s Content component', () => {
  it('Should match the snapshot.', () => {
    const test_1 = render(
      <Content title="Foo" subtitle="Bar" skills={[]} />
    );

    expect(test_1).toMatchSnapshot();
  });

  it('Should render according to its props.', () => {
    const test_1 = shallow(
      <Content title="Foo" subtitle="Bar" skills={[]} />
    );
    const test_2 = shallow(
      <Content title="Foo" subtitle="Bar"
        skills={[{
          uuid: 'abc-123',
          displayLabel: 'unit testing',
          isCore: true
        }]}
      />
    );

    expect(test_1.find('[data-testid="intro_content_skills"]').length)
      .toBe(0);
    expect(test_2.find('[data-testid="intro_content_skills"]').length)
      .toBe(1);
  });
});
