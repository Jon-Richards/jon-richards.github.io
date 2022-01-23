import { ElementOptions } from './utils';
import { registerRootElement } from './root';
import { registerHeaderElement } from './header';
import { registerFooterElement } from './footer';
import { registerHelloWorldElement } from './hello_world';

export function registerCustomElements(options: ElementOptions) {
  registerRootElement(options);
  registerHeaderElement(options);
  registerFooterElement(options);
  registerHelloWorldElement(options);
}

