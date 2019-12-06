/**
 * Creates a string in Block Element Modifier (BEM) format for exposing css
 * classes to parent components, allowing the parent to safely overwrite the
 * css of the child component if need be.
 * @param hook The hook with which to prefix the string.
 * @param element Name for the element on which the hook is applied.
 * @return A css hook in BEM format.
 */
export function createCSSHook(
  hook: string | null = null,
  element: string
): string {
  return hook !== null ? `${hook}__${element}` : '';
}