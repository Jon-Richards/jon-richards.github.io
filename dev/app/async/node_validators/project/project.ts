/**
 * @fileoverview
 * Contains a class that validates the structure of a single portfolio project
 * from the API.
 */

import {
  NodeValidator,
  isURIString,
  isUUID,
  notEmpty,
  isInteger,
} from '../../../lib/ts/node_validator';

/** Shape of a single portfolio project JSON node as recieved by the API. */
export interface ProjectResponseData {
  /** The project's ID in the database. */
  id: number;
  /** The project's UUID. */
  uuid: string;
  /** The project's title as it should be displayed to the user. */
  display_title: string;
  /** A URL safe version of the project's title. */
  url_title: string;
  /** The project's description. */
  description: string;
  /** The project's thumbnail for small devices. */
  thumb_device_small: string | null;
  /** The project's thumbnail for medium devices. */
  thumb_device_medium: string | null;
  /** The project's thumbnail for large devices. */
  thumb_device_large: string | null;
  /** An array of tool UUID's used by the project. */
  tools: string[] | null;
}

/**
 * Accepts a single portfolio project node from the Overview api response,
 * validates and stores it in a format compatible with a project node in the
 * Store.
 */
export class ProjectValidator extends NodeValidator<ProjectResponseData> {
  /** Stores the data related to this project. */
  readonly data: ProjectResponseData;

  /**
   * @param project The response data to validate.
   */
  constructor(project: ProjectResponseData) {
    super();

    const id = Number(
      this.validate(
        'id',
        String(project.id),
        [notEmpty, isInteger],
        false,
        '-1'
      ),
    );

    const uuid = this.validate(
      'uuid',
      project.uuid,
      [notEmpty, isUUID],
      false,
      ''
    );

    const display_title = this.validate(
      'display_title',
      project.display_title,
      [notEmpty],
      false,
      ''
    );

    const url_title = this.validate(
      'url_title',
      project.url_title,
      [notEmpty],
      false,
      ''
    );

    const description = this.validate(
      'description',
      project.description,
      [notEmpty],
      false,
      ''
    );

    const thumb_device_small = this.validate(
      'thumb_device_small',
      project.thumb_device_small,
      [notEmpty, isURIString],
      true,
      ''
    );

    const thumb_device_medium = this.validate(
      'thumb_device_medium',
      project.thumb_device_medium,
      [notEmpty, isURIString],
      true,
      ''
    );

    const thumb_device_large = this.validate(
      'thumb_device_large',
      project.thumb_device_large,
      [notEmpty, isURIString],
      true,
      ''
    );

    const tools = Array.isArray(project.tools)
      ? project.tools
        .map(tool => this.validate('tools', tool, [notEmpty], false, ''))
        .filter(tool => typeof tool === 'string' && notEmpty(tool))
      : [];

    this.data = {
      id,
      uuid,
      display_title,
      url_title,
      description,
      thumb_device_small,
      thumb_device_medium,
      thumb_device_large,
      tools,
    };
  }
}
