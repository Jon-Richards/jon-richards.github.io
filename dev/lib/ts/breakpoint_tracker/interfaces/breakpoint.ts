/** A single breakpoint value. */
export type Breakpoint = {
  /** A string identifier for this breakpoint. */
  name: string;
  /** The minimum viewport width for this breakpoint to trigger. */
  min: number;
  /** The maximum viewport width for this breakpoint to trigger. */
  max: number;
  /** The unit of measurement by which this breakpoint should be evaluated. */
  unit: 'px' | 'em' | 'rem' | 'pt';
};