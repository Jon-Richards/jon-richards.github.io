/**
 * @fileoverview
 * Mediates dependencies for page components.
 */

/** External */
import * as React from 'react';
export { React };
export { Header } from '../header';
export { Preloader } from '../preloader';
export { Gallery } from '../gallery';
export { LoremIpsum } from '../../../../test/content/lorem_ipsum';
export { INTRO } from '../intro';
export { v4 as uuid } from 'uuid';

/** Internal */
export { PageTemplate } from './page_template/page_template';
export { IndexPage } from './index_page/index_page';