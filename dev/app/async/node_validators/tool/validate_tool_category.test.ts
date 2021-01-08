import { validateToolCategory } from './validate_tool_category';
import { ToolCategory } from './interfaces/tool_category';

describe('The tool category validator.', () => {
  it('Returns true if passed a valid category string.', () => {
    const test_1 = validateToolCategory('FRAMEWORK');
    const test_2 = validateToolCategory('LANGUAGE');
    const test_3 = validateToolCategory('LIBRARY');
    const test_4 = validateToolCategory('SOFTWARE');

    expect(test_1).toBe(true);
    expect(test_2).toBe(true);
    expect(test_3).toBe(true);
    expect(test_4).toBe(true);
  });

  it('Returns false when not passed a string.', () => {
    const val = 2 as unknown as ToolCategory;
    const test = validateToolCategory(val);

    expect(test).toBe(false);
  });

  it('Returns false when passed an invalid string.', () => {
    const val = 'banana' as unknown as ToolCategory;
    const test = validateToolCategory(val);

    expect(test).toBe(false);
  });
});
