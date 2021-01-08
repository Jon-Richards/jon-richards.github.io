import { ToolCategory } from './interfaces/tool_category';

/**
 * Provides runtime validation of a tool's category.
 * @param category The value to validate.
 * @return True if the validation passes, false if not.
 */
export function validateToolCategory(category: string): boolean {
  switch(category as ToolCategory) {
  case 'FRAMEWORK':
    return true;
  case 'LANGUAGE':
    return true;
  case 'LIBRARY':
    return true;
  case 'SOFTWARE':
    return true;
  default:
    return false;
  }
}
