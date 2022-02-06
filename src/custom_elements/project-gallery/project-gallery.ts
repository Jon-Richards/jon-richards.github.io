import { LitElement, html } from 'lit';
import { ElementFactory, ElementRegistrar, withStylesheet } from '../utils';
import CSS from './project-gallery.scss';

/* eslint max-lines-per-function: "off" */
const projectGalleryElement: ElementFactory = () => {
  return class ProjectGallery extends LitElement {
    render = () => html`
      ${withStylesheet}
      <div class=${CSS['root']}>
        <jr-content-block>
          <div class=${CSS['gallery']}>
            <jr-project-gallery-thumbnail></jr-project-gallery-thumbnail />
            <jr-project-gallery-thumbnail></jr-project-gallery-thumbnail />
            <jr-project-gallery-thumbnail></jr-project-gallery-thumbnail />
            <jr-project-gallery-thumbnail></jr-project-gallery-thumbnail />
            <jr-project-gallery-thumbnail></jr-project-gallery-thumbnail />
            <jr-project-gallery-thumbnail></jr-project-gallery-thumbnail />
            <jr-project-gallery-thumbnail></jr-project-gallery-thumbnail />
          </div>
        </jr-content-block>
      </div>
    `;
  }
}

export const registerProjectGalleryElement: ElementRegistrar = opts => {
  customElements.define('jr-project-gallery', projectGalleryElement(opts));
};

