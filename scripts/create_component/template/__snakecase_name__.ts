import { LitElement, html } from 'lit';
import { ElementFactory, ElementRegistrar, withStylesheet } from '../utils';
import CSS from '__snakecase_name__.scss';

const __lowercase_name__: ElementFactory = opts => class __pascalcase_name__ extends LitElement {
  render = () => html`
    ${withStylesheet}
    <div class=${CSS.__lowercase_name__}>
      __lowercase_name__
    </div>
  `;
}

export const register__pascalcase_name__Element: ElementRegistrar = opts => {
  customElements.define('jr-__kebabcase_name__', __lowercase_name__(opts));
}

