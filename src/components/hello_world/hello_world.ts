import { LitElement, html } from 'lit';
import { BaseComponentConfig } from '../utils';
import CSS from './hello_world.scss';

function helloWorldFactory(options: BaseComponentConfig) {
  return class HelloWorld extends LitElement {
    render() {
      return html`
        <style>
          @import "${options.stylesPath}";
        </style>
        <div class=${CSS.message}>
          Hello from lit!
          <p>
            ${CSS.message}
          </p>
        </div>
      `;
    }
  }
}

export function registerHelloWorldElement(options: BaseComponentConfig) {
  customElements.define('hello-world', helloWorldFactory(options));
}

