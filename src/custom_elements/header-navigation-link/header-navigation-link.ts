import { LitElement, html } from 'lit';
import { ElementFactory, ElementRegistrar, withStylesheet } from '../utils';
import CSS from './header-navigation-link.scss';

/* eslint max-lines-per-function: "off" */
const headerNavigationLink: ElementFactory = () => {
  return class HeaderNavigationLink extends LitElement {
    href: string;
    text: string;

    static properties = {
      href: {
        attribute: 'data-href',
        type: String
      },
      text: {
        attribute: 'data-text',
        type: String
      }
    }

    constructor() {
      super();
      this.href = '/';
      this.text = '';
    }

    render = () => html`
      ${withStylesheet}
      <a
        class=${CSS['link']}
        href=${this.href}
      >
        ${this.text}
      </a>
    `;
  }
}

export const registerHeaderNavigationLinkElement: ElementRegistrar = opts => {
  customElements.define(
    'jr-header-navigation-link',
    headerNavigationLink(opts)
  );
}

