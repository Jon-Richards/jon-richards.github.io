import { ElementOptions } from './utils';
import { registerRootElement } from './root';
import { registerHeaderElement } from './header';
import { registerProjectGalleryElement } from './project-gallery';
import { registerFooterElement } from './footer';

/**
 * Registers every custom element.
 */
export function registerCustomElements(options: ElementOptions) {
  registerRootElement(options);
  registerHeaderElement(options);
  registerProjectGalleryElement(options);
  registerFooterElement(options);
}

