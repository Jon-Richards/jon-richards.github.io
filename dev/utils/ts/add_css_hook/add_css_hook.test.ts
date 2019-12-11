import { addCSSHook } from './add_css_hook';

describe('The createCSSHook() function.', () => {
  it('Returns an empty string when passed null for the first argument.', () => {
    const hook_1 = addCSSHook(null);
    const hook_2 = addCSSHook();
    expect(hook_1).toBe('');
    expect(hook_2).toBe('');
  });

  it('Returns a BEM string matching the supplied arguments.', () => {
    const hook = addCSSHook('foo');
    const rgx = new RegExp(/foo/);
    expect(rgx.test(hook)).toBe(true);
  });
});