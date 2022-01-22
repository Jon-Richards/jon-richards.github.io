import './core.scss';
import { BaseComponentConfig } from './components';
import { registerHelloWorldElement } from './components';

const componentConfig: BaseComponentConfig = {
  stylesPath: '/assets/core.scss'
};

registerHelloWorldElement(componentConfig);

