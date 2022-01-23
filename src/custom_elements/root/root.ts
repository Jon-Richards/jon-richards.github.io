import { LitElement, html } from 'lit';
import { ElementFactory, ElementRegistrar, withStylesheet } from '../utils';
import CSS from './root.scss';

const root: ElementFactory = () => class Root extends LitElement {
  render = () => html`
    ${withStylesheet}
    <div class=${CSS.root}>
      <div class=${CSS.content}>
        <hello-world></hello-world>
      </div>
      <div>
        <jr-footer></jr-footer>
      </div>
    </div>
  `;
}

export const registerRootElement: ElementRegistrar = opts => {
  customElements.define('jr-root', root(opts));
}
