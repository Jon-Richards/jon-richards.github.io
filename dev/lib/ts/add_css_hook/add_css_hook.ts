/**
 * Returns a CSS class string for a JSX element, intended to be bound optionally
 * as an override.  If the first argument is undefined or null at runtime, an
 * empty string is returned so as not to pollute the DOM.
 * @param hook The name of css class hook.
 * @return This value of the hook or an empty string.
 */
export function addCSSHook(
  hook: string | null = null,
): string {
  return hook !== null ? ` ${hook}` : '';
}