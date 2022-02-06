import { LitElement, html } from 'lit';
import { ElementFactory, ElementRegistrar, withStylesheet } from '../utils';
import CSS from './project-gallery.scss';

const projectGalleryElement: ElementFactory = () => {
  return class ProjectGallery extends LitElement {
    render = () => html`
      ${withStylesheet}
      <jr-content-block>
        <div class=${CSS['gallery']}>
          <div class=${CSS['piece']}>
            test
          </div>
          <div class=${CSS['piece']}>
            test
          </div>
        </div>
      </jr-content-block>
    `;
  }
}

export const registerProjectGalleryElement: ElementRegistrar = opts => {
  customElements.define('jr-project-gallery', projectGalleryElement(opts));
};

