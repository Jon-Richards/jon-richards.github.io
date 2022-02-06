import { LitElement as Ele, html, css } from 'lit';
import { ElementFactory, ElementRegistrar, withStylesheet } from '../utils';
import CSS from './content-block.scss';

/* eslint max-lines-per-function: "off" */
const contentBlock: ElementFactory = () => class ContentBlock extends Ele {
  /**
   * Renders styles that cannot be used an external stylesheet.
   */
  static get styles() {
    return css`:host {
      display: block;
      width: 100%;
    }`;
  }

  render = () => html`
    ${withStylesheet}
    <div class=${CSS['block']}>
      <slot></slot>
    </div>`;
}

export const registerContentBlock: ElementRegistrar = opts => {
  customElements.define('jr-content-block', contentBlock(opts));
}

