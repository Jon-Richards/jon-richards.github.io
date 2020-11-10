import { MQTMediaQuery } from 'Lib/ts/media_query_tracker';

/** Media query ID's used by the application. */
export type MediaQueryIds =
  | '375'
  | '480'
  | '720'
  | '1080'
  | '1440';

/** Shape of a single media query as used by the application. */
export interface MediaQuery extends MQTMediaQuery {
  /** An application standard media query id. */
  id: MediaQueryIds;
}

/**
 * Standard media queries used across the application, these appear in
 * TypeScript as well as SCSS.
 */
export const MEDIA_QUERIES: MediaQuery[] = [
  { id: '375', query: '(min-width: 375px)' },
  { id: '480', query: '(min-width: 480px)' },
  { id: '720', query: '(min-width: 720px)' },
  { id: '1080', query: '(min-width: 1080px)' },
  { id: '1440', query: '(min-width: 1440px)' }
];
