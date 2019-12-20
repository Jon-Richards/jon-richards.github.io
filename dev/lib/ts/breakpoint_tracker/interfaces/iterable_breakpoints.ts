import { Breakpoint } from './breakpoint';

/** For traversing a collection of Breakpoints. */
export type IterableBreakpoints = Map<
  Breakpoint['name'], 
  Breakpoint
>;