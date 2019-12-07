import { Action } from 'redux';
import { Breakpoint } from './breakpoint';

/** Updates the current responsive breakpoint held by the store. */
export interface UpdateBreakpoint extends Action<'BROWSER__UPDATE_BREAKPOINT'> {
  /** The newly active breakpoint. */
  breakpoint: Breakpoint;
}