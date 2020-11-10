import * as React from 'react';
import { mount, render } from 'enzyme';
import { Intro } from './intro';

describe('The Intro component.', () => {
  it('Should match the snapshot.', () => {
    const test_1 = render(
      <Intro title="Foo" subtitle="Bar" theme="PANEL" skills={[]} />
    );

    expect(test_1).toMatchSnapshot();
  });

  it('Should render according to its props.', () => {
    const test_1 = mount(
      <Intro title="Foo" subtitle="Bar" theme="PANEL" skills={[]} />
    );
    const test_2 = render(
      <Intro title="Apple" subtitle="Banana" theme="COPY" skills={[]} />
    );

    expect(test_1.find('[data-testid="intro_panel"]').length).toBe(1);
    expect(test_2.find('[data-testid="intro_panel"]').length).toBe(0);
  });
});
