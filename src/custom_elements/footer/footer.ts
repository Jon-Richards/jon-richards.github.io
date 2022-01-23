import { LitElement as Ele, html } from 'lit';
import { ElementFactory, ElementRegistrar, withStylesheet } from '../utils';
import CSS from './footer.scss';

const footer: ElementFactory = () => class Footer extends Ele {
  render = () => html`
    ${withStylesheet}
    <footer class=${CSS.footer}>
      <p>
        I am the footer!
      </p>
    </footer>
  `;
}

export const registerFooterElement: ElementRegistrar = (opts) => {
  customElements.define('jr-footer', footer(opts));
}
