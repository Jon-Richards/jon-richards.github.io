import './core.scss';
import { registerCustomElements } from './custom_elements';
import { getInfo } from './io/info';
import { getProjects } from './io/projects';

registerCustomElements({});

getInfo();
getProjects();

