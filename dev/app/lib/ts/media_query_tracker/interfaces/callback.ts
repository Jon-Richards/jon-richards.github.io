import { MQTMediaQuery } from '../interfaces';
import { MQTEvent } from './event';

/**
 * Callback function that fires in response when media queries are evaluated,
 * passing a MQTEvent as the first argument.
 */
export type MQTCallback<Q extends MQTMediaQuery> 
  = (e: MQTEvent<Q>) => void;