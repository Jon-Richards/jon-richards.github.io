/**
 * @fileoverview
 * Contains a class that validates the structure of a single portfolio project
 * from the API.
 */

import {
  NodeValidator,
  isUUID,
  notEmpty,
  isInteger,
} from '../../../lib/node_validator';

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
  /** Images associated with the project. */
  images: string[];
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

    const images = Array.isArray(project.images)
      ? project.images
        .map(image =>
          this.validate('images', image, [notEmpty, isUUID], false, '')
        )
        .filter(image => typeof image === 'string' && notEmpty(image))
      : [];

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
      images,
      tools,
    };
  }
}
