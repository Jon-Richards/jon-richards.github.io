/**
 * @fileoverview
 * Conatins a class that validates a response from the Overview endpoint.
 */

import {
  NodeValidator,
  filterByDuplicateProperty,
} from '../../../lib/node_validator';
import { ProjectValidator, ProjectResponseData } from '../project';
import { ImageValidator, ImageResponseData } from '../image';
import { ToolValidator, ToolResponseData } from '../tool';

/** The raw response body of an Overview response. */
export interface OverviewResponseData {
  /** Array of projects that should appear in the portfolio. */
  projects: ProjectResponseData[];
  /** Array of images used in the projects. */
  images: ImageResponseData[];
  /** Array of tools used to build portfolio projects. */
  tools: ToolResponseData[];
}

/** Validates the response from the Overview endpoint. */
export class OverviewValidator extends NodeValidator<OverviewResponseData> {
  /** The validated node data. */
  readonly data: OverviewResponseData;

  constructor(responseBody: OverviewResponseData) {
    super();
    this.data = {
      projects: this.validateProjects(responseBody.projects),
      images: this.validateImages(responseBody.images),
      tools: this.validateTools(responseBody.tools),
    };
  }

  /**
   * Creates an array of ProjectEntity instances based on the raw "projects"
   * field of an OverviewResponseShape.  The ProjectEntities are then validated
   * and any invalid entities are discarded.
   * @param projectsBody An array of raw project response data to validate.
   * @return An array of project data that has been validated within the context
   * of other projects.
   */
  private validateProjects(
    projectsBody: ProjectResponseData[]
  ): OverviewResponseData['projects'] {
    const mappedProjects = projectsBody.map(project => {
      return new ProjectValidator(project);
    });
    const validProjects = mappedProjects.filter(project => {
      return !project.hasErrors();
    });
    const uniqueProjects = filterByDuplicateProperty(
      validProjects,
      project => project.data.uuid,
      project => this.handleDuplicateProject(project)
    );
    return uniqueProjects.map(project => project.data);
  }

  /**
   * Handles error registration when a duplicate project is found.
   * @param project The project that was a duplicate.
   */
  private handleDuplicateProject(project: ProjectValidator): void {
    if (process.env.NODE_ENV !== 'test') {
      console.warn(`Found duplicate Project with uuid: ${project.data.uuid}.`);
    }
    this.addError('projects', `Duplicate with uuid: ${project.data.uuid}.`);
  }

  /**
   * Creates an array of Image entities based on the raw "images" field of an
   * OverviewResponseShape. Image are then validated and any invalid entities
   * are discarded.
   * @param imagesBody An array of raw image response data to validate.
   * @return An array of image data that has been validated within the context
   * of other images.
   */
  private validateImages(
    imagesBody: ImageResponseData[]
  ): OverviewResponseData['images'] {
    const mappedImages = imagesBody.map(image => new ImageValidator(image));
    const validImages = mappedImages.filter(image =>
      image.getErrors().size === 0
    );
    const uniqueTools = filterByDuplicateProperty(
      validImages,
      image => image.data.uuid,
      image => this.handleDuplicateImage(image)
    );
    return uniqueTools.map(image => image.data);
  }

  /**
   * Handles error registration when a duplicate tool is found.
   * @param tool The tool that was a duplicate.
   */
  private handleDuplicateImage(image: ImageValidator): void {
    console.warn(`Found duplicate image with uuid: ${image.data.uuid}.`);
    this.addError('images', `Duplicate with uuid: ${image.data.uuid}.`);
  }

  /**
   * Creates an array of ToolEntities based on the raw "tools" field of an
   * OverviewResponseShape. ToolEntities are then validated and any invalid
   * entities are discarded.
   * @param toolsBody An array of raw tool response data to validate.
   * @return An array of tool data that has been validated within the context
   * of other tools.
   */
  private validateTools(
    toolsBody: ToolResponseData[]
  ): OverviewResponseData['tools'] {
    const mappedTools = toolsBody.map(tool => new ToolValidator(tool));
    const validTools = mappedTools.filter(tool => tool.getErrors().size === 0);
    const uniqueTools = filterByDuplicateProperty(
      validTools,
      tool => tool.data.uuid,
      tool => this.handleDuplicateTool(tool)
    );
    return uniqueTools.map(tool => tool.data);
  }

  /**
   * Handles error registration when a duplicate tool is found.
   * @param tool The tool that was a duplicate.
   */
  private handleDuplicateTool(tool: ToolValidator): void {
    if (process.env.NODE_ENV !== 'test') {
      console.warn(`Found duplicate tool with uuid: ${tool.data.uuid}.`);
    }
    this.addError('tools', `Duplicate with uuid: ${tool.data.uuid}.`);
  }
}
