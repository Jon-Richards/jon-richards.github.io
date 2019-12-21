/** 
 * For defining event listeners used by the MediaQueryTracker to re-evaluate its
 * MediaQueries.
 */
export interface MQTEventListener {
  /**
   * Milliseconds that should pass between event callbacks.  This is a
   * performance optimization as WindowEvents often fire more frequently than
   * needed.
   */
  throttle: number;
 /**
  * A WindowEvent on which to add a listener.  The supplied MediaQueries will
  * be evaluated each time this event fires (in accordance to the value of the
  * "throttle" setting).  For a complete list of available WindowEvents, see
  * the link below:
  * @see https://developer.mozilla.org/en-US/docs/Web/API/Window#Events
  */
  event: keyof WindowEventMap;
}