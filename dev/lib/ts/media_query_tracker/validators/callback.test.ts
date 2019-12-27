import { validateCallback } from './callback';

describe('The callback validator.', () => {
  it('Should reurturn false if not passed a function.', () => {
    const test_1 = validateCallback(null as unknown as () => {});
    const test_2 = validateCallback(undefined as unknown as () => {});
    const test_3 = validateCallback('banana' as unknown as () => {});
    expect(test_1).toBe(false);
    expect(test_2).toBe(false);
    expect(test_3).toBe(false);
  });

  it('Should return true when passed a function.', () => {
    const test_1 = validateCallback(() => {});
    expect(test_1).toBe(true);
  });
});