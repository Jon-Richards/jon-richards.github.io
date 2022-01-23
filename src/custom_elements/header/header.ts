import { LitElement, html } from 'lit';
import { ElementFactory, ElementRegistrar, withStylesheet } from '../utils';
import CSS from './header.scss';

const header: ElementFactory = () => class Header extends LitElement {
  render = () => html`
    ${withStylesheet}
    <header class=${CSS.header}>
      I am the header!
    </header>
  `;
}

export const registerHeaderElement: ElementRegistrar = opts => {
  customElements.define('jr-header', header(opts));
}

