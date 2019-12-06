import { createCSSHook } from './create_css_hook';

describe('The createCSSHook() function.', () => {
  it('Returns an empty string when passed null for the first argument.', () => {
    const hook = createCSSHook(null, 'foo');
    expect(hook).toBe('');
  });

  it('Returns a BEM string matching the supplied arguments.', () => {
    const hook = createCSSHook('foo', 'bar');
    const rgx = new RegExp(/foo__bar/);
    expect(rgx.test(hook)).toBe(true);
  });
});