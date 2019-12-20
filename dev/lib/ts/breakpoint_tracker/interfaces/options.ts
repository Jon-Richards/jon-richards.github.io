/** Configuration options for the Breakpoints class. */
export type Options = {
  /**
   * Milliseconds that should pass between callback function calls.  This is a
   * performance optimization as the window.resize is often called many times
   * per second.  Defaults to 100 (10x per second).
   */
  throttle: number;
};