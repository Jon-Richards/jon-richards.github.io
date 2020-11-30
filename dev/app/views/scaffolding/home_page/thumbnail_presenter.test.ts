import {
  buildThumbnailSource,
  Image
} from './thumbnail_presenter';

describe('The Thumbnail presenter', () => {
  describe('#buildThumbnailFromSource', () => {
    it('Builds a thumbnail source from a thumbnail.', () => {
      const image_1: Image = { source: '/image-1.jpg', width: 320 };
      const image_2: Image = { source: '/image-2.jpg', width: 480 };
      const image_3: Image = { source: '/image-3.jpg', width: 720 };
      const imagePool = [image_1, image_2, image_3];
      const mediaQuery_1 = '(min-width: 320px)';
      const mediaQuery_2 = '(min-width: 480px)';

      const result_1 = buildThumbnailSource(
        mediaQuery_1,
        320,
        imagePool
      );

      const result_2 = buildThumbnailSource(
        mediaQuery_2,
        480,
        imagePool
      );

      expect(result_1.mediaQuery).toBe(mediaQuery_1);
      expect(result_1.source).toBe(image_1.source);

      expect(result_2.mediaQuery).toBe(mediaQuery_2);
      expect(result_2.source).toBe(image_2.source);
    });

    it('Throws if the image pool is empty.', () => {
      expect(() => { buildThumbnailSource('(min-width: 320px)', 320, []) })
        .toThrow('Length of images array must be at least 1.');
    });

    it('Falls back to smallest image in the pool if no match is found.', () => {
      const image_1: Image = { source: '/image-1.jpg', width: 480 };
      const image_2: Image = { source: '/image-2.jpg', width: 320 };
      const image_3: Image = { source: '/image-3.jpg', width: 720 };
      const pool = [image_1, image_2, image_3];

      const result = buildThumbnailSource('(min-width: 320px)', 9000, pool);

      expect(result.source).toBe(image_2.source);
    });
  });
});
