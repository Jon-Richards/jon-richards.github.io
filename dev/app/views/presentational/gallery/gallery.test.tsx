import * as React from 'react';
import { render } from 'enzyme';
import { Gallery, GalleryProps } from './gallery';

describe('The gallery component.', () => {
  it('Should match the snapshot.', () => {
    const stubHandler = function() {};
    const test_1 = render(
      <Gallery
        thumbnails={[]}
        thumbnailClickHandler={() => stubHandler}
      />
    );

    expect(test_1).toMatchSnapshot();
  });

  it('Should render the one thumbnail for each in the array.', () => {
    const stubHandler = function() {};
    const thumbs: GalleryProps['thumbnails'] = [
      {
        sources: [],
        fallbackSource: 'test.jpg',
        altText: 'a thumbnail',
        href: 'www.google.com',
      },
      {
        sources: [],
        fallbackSource: 'test.jpg',
        altText: 'a thumbnail',
        href: 'www.google.com',
      },
    ];
    const test_1 = render(
      <Gallery
        thumbnails={thumbs}
        thumbnailClickHandler={() => stubHandler}
      />
    );

    expect(test_1.find('[data-testid="gallery__thumb"]').length).toBe(2);
  });
});
