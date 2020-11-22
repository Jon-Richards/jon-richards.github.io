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
});
