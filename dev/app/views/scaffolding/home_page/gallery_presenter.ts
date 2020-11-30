import { PortfolioStore } from 'Store/portfolio';

export type Project = PortfolioStore['projects'][0];

export type Image = PortfolioStore['images'][0];

/**
 * Finds all thumbnails for a given Project based on a provided array of Images.
 * @param project The project whos thumnails to find.
 * @param images The array of images in which to search.
 */
export function findProjectThumbnails(
  project: Project,
  images: Image[]
): Image[] {
  const projectImages = findImagesForProject(project, images);
  const thumbnails = findThumbails(projectImages);
  return thumbnails;
}

function findImagesForProject(project: Project, images: Image[]): Image[] {
  const imageIds = new Set(project.images);
  return images.filter(image => imageIds.has(image.uuid));
}

function findThumbails(images: Image[]): Image[] {
  return images.filter(image => image.category === 'thumbnail');
}
