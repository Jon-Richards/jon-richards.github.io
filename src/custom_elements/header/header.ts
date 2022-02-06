import { LitElement, html } from 'lit';
import { ElementFactory, ElementRegistrar, withStylesheet } from '../utils';
import CSS from './header.scss';

const header: ElementFactory = () => class Header extends LitElement {
  render = () => html`
    ${withStylesheet}
    <header class=${CSS['header']}>
      <jr-content-block>
        <div class=${CSS['content']}>
          <h2 class=${CSS['title']}>Jon Richards</h2>
          <jr-header-navigation></jr-header-navigation>
        </div>
      </jr-content-block>
    </header>
  `;
}

export const registerHeaderElement: ElementRegistrar = opts => {
  customElements.define('jr-header', header(opts));
}

