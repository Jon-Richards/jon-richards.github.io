import { LitElement, html } from 'lit';
import { ElementFactory, ElementRegistrar, withStylesheet } from '../utils';
import CSS from './header.scss';

const header: ElementFactory = () => class Header extends LitElement {
  render = () => html`
    ${withStylesheet}
    <header class=${CSS.header}>
      <h2 class=${CSS.title}>Jon Richards</h2>
      <nav class=${CSS.nav}>
        <ol class=${CSS.navList}>
          <li class=${CSS.navList__item}>Home</li>
        </ol>
      </nav>
    </header>
  `;
}

export const registerHeaderElement: ElementRegistrar = opts => {
  customElements.define('jr-header', header(opts));
}

