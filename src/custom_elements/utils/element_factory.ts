import { ElementOptions } from './element_options';

export type ElementFactory = (options: ElementOptions) =>
    CustomElementConstructor;

