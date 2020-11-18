import * as React from 'react';
import { PictureSources, PictureSourcesProps } from './picture_sources';
import { render } from 'enzyme';

describe('The PictureSources component.', () => {
  it('Should match the snapshot.', () => {
    const sources: PictureSourcesProps['sources'] = [
      { mediaQuery: 'min-width(320px)', source: 'test_small.jpg' },
      { mediaQuery: 'min-width(480px)', source: 'test_medium.jpg' },
      { mediaQuery: 'min-width(720px)', source: 'test_large.jpg' },
    ];
    const test_1 = render(<PictureSources sources={sources} />);

    expect(test_1).toMatchSnapshot();
  });

  it('Renders a source tag for each provided source.', () => {
    const sources: PictureSourcesProps['sources'] = [
      { mediaQuery: 'min-width(320px)', source: 'test_small.jpg' },
      { mediaQuery: 'min-width(480px)', source: 'test_medium.jpg' },
      { mediaQuery: 'min-width(720px)', source: 'test_large.jpg' },
    ];
    const test_1 = render(<PictureSources sources={sources} />);

    expect(test_1.length).toBe(3);
  });
});
