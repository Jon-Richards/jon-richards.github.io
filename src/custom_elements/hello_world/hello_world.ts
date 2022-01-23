import { LitElement, html } from 'lit';
import { ElementFactory, ElementRegistrar, withStylesheet } from '../utils';
import CSS from './hello_world.scss';

const hello: ElementFactory = () => class Hello extends LitElement {
  render = () => html`
    ${withStylesheet}
    <div class=${CSS.message}>
      Hello from lit!
      <p>
        ${CSS.message}
      </p>
    </div>
  `;
}

export const registerHelloWorldElement: ElementRegistrar = opts => {
  customElements.define('hello-world', hello(opts));
}

