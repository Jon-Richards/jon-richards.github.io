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

type MappedBreakpoints = Map<
  Breakpoint['name'], 
  Breakpoint
>;

/** Additional configuration options. */
type Options = {
  /**
   * Milliseconds that should pass between callback function calls.  This is a
   * performance optimization as the window.resize is often called many times
   * per second.  Defaults to 100 (10x per second).
   */
  debounceRate: number;
};

/**
 * Provides an API for handing changes to the size of the viewport, e.g. calling
 * a function when the viewport size reaches a given threshold.
 */
export class Breakpoints {
  /** The breakpoints tracked bu this Breakpoints instance. */
  private readonly breakpoints: MappedBreakpoints;
  /** Configuration options used throughout this class. */
  private options: Options = {
    debounceRate: 100
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
  }

  /**
   * Converts an array of Breakpoint types to a map using each Breakpoint's
   * name property as its key.  Breakpoints that are deemed invalid will not be
   * included in the resulting map.
   * @param values An array of Breakpoint types to map.
   * @return A map of validated breakpoints.
   */
  private mapBreakpoints(values: Breakpoint[]): Breakpoints['breakpoints'] {
    const mappedValues = new Map();  
    values.forEach(value => {
      let isValid = true;
      try {
        this.validateBreakpoint(mappedValues, value);
      }
      catch(error) {
        console.error(error);
        isValid = false;
      }
      finally {
        if (isValid) mappedValues.set(value.name, {...value});
      }
    });
    return mappedValues;
  }

  /**
   * Validates a single breakpoint and throws errors accordingly.
   * @param validated The breakpoints that have already been validated, this
   * allows the breakpoint to be evaluated in context of its siblings.
   * @param value The breakpoint on which to run the validation.
   */
  private validateBreakpoint(
    validated: MappedBreakpoints, 
    value: Breakpoint
  ): void {
    const { name, min, max, unit } = value;
    if (typeof name !== 'string') {
      throw new TypeError('Breakpoint name must be a string.');
    }
    if (validated.has(name)) {
      throw new TypeError(`Duplicate breakpoint identifier: ${name}.`);
    }
    if (typeof min !== 'number') {
      throw new TypeError('Property "min" must be a number.');
    }
    if (typeof max !== 'number') {
      throw new TypeError('Property "max" must be a number.');
    }
    if (min >= max) {
      throw new RangeError('Breakpoint min must be less than its max.');
    }
    if (min < 0) {
      throw new RangeError('Breakpoint\'s min value must not be less than 0.');
    }
    if (max < 1) {
      throw new RangeError('Breakpoint\'s max value must be greater than 0.');
    }
    if (typeof unit !== 'string') {
      throw new TypeError('Breakpoint unit must be a string.');
    }
  }

  /**
   * Merges options passed via the constructor with the default values.  Options
   * passed via the constuctor will take precedence.
   * @param options A partial or complete set of options with which to replace
   * the default values.
   */
  private setOptions(options: Partial<Options> = {}): Options {
    const { debounceRate } = options;
    return {
      ...this.options,
      debounceRate: this.validateDebounceRate(debounceRate)
    };
  }

  /** 
   * Validates the debounceRate property of an Options object.  If the rate is
   * invalid, the default value will be used instead and an error will be logged
   * to the console.
   * @param rate The debounce rate to validate.
   */
  validateDebounceRate(rate?: number): Options['debounceRate'] {
    window.addEventListener('resize', (ev: UIEvent) => {
      console.log(ev.type);
    });
    
    if (rate === undefined) return this.options.debounceRate;
    try {
      if (typeof rate !== 'number') {
        throw new TypeError('debounceRate must be a number.');
      }
      if (rate < 0) {
        throw new RangeError('debounceRate cannot be negative.');
      }
    }
    catch(error) {
      console.error(error);
      return this.options.debounceRate;
    }
    finally {
      return rate;
    }
  }
}