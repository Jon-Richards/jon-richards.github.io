import { LitElement, html, css } from 'lit';
import { ElementFactory, ElementRegistrar, withStylesheet } from '../utils';
import CSS from './header-navigation.scss';

/* eslint max-lines-per-function: "off" */
const headerNavigation: ElementFactory = () => {
  return class HeaderNavigation extends LitElement {
    /**
     * Renders styles needed for the host element.
     */
    static get styles() {
      return css`
        :host {
          display: inline-flex;
        }
      `;
    }

    render = () => html`
      ${withStylesheet}
      <nav class=${CSS['nav']}>
        <ol class=${CSS['nav-list']}>
          <li class=${CSS['nav-list__item']}>
            <jr-header-navigation-link
              data-href="#projects"
              data-text="Projects"
            />
          </li>
          <li class=${CSS['nav-list__item']}>
            <jr-header-navigation-link
              data-href="#about"
              data-text="About"
            />
          </li>
          <li class=${CSS['nav-list__item']}>
            <jr-header-navigation-link
              data-href="#contact"
              data-text="Contact"
            />
          </li>
        </ol>
      </nav>
    `;
  }
}

export const registerHeaderNavigationElement: ElementRegistrar = opts => {
  customElements.define('jr-header-navigation', headerNavigation(opts));
}

