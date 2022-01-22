import './core.scss';
import { CustomElementConfig } from './custom_elements';
import { registerHelloWorldElement } from './custom_elements';

const elementConfig: CustomElementConfig = {
  stylesPath: '/assets/core.css'
};

registerHelloWorldElement(elementConfig);

