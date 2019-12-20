import { throttle } from 'lodash';
import {
  Breakpoint,
  IterableBreakpoints,
  Options
} from './interfaces';
import { 
  validateThrottle,
  validateBreakpoint,
} from './validators';

/**
 * Provides an API for handing changes to the size of the viewport, e.g. calling
 * a function when the viewport size reaches a given threshold.
 */
export class BreakpointTracker {
  /** The breakpoints tracked bu this Breakpoints instance. */
  private readonly breakpoints: IterableBreakpoints;
  /** Configuration options used throughout this class. */
  private options: Options;
  /** Default configuration options. */
  private static DEFAULT_OPTIONS: Options = {
    throttle: 100
  };

  constructor (
    /** An array of breakpoint values to track. */
    values: Breakpoint[],
    /** Callback function that fires when the breakpoint changes. */
    callback: (breakpoint: Breakpoint, evt: UIEvent) => void,
    /** Additional configureation options. */
    options?: Partial<Options>
  ) {
    if (!Array.isArray(values)) throw new TypeError('Values must be an array.');
    if (typeof callback !== 'function') {
      throw new TypeError('Callback must be a function.');
    }
    this.breakpoints = this.mapBreakpoints(values);
    this.options = this.setOptions(options);
    this.setListener();
  }

  /**
   * Converts an array of Breakpoint types to a map using each Breakpoint's
   * name property as its key.  Breakpoints that are deemed invalid will not be
   * included in the resulting map.
   * @param values An array of Breakpoint types to map.
   * @return A map of validated breakpoints.
   */
  private mapBreakpoints(values: Breakpoint[]): IterableBreakpoints {
    const mappedValues = new Map();  
    values.forEach(value => {
      if (validateBreakpoint(mappedValues, value)) {
        mappedValues.set(value.name, {...value});
      }
    });
    return mappedValues;
  }

  /**
   * Merges options passed via the constructor with the default values.  Options
   * passed via the constuctor will take precedence.
   * @param options A partial or complete set of options with which to replace
   * the default values.
   * @return An Options type with values either passed via the constructor or
   * defaults set in the initial declaration.
   */
  private setOptions(options: Partial<Options> = {}): Options {
    const {
      throttle
    } = options;
    const validatedOptions = {...BreakpointTracker.DEFAULT_OPTIONS};

    if (throttle !== undefined && validateThrottle(throttle)) {
      validatedOptions.throttle = throttle;
    }

    return validatedOptions;
  }

  /** Sets the event listener on the Window object, provided window exists. */
  private setListener(): void {
    if (window) {
      window.addEventListener(
        'resize',
        throttle(this.handleResizeEvent),
        {capture: false}
      );
    }
  }

  /**
   * Handles calls to the window.resize event listener, debouncing and passing
   * along the current breakpoint.
   */
  private handleResizeEvent(e: UIEvent): void {
    if (e.target !== null) {
      console.log(e.target);
    }
  }
}