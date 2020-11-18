import { ToolResponseData } from '../tool';
import { v4 as uuid } from 'uuid';

/**
 * Mocks a ToolResponseData type, calculating unique values where needed.  If a
 * field is nullable, it will returned as null by default.
 * @param data A complete or partial ToolResponseData type.  The provided fields
 * of which will appear in the return value.
 * @return A valid ToolResponseData type.
 */
export function toolResponseData(
  data: Partial<ToolResponseData> = {}
): ToolResponseData {
  const stubUUID = uuid();

  return {
    id: Math.ceil(Math.random() * 1000000000),
    uuid: stubUUID,
    display_title: `Tool Title ${stubUUID}`,
    filterable_value: `tool-${stubUUID}`,
    logo: `logo-${stubUUID}`,
    is_core: Math.floor(Math.random() * 2) === 0,
    ...data,
  };
}
