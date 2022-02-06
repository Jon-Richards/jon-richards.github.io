import { LitElement, html } from 'lit';
import { ElementFactory, ElementRegistrar, withStylesheet } from '../utils';
import CSS from './project-gallery-thumbnail.scss';

/* eslint max-lines-per-function: "off" */
const projectGalleryThumbnailElement: ElementFactory = () => {
  return class ProjectGalleryThumbnail extends LitElement {
    render = () => html`
      ${withStylesheet}
      <div class=${CSS['thumbnail']}>
        <h3>I am the title</h3>
      </div>
    `;
  }
}

export const registerProjectGalleryThumbnailElement: ElementRegistrar =
    opts => {
  customElements.define(
    'jr-project-gallery-thumbnail',
    projectGalleryThumbnailElement(opts)
  );
};

