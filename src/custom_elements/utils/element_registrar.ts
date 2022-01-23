import { ElementOptions } from './element_options';

/**
 * A function that registers a custom element with the browser's custom
 * element registry.  The options passed to the element being registered should
 * only be those needed at initialization time, and that cannot be applied at
 * build time.
 */
export type ElementRegistrar = (options: ElementOptions) => void;

