import { MQTMediaQuery } from './media_query';

/**
 * Data passed to the callback when an event listener used by a
 * MediaQueryTracker instance fires.
 */
export interface MQTEvent {
  /** 
   * The matching MediaQueries for the state of the window object when the
   * event listener's callback was fired.
   */
  matches: MQTMediaQuery[];
  /** The standard event data passed to the callback. */
  event: WindowEventHandlersEventMap[keyof WindowEventHandlersEventMap];
}