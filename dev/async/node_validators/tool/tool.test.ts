/**
 * @fileoverview
 * Contains unit tests for the Tool class.
 */

import { ToolValidator, ToolResponseData } from './tool';
import { v4 as uuid } from 'uuid';

/**
 * Mocks a ToolResponseData type, calculating unique values where needed.  If a
 * field is nullable, it will returned as null by default.
 * @param data A complete or partial ToolResponseData type.  The provided fields
 * of which will appear in the return value.
 * @return A valid ToolResponseData type.
 */
export function mockToolResponseData(
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
    ...data
  };
}

describe('The Tool API entity class.', () => {
  describe('The id field.', () => {
    it('Should replace an invalid id with empty string.', () => {
      const tool = new ToolValidator(mockToolResponseData({
        id: ('banana' as unknown) as number,
      }));
      expect(tool.data.id).toEqual(0);
    });

    it('Should store a valid ID within its data property.', () => {
      const tool = new ToolValidator(mockToolResponseData({
        id: 12,
      }));
      expect(tool.data.id).toEqual(12);
    });
  });

  describe('The UUID field.', () => {
    it('Should replace an invalid uuid with an empty string.', () => {
      const tool = new ToolValidator(mockToolResponseData({
        uuid: (undefined as unknown) as string,
      }));
      expect(tool.data.uuid).toBe('');
    });

    it('Should store a valid uuid in its data property.', () => {
      const testUUID = uuid();
      const tool = new ToolValidator(mockToolResponseData({
        uuid: testUUID,
      }));
      expect(tool.data.uuid).toBe(testUUID);
    });
  });

  describe('The display_title filed.', () => {
    it('Should replace an invalid value with an empty string.', () => {
      const withNull = new ToolValidator(mockToolResponseData({
        display_title: (null as unknown) as string,
      }));
      const withUndefined = new ToolValidator(mockToolResponseData({
        display_title: (undefined as unknown) as string,
      }));
      const withBogus = new ToolValidator(mockToolResponseData({
        display_title: (789 as unknown) as string,
      }));

      expect(withNull.data.display_title).toBe('');
      expect(withUndefined.data.display_title).toBe('');
      expect(withBogus.data.display_title).toBe('');
    });

    it('Should store a valid display_title in its data property.', () => {
      const tool = new ToolValidator(mockToolResponseData({
        display_title: 'I am a display title!',
      }));
      expect(tool.data.display_title).toBe('I am a display title!');
    });
  });

  describe('The filterable_value field', () => {
    it('Should replace an invalid value with an empty string.', () => {
      const withUndefined = new ToolValidator(mockToolResponseData({
        filterable_value: (undefined as unknown) as string,
      }));
      const withNull = new ToolValidator(mockToolResponseData({
        filterable_value: (null as unknown) as string,
      }));
      const withNumber = new ToolValidator(mockToolResponseData({
        filterable_value: (123 as unknown) as string,
      }));
      const withUnsafe = new ToolValidator(mockToolResponseData({
        filterable_value: 'I have spaces and $special# characters!',
      }));
      expect(withUndefined.data.filterable_value).toBe('');
      expect(withNull.data.filterable_value).toBe('');
      expect(withNumber.data.filterable_value).toBe('');
      expect(withUnsafe.data.filterable_value).toBe('');
    });

    it('Should store a valid filterable_value in its data property', () => {
      const tool = new ToolValidator(mockToolResponseData({
        filterable_value: 'a-filterable_value',
      }));
      expect(tool.data.filterable_value).toBe('a-filterable_value');
    });
  });

  describe('The logo field.', () => {
    it('Should replace an invalid value with an empty string.', () => {
      const withUndefined = new ToolValidator(mockToolResponseData({
        logo: (undefined as unknown) as string,
      }));
      const withNull = new ToolValidator(mockToolResponseData({
        logo: (null as unknown) as string,
      }));
      const withNumber = new ToolValidator(mockToolResponseData({
        logo: (123 as unknown) as string,
      }));
      const withUnsafe = new ToolValidator(mockToolResponseData({
        logo: 'I have spaced and $special# characters!',
      }));
      expect(withUndefined.data.logo).toBe('');
      expect(withNull.data.logo).toBe('');
      expect(withNumber.data.logo).toBe('');
      expect(withUnsafe.data.logo).toBe('');
    });

    it('Should store a valid logo url in its data property.', () => {
      const tool = new ToolValidator(mockToolResponseData({
        logo: 'a-filterable_value',
      }));
      expect(tool.data.logo).toBe('a-filterable_value');
    });
  });

  describe('The is_core field.', () => {
    it('Should store an invalid value as false.', () => {
      const withUndefined = new ToolValidator(mockToolResponseData({
        is_core: undefined as unknown as boolean,
      }));
      const withNull = new ToolValidator(mockToolResponseData({
        is_core: null as unknown as boolean,
      }));
      const withString = new ToolValidator(mockToolResponseData({
        is_core: 'banana' as unknown as boolean,
      }));
      const withEmptyString = new ToolValidator(mockToolResponseData({
        is_core: '' as unknown as boolean,
      }));
      expect(withUndefined.data.is_core).toEqual(false);
      expect(withNull.data.is_core).toEqual(false);
      expect(withString.data.is_core).toEqual(false);
      expect(withEmptyString.data.is_core).toEqual(false);
    });

    it('Should store a valid boolean value in its data property.', () => {
      const tool = new ToolValidator(mockToolResponseData({
        is_core: true,
      }));
      expect(tool.data.is_core).toEqual(true);
    });
  });
});
