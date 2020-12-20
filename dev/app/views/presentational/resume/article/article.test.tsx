import * as React from 'react';
import { Article } from './article';
import { render } from 'enzyme';

describe('The Article component.', () => {
  it('Should match the snapshot.', () => {
    const wrapper = render(
      <Article title="My Article">
        <p data-testid="test-content">Test Content.</p>
      </Article>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('Should render with the supplied title.', () => {
    const wrapper = render(
      <Article title="My Article">
        <p>Test Content.</p>
      </Article>
    );

    const testHook = '[data-testid="article__title"]'

    expect(wrapper.find(testHook).length).toBe(1);
    expect(wrapper.find(testHook).html()).toBe('My Article');
  });

  it('Renders with the supplied child content.', () => {
    const wrapper = render(
      <Article title="My Article">
        <p>Test Content.</p>
      </Article>
    );

    const testHook = '[data-testid="article__children"]'

    expect(wrapper.find(testHook).length).toBe(1);
    expect(wrapper.find(testHook).html()).toBe('<p>Test Content.</p>');
  });
});
