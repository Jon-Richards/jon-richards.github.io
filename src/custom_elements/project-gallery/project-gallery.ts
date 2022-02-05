import { LitElement, html } from 'lit';
import { ElementFactory, ElementRegistrar, withStylesheet } from '../utils';
import CSS from './project-gallery.scss';

const projectGalleryElement: ElementFactory = () => {
  return class ProjectGallery extends LitElement {
    render = () => html`
      ${withStylesheet}
      <div class=${CSS['gallery']}>
        <div class=${CSS['piece']}>
          test
        </div>
        <div class=${CSS['piece']}>
          test
        </div>
      </div>
    `;
  }
}

export const registerProjectGalleryElement: ElementRegistrar = opts => {
  customElements.define('jr-project-gallery', projectGalleryElement(opts));
};

