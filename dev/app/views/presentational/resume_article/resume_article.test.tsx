import * as React from 'react';
import { ResumeArticle } from './resume_article';
import { render } from 'enzyme';

describe('The ResumeArticle component.', () => {
  it('Should match the snapshot.', () => {
    const wrapper = render(
      <ResumeArticle title="My Article">
        <p data-testid="test-content">Test Content.</p>
      </ResumeArticle>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('Should render with the supplied title.', () => {
    const wrapper = render(
      <ResumeArticle title="My Article">
        <p>Test Content.</p>
      </ResumeArticle>
    );

    const testHook = '[data-testid="resume-article__title"]'

    expect(wrapper.find(testHook).length).toBe(1);
    expect(wrapper.find(testHook).html()).toBe('My Article');
  });

  it('Renders with the supplied child content.', () => {
    const wrapper = render(
      <ResumeArticle title="My Article">
        <p>Test Content.</p>
      </ResumeArticle>
    );

    const testHook = '[data-testid="resume-article__children"]'

    expect(wrapper.find(testHook).length).toBe(1);
    expect(wrapper.find(testHook).html()).toBe('<p>Test Content.</p>');
  });
});
