/**
 * @fileoverview
 * Conatins a class that validates a response from the Overview endpoint.
 */

import { 
  NodeValidator,
  filterByDuplicateProperty
} from '../../../../lib/node_validator';
import { ProjectValidator, ProjectResponseData } from '../project';
import { ToolValidator, ToolResponseData } from '../tool';

/** The raw response body of an Overview response. */
export interface OverviewResponseData {
  /** Array of projects that should appear in the portfolio. */
  projects: ProjectResponseData[];
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
      tools: this.validateTools(responseBody.tools)
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
      project => 
        console.warn(`Found duplicate Project with uuid: ${project.data.uuid}.`)
    );
    return uniqueProjects.map(project => project.data);
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
      tool => 
        console.warn(`Found duplicate Tool with uuid: ${tool.data.uuid}.`)
    );
    return uniqueTools.map(tool => tool.data);
  }
}
