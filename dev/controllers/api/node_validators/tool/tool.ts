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
  isBoolean
} from '../../../../lib/node_validator';

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

/** Validated data held by the Tool entity. */
export interface ToolValidatorData {
  /** The id of the tool. */
  id: ToolResponseData['id'];
  /** The tool's UUID */
  uuid: ToolResponseData['uuid'];
  /** The display name of the tool. */
  displayTitle: ToolResponseData['display_title'];
  /** A value by which the tool can be filtered amongst other tools. */
  filterableValue: ToolResponseData['filterable_value'];
  /** URL safe string for the tool's logo image. */
  logo: ToolResponseData['logo'];
  /**
   * If the tool should be considered a "core skill", something employers would
   * look for directly.
   */
  isCore: ToolResponseData['is_core'];
}

/**
 * Accepts a single portfolio tool node from the Overview api response,
 * validates and stores it.
 */
export class Tool extends NodeValidator<ToolResponseData> {
  /** Validated data held by this Tool entity. */
  data: ToolValidatorData;

  constructor(tool: ToolResponseData) {
    super();

    const id: Tool['data']['id'] = Number(this.validate(
      'id',
      String(tool.id), 
      [isInteger],
      false,
      '0'
    ));

    const uuid: Tool['data']['uuid'] = this.validate(
      'uuid',
      tool.uuid,
      [notEmpty, isUUID],
      false,
      ''
    );

    const displayTitle: Tool['data']['displayTitle'] = this.validate(
      'display_title',
      tool.display_title,
      [notEmpty],
      false,
      ''
    );

    const filterableValue: Tool['data']['filterableValue'] = this.validate(
      'filterable_value',
      tool.filterable_value,
      [notEmpty, isURIString],
      false,
      ''
    );

    const logo: Tool['data']['logo'] = this.validate(
      'logo',
      tool.logo,
      [notEmpty, isURIString],
      false,
      ''
    );

    const isCore: Tool['data']['isCore'] = Boolean(this.validate(
      'is_core',
      String(tool.is_core),
      [isBoolean],
      false,
      ''
    ));

    this.data = {
      id,
      uuid,
      displayTitle,
      filterableValue,
      logo,
      isCore
    };
  }
}
