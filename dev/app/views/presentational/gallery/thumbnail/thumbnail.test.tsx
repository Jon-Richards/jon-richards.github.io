import * as React from 'react';
import { render, shallow } from 'enzyme';
import { Thumbnail, ThumbnailProps } from './thumbnail';

describe('The gallery component.', () => {
  it('Should match the snapshot.', () => {
    const stubHandler = function() {};
    const sources: ThumbnailProps['sources'] = [
      { mediaQuery: 'min-width(320px)', source: 'test_small.jpg' },
      { mediaQuery: 'min-width(480px)', source: 'test_medium.jpg' },
      { mediaQuery: 'min-width(720px)', source: 'test_large.jpg' }
    ]
    const test_1 = render(
      <Thumbnail
        sources={sources}
        fallbackSource="test.jpg"
        title="Test 1"
        description="A test image."
        href="www.google.com"
        onClick={() => stubHandler()}
      />
    );

    expect(test_1).toMatchSnapshot();
  });

  it('Should fire the supplied click handler when clicked.', () => {
    const mockHandler = jest.fn();
    const sources: ThumbnailProps['sources'] = [
      { mediaQuery: 'min-width(320px)', source: 'test_small.jpg' },
      { mediaQuery: 'min-width(480px)', source: 'test_medium.jpg' },
      { mediaQuery: 'min-width(720px)', source: 'test_large.jpg' }
    ]
    const test_1 = shallow(
      <Thumbnail
        sources={sources}
        fallbackSource="test.jpg"
        title="Test 1"
        description="A test image."
        href="www.google.com"
        onClick={() => mockHandler()}
      />
    );

    test_1.find('[data-testid="gallery__thumb"]').simulate('click');
    expect(mockHandler).toBeCalledTimes(1);
  });

  it('Should change focus state on focus.', () => {
    const sources: ThumbnailProps['sources'] = [
      { mediaQuery: 'min-width(320px)', source: 'test_small.jpg' },
    ];
    const test_1 = shallow(
      <Thumbnail
        sources={sources}
        fallbackSource="test.jpg"
        title="Test 1"
        description="A test image."
        href="www.google.com"
        onClick={() => {}}
      />
    );
    let focused = test_1.find('[data-test-hasfocus=true]');
    expect(focused.length).toBe(0);

    test_1.find('[data-testid="gallery__thumb"]').simulate('focus');

    focused = test_1.find('[data-test-hasfocus=true]');
    expect(focused.length).toBe(1);
  });

  it('Should change focus state on blur.', () => {
    const sources: ThumbnailProps['sources'] = [
      { mediaQuery: 'min-width(320px)', source: 'test_small.jpg' },
    ];
    const test_1 = shallow(
      <Thumbnail
        sources={sources}
        fallbackSource="test.jpg"
        title="Test 1"
        description="A test image."
        href="www.google.com"
        onClick={() => {}}
      />
    );
    const focused = '[data-test-hasfocus=true]';
    expect(test_1.find(focused).length).toBe(0);

    test_1.find('[data-testid="gallery__thumb"]').simulate('focus');
    expect(test_1.find(focused).length).toBe(1);

    test_1.find('[data-testid="gallery__thumb"]').simulate('blur');
    expect(test_1.find(focused).length).toBe(0);
  });

  it('Should change focus state on mouse enter.', () => {
    const sources: ThumbnailProps['sources'] = [
      { mediaQuery: 'min-width(320px)', source: 'test_small.jpg' },
    ];
    const test_1 = shallow(
      <Thumbnail
        sources={sources}
        fallbackSource="test.jpg"
        title="Test 1"
        description="A test image."
        href="www.google.com"
        onClick={() => {}}
      />
    );
    const focused = '[data-test-hasfocus=true]';
    expect(test_1.find(focused).length).toBe(0);

    test_1.find('[data-testid="gallery__thumb"]').simulate('mouseenter');
    expect(test_1.find(focused).length).toBe(1);
  });

  it('Should change focus state on mouse leave.', () => {
    const sources: ThumbnailProps['sources'] = [
      { mediaQuery: 'min-width(320px)', source: 'test_small.jpg' },
    ];
    const test_1 = shallow(
      <Thumbnail
        sources={sources}
        fallbackSource="test.jpg"
        title="Test 1"
        description="A test image."
        href="www.google.com"
        onClick={() => {}}
      />
    );
    const focused = '[data-test-hasfocus=true]';
    expect(test_1.find(focused).length).toBe(0);

    test_1.find('[data-testid="gallery__thumb"]').simulate('mouseenter');
    expect(test_1.find(focused).length).toBe(1);

    test_1.find('[data-testid="gallery__thumb"]').simulate('mouseleave');
    expect(test_1.find(focused).length).toBe(0);
  });
});
