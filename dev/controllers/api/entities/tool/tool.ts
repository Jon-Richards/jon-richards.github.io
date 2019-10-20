/**
 * @fileoverview
 * Contains a class that validates the structure of a tool object from the API.
 */

import { isUrl, isEmpty, isUUID, isNumeric, ResponseNode } from './mediator';

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
export interface ToolEntityData {
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
export class Tool extends ResponseNode<ToolResponseData> {
  /** Validated data held by this Tool entity. */
  data: ToolEntityData;

  constructor(tool: ToolResponseData) {
    super();

    const id: Tool['data']['id'] = Number(this.validate(
      'id',
      String(tool.id), 
      [this.isNumber],
      false,
      '0'
    ));

    const uuid: Tool['data']['uuid'] = this.validate(
      'uuid',
      tool.uuid,
      [this.notEmpty, this.isUUID],
      false,
      ''
    );

    const displayTitle: Tool['data']['displayTitle'] = this.validate(
      'display_title',
      tool.display_title,
      [this.notEmpty],
      false,
      ''
    );

    const filterableValue: Tool['data']['filterableValue'] = this.validate(
      'filterable_value',
      tool.filterable_value,
      [this.notEmpty, this.isURLString],
      false,
      ''
    );

    const logo: Tool['data']['logo'] = this.validate(
      'logo',
      tool.logo,
      [this.notEmpty, this.isURLString],
      false,
      ''
    );

    const isCore: Tool['data']['isCore'] = Boolean(this.validate(
      'is_core',
      String(tool.is_core),
      [this.isBoolean],
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

  /**
   * Checks if a prop is empty.
   * @param prop The property being evaluated.
   * @return true if the prop is not empty, false if it is.
   */
  private notEmpty(prop: string): boolean {
    return !isEmpty(prop);
  }

  /**
   * Checks if a prop is a valid version 4 UUID.
   * @param prop The property being evaluated.
   * @return true if the prop is a valid UUID else false.
   */
  private isUUID(prop: string): boolean {
    return isUUID(prop, 4);
  }

  /**
   * Checks if a prop is a URL safe string.
   * @param prop The property being evaluated.
   * @return true if the prop is a URL safe string, esle false.
   */
  private isURLString(prop: string): boolean {
    return isUrl(prop, {
      require_host: false,
      require_protocol: false,
      require_tld: false,
      require_valid_protocol: false,
      allow_underscores: true,
    });
  }

  /**
   * Checks if a prop is a valid integer.
   * @param prop The property being evaluated.
   * @retrun true if the prop is a valid number, else false.
   */
  private isNumber(prop: string): boolean {
    return isNumeric(prop, { no_symbols: true });
  }

  /**
   * Checks if a prop is a valid boolean.
   * @param prop The property being evaluated.
   * @return true if the prop is a valid boolean, else false.
   */
  private isBoolean(prop: string): boolean {
    return prop === 'true' || prop === 'false';
  }
}
