import { findProjectThumbnails, Project, Image } from './gallery_presenter';

describe('The Gallery Presenter', () => {
  describe('#findProjectThumbnails', () => {
    it('Finds the thumbnails referenced by a project.', () => {
      const project: Project = {
        id: 1,
        uuid: 'e487344c-ff73-491f-964f-582466339f1f',
        display_title: 'A Project',
        url_title: 'a_project',
        description: 'A project for testing',
        images: [
          '6ca4d62c-8c85-4d19-9db6-0ecf4325e4e6',
          '92b7fa8f-1fe6-40e6-baf4-335276b4d71f'
        ],
        tools: null
      }
      const image_1: Image = {
        id: 1,
        uuid: '6ca4d62c-8c85-4d19-9db6-0ecf4325e4e6',
        category: 'thumbnail',
        width: 480,
        height: 480,
        description: 'An image for testing.',
        source: '/some-image.jpg'
      }
      const image_2: Image = {
        id: 2,
        uuid: '92b7fa8f-1fe6-40e6-baf4-335276b4d71f',
        category: 'thumbnail',
        width: 320,
        height: 320,
        description: 'A second image for testing.',
        source: '/some-other-image.jpg'
      }
      const image_3: Image = {
        id: 3,
        uuid: 'ff85ec4c-eca7-4709-950a-1667b5e21ada',
        category: 'hero',
        width: 1440,
        height: 600,
        description: 'A third image for testing.',
        source: '/some-third-image.jpg'
      }
      const images = [image_1, image_2, image_3];

      const result = findProjectThumbnails(project, images);

      expect(result.length).toBe(2);
    });

    it('Does not change the order of the images.', () => {
      const project: Project = {
        id: 1,
        uuid: 'e487344c-ff73-491f-964f-582466339f1f',
        display_title: 'A Project',
        url_title: 'a_project',
        description: 'A project for testing',
        images: [
          '6ca4d62c-8c85-4d19-9db6-0ecf4325e4e6',
          '92b7fa8f-1fe6-40e6-baf4-335276b4d71f'
        ],
        tools: null
      }
      const image_1: Image = {
        id: 1,
        uuid: '6ca4d62c-8c85-4d19-9db6-0ecf4325e4e6',
        category: 'thumbnail',
        width: 480,
        height: 480,
        description: 'An image for testing.',
        source: '/some-image.jpg'
      }
      const image_2: Image = {
        id: 2,
        uuid: '92b7fa8f-1fe6-40e6-baf4-335276b4d71f',
        category: 'thumbnail',
        width: 320,
        height: 320,
        description: 'A second image for testing.',
        source: '/some-other-image.jpg'
      }
      const image_3: Image = {
        id: 3,
        uuid: 'ff85ec4c-eca7-4709-950a-1667b5e21ada',
        category: 'hero',
        width: 1440,
        height: 600,
        description: 'A third image for testing.',
        source: '/some-third-image.jpg'
      }
      const images = [image_1, image_2, image_3];

      const result = findProjectThumbnails(project, images);

      expect(result[0].uuid).toBe('6ca4d62c-8c85-4d19-9db6-0ecf4325e4e6');
      expect(result[1].uuid).toBe('92b7fa8f-1fe6-40e6-baf4-335276b4d71f');
    });
  });
});
