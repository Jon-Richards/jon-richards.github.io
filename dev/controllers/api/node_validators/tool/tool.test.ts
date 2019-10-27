/**
 * @fileoverview
 * Contains unit tests for the Tool class.
 */

import { Tool, ToolResponseData } from './tool';
import { v4 as uuid } from 'uuid';

/** Test properties for instantiating a Tool. */
export const MOCK_TOOL: ToolResponseData = {
  id: 1,
  uuid: uuid(),
  display_title: 'Test Piece',
  filterable_value: 'test_piece',
  logo: 'logo.png',
  is_core: true,
};

describe('The Tool API entity class.', () => {
  describe('The id field.', () => {
    it('Should replace an invalid id with empty string.', () => {
      const tool = new Tool({
        ...MOCK_TOOL,
        id: ('banana' as unknown) as number,
      });
      expect(tool.data.id).toEqual(0);
    });

    it('Should store a valid ID within its data property.', () => {
      const tool = new Tool({
        ...MOCK_TOOL,
        id: 12,
      });
      expect(tool.data.id).toEqual(12);
    });
  });

  describe('The UUID field.', () => {
    it('Should replace an invalid uuid with an empty string.', () => {
      const tool = new Tool({
        ...MOCK_TOOL,
        uuid: (undefined as unknown) as string,
      });
      expect(tool.data.uuid).toBe('');
    });

    it('Should store a valid uuid in its data property.', () => {
      const testUUID = uuid();
      const tool = new Tool({
        ...MOCK_TOOL,
        uuid: testUUID,
      });
      expect(tool.data.uuid).toBe(testUUID);
    });
  });

  describe('The display_title filed.', () => {
    it('Should replace an invalid value with an empty string.', () => {
      const withNull = new Tool({
        ...MOCK_TOOL,
        display_title: (null as unknown) as string,
      });
      const withUndefined = new Tool({
        ...MOCK_TOOL,
        display_title: (undefined as unknown) as string,
      });
      const withBogus = new Tool({
        ...MOCK_TOOL,
        display_title: (789 as unknown) as string,
      });

      expect(withNull.data.displayTitle).toBe('');
      expect(withUndefined.data.displayTitle).toBe('');
      expect(withBogus.data.displayTitle).toBe('');
    });

    it('Should store a valid display_title in its data property.', () => {
      const tool = new Tool({
        ...MOCK_TOOL,
        display_title: 'I am a display title!',
      });
      expect(tool.data.displayTitle).toBe('I am a display title!');
    });
  });

  describe('The filterable_value field', () => {
    it('Should replace an invalid value with an empty string.', () => {
      const withUndefined = new Tool({
        ...MOCK_TOOL,
        filterable_value: (undefined as unknown) as string,
      });
      const withNull = new Tool({
        ...MOCK_TOOL,
        filterable_value: (null as unknown) as string,
      });
      const withNumber = new Tool({
        ...MOCK_TOOL,
        filterable_value: (123 as unknown) as string,
      });
      const withUnsafe = new Tool({
        ...MOCK_TOOL,
        filterable_value: 'I have spaces and $special# characters!',
      });
      expect(withUndefined.data.filterableValue).toBe('');
      expect(withNull.data.filterableValue).toBe('');
      expect(withNumber.data.filterableValue).toBe('');
      expect(withUnsafe.data.filterableValue).toBe('');
    });

    it('Should store a valid filterable_value in its data property', () => {
      const tool = new Tool({
        ...MOCK_TOOL,
        filterable_value: 'a-filterable_value',
      });
      expect(tool.data.filterableValue).toBe('a-filterable_value');
    });
  });

  describe('The logo field.', () => {
    it('Should replace an invalid value with an empty string.', () => {
      const withUndefined = new Tool({
        ...MOCK_TOOL,
        logo: (undefined as unknown) as string,
      });
      const withNull = new Tool({
        ...MOCK_TOOL,
        logo: (null as unknown) as string,
      });
      const withNumber = new Tool({
        ...MOCK_TOOL,
        logo: (123 as unknown) as string,
      });
      const withUnsafe = new Tool({
        ...MOCK_TOOL,
        logo: 'I have spaced and $special# characters!',
      });
      expect(withUndefined.data.logo).toBe('');
      expect(withNull.data.logo).toBe('');
      expect(withNumber.data.logo).toBe('');
      expect(withUnsafe.data.logo).toBe('');
    });

    it('Should store a valid logo url in its data property.', () => {
      const tool = new Tool({
        ...MOCK_TOOL,
        logo: 'a-filterable_value',
      });
      expect(tool.data.logo).toBe('a-filterable_value');
    });
  });

  describe('The is_core field.', () => {
    it('Should store an invalid value as false.', () => {
      const withUndefined = new Tool({
        ...MOCK_TOOL,
        is_core: undefined as unknown as boolean,
      });
      const withNull = new Tool({
        ...MOCK_TOOL,
        is_core: null as unknown as boolean,
      });
      const withString = new Tool({
        ...MOCK_TOOL,
        is_core: 'banana' as unknown as boolean,
      });
      const withEmptyString = new Tool({
        ...MOCK_TOOL,
        is_core: '' as unknown as boolean,
      });
      expect(withUndefined.data.isCore).toEqual(false);
      expect(withNull.data.isCore).toEqual(false);
      expect(withString.data.isCore).toEqual(false);
      expect(withEmptyString.data.isCore).toEqual(false);
    });

    it('Should store a valid boolean value in its data property.', () => {
      const tool = new Tool({
        ...MOCK_TOOL,
        is_core: true,
      });
      expect(tool.data.isCore).toEqual(true);
    });
  });
});
