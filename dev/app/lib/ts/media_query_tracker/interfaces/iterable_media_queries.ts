import { MQTMediaQuery } from './media_query';

/** For traversing a collection of Breakpoints. */
export type IterableMediaQueries = Map<
  MQTMediaQuery['id'], 
  MQTMediaQuery
>;