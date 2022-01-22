import { LitElement, html } from 'lit';
import { CustomElementConfig } from '../utils';
import CSS from './hello_world.scss';

function helloWorldFactory(options: CustomElementConfig) {
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

export function registerHelloWorldElement(options: CustomElementConfig) {
  customElements.define('hello-world', helloWorldFactory(options));
}

