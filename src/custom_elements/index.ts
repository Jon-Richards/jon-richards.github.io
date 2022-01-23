import { ElementOptions } from './utils';
import { registerRootElement } from './root';
import { registerFooterElement } from './footer';
import { registerHelloWorldElement } from './hello_world';

export function registerCustomElements(options: ElementOptions) {
  registerRootElement(options);
  registerFooterElement(options);
  registerHelloWorldElement(options);
}

