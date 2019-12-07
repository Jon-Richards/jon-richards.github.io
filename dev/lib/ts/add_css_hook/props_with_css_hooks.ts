  /** 
   * For declaring React Component props with an optional CSS hook.
   */
export interface PropsWithCSSHooks<H> {
  /** 
   * Optional css class hook, this will expose BEM formatted css hooks matching
   * the parent module.
   */
  cssHooks: H;
}

/** A single css hook. */
type CSSHooks = {
  [key:string]: CSSHook | undefined;
};

type CSSHook = string;