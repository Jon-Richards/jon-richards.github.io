import './core.scss';
import { registerCustomElements } from './custom_elements';
import { getStatic } from './io/static/getStatic';

registerCustomElements({});

getStatic()
.then(json => console.log(json));

