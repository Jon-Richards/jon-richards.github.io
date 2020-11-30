/**
 * @fileoverview
 * Contains a class that validates the structure of a tool object from the API.
 */

import {
  NodeValidator,
  isURIString,
  isInteger,
  isUUID,
  notEmpty,
  isBoolean,
} from '../../../lib/node_validator';

/** Shape of a single tool node as recieved by the API. */
export interface ToolResponseData {
  /** The id of the tool. */
  id: number;
  /** The tool's UUID */
  uuid: string;
  /** The display name of the tool. */
  display_title: string;
  /** A value by which the tool can be filtered amongst other tools. */
  filterable_value: string;
  /** URL safe string for the tool's logo image. */
  logo: string;
  /**
   * If the tool should be considered a "core skill", something employers would
   * look for directly.
   */
  is_core: boolean;
}

/**
 * Accepts a single portfolio tool node from the Overview api response,
 * validates and stores it.
 */
export class ToolValidator extends NodeValidator<ToolResponseData> {
  /** Validated data held by this Tool entity. */
  data: ToolResponseData;

  constructor(tool: ToolResponseData) {
    super();

    const id: ToolResponseData['id'] = Number(
      this.validate('id', String(tool.id), [isInteger], false, '0'),
    );

    const uuid: ToolResponseData['uuid'] = this.validate(
      'uuid',
      tool.uuid,
      [notEmpty, isUUID],
      false,
      ''
    );

    const display_title: ToolResponseData['display_title'] = this.validate(
      'display_title',
      tool.display_title,
      [notEmpty],
      false,
      ''
    );

    const filterable_value: ToolResponseData['filterable_value'] = this.validate(
      'filterable_value',
      tool.filterable_value,
      [notEmpty, isURIString],
      false,
      ''
    );

    const logo: ToolResponseData['logo'] = this.validate(
      'logo',
      tool.logo,
      [notEmpty, isURIString],
      false,
      ''
    );

    const is_core: ToolResponseData['is_core'] = Boolean(
      this.validate('is_core', String(tool.is_core), [isBoolean], false, ''),
    );

    this.data = {
      id,
      uuid,
      display_title,
      filterable_value,
      logo,
      is_core,
    };
  }
}
