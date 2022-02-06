import { ElementOptions } from './utils';
import { registerRootElement } from './root';
import { registerHeaderElement } from './header';
import { registerHeaderNavigationElement } from './header-navigation';
import { registerHeaderNavigationLinkElement } from './header-navigation-link';
import { registerProjectGalleryElement } from './project-gallery';
import {
  registerProjectGalleryThumbnailElement
} from './project-gallery-thumbnail';
import { registerFooterElement } from './footer';
import { registerContentBlock } from './content-block';

/**
 * Registers every custom element.
 */
export function registerCustomElements(options: ElementOptions) {
  registerRootElement(options);
  registerHeaderElement(options);
  registerHeaderNavigationElement(options);
  registerHeaderNavigationLinkElement(options);
  registerProjectGalleryElement(options);
  registerProjectGalleryThumbnailElement(options);
  registerFooterElement(options);
  registerContentBlock(options);
}

