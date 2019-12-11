import { Breakpoint } from './breakpoint';

/** The shape of the Browser model. */
export interface BrowserStore {
  /** 
   * The closest breakpoint to the Browser's window width without going over.
   */
  activeBreakpoint: Breakpoint;
}