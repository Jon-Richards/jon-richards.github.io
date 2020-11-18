import * as React from 'react';
import { render } from 'enzyme';
import { Gallery, GalleryProps } from './gallery';

describe('The gallery component.', () => {
  it('Should match the snapshot.', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const stubHandler = function () {};
    const test_1 = render(
      <Gallery
        thumbnails={[]}
        thumbnailSize="MEDIUM"
        onClick={() => stubHandler}
      />
    );

    expect(test_1).toMatchSnapshot();
  });

  it('Should render the one thumbnail for each in the array.', () => {
    const stubHandler = function () {};
    const thumbs: GalleryProps['thumbnails'] = [
      {
        uuid: 'abc-123',
        sourceSmall: 'small.jpg',
        sourceMedium: 'medium.jpg',
        sourceLarge: 'large.jpg',
        description: 'a thumbnail',
        href: 'www.google.com'
      },
      {
        uuid: 'abc-456',
        sourceSmall: 'small.jpg',
        sourceMedium: 'medium.jpg',
        sourceLarge: 'large.jpg',
        description: 'a thumbnail',
        href: 'www.google.com'
      }
    ];
    const test_1 = render(
      <Gallery
        thumbnails={thumbs}
        thumbnailSize="MEDIUM"
        onClick={() => stubHandler}
      />
    );

    expect(test_1.find('[data-testid="gallery__thumb"]').length).toBe(2);
  });

  it('Should apply the correct image source based on the size.', () => {
    const stubHandler = function () {};
    const thumbs: GalleryProps['thumbnails'] = [
      {
        uuid: 'abc-123',
        sourceSmall: 'small.jpg',
        sourceMedium: 'medium.jpg',
        sourceLarge: 'large.jpg',
        description: 'a thumbnail',
        href: 'www.google.com'
      },
      {
        uuid: 'abc-456',
        sourceSmall: 'small.jpg',
        sourceMedium: 'medium.jpg',
        sourceLarge: 'large.jpg',
        description: 'a thumbnail',
        href: 'www.google.com'
      }
    ];
    const test_1 = render(
      <Gallery
        thumbnails={thumbs}
        thumbnailSize="MEDIUM"
        onClick={() => stubHandler}
      />
    );

    expect(test_1.find('[data-testid="gallery__thumb__img"]')
      .attr('src'))
      .toBe('medium.jpg');
  });
});
