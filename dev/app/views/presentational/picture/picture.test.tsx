import * as React from 'react';
import { Picture, PictureProps } from './picture';
import { render } from 'enzyme';

describe('The Sources component.', () => {
  it('Should match the snapshot.', () => {
    const sources: PictureProps['sources'] = [
      { mediaQuery: 'min-width(320px)', source: 'test_small.jpg' },
      { mediaQuery: 'min-width(480px)', source: 'test_medium.jpg' },
      { mediaQuery: 'min-width(720px)', source: 'test_large.jpg' },
    ];
    const test_1 = render(
      <Picture
        defaultSource="test_medium.jpg"
        sources={sources}
        altText="A picture."
      />
    );

    expect(test_1).toMatchSnapshot();
  });

  it('Should render a source tag for each source provided.', () => {
    const sources: PictureProps['sources'] = [
      { mediaQuery: 'min-width(320px)', source: 'test_small.jpg' },
      { mediaQuery: 'min-width(480px)', source: 'test_medium.jpg' },
      { mediaQuery: 'min-width(720px)', source: 'test_large.jpg' },
    ];
    const test_1 = render(
      <Picture
        defaultSource="test_medium.jpg"
        sources={sources}
        altText="A picture."
      />
    );

    expect(test_1.find('[data-testid="picture__source"]').length).toBe(3);
  });
});
