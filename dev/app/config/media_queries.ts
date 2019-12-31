import { MQTMediaQuery } from '../lib/ts/media_query_tracker';

/** 
 * Standard media queries used across the application, these appear in
 * TypeScript as well as SCSS.
 */
export const MEDIA_QUERIES: MQTMediaQuery[] = [
  {id: '375', query: '(min-width: 375px) and (max-width: 479px)'},
  {id: '480', query: '(min-width: 480px) and (max-width: 719px)'},
  {id: '720', query: '(min-width: 720px) and (max-width: 1079px)'},
  {id: '1080', query: '(min-width: 1080px) and (max-width: 1439px)'},
  {id: '1440', query: '(min-width: 1440px)'}
];