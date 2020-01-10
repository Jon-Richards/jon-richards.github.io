/** Data needed by the MediaQueryTracker when setting a media query. */
export type MQTMediaQuery = {
  /** An ID by which this media query can be identified. */
  id: string | number;
  /** 
   * The actual media query string, this will be supplied to a window.matchMedia
   * comparison.
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia
   */
  query: string;
};