import './core.scss';
import { registerCustomElements } from './custom_elements';

registerCustomElements({
  stylesPath: process.env.ASSET_PATH + '/core.css'
});

