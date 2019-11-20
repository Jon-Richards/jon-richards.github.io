/**
 * @fileoverview
 * Conatins a class that validates a response from the Overview endpoint.
 */

import { 
  NodeValidator,
  filterByDuplicateProperty
} from '../../../../lib/node_validator';
import { Project, ProjectResponseData } from '../project';
import { Tool, ToolResponseData } from '../tool';

/** The raw response body of an Overview response. */
export interface OverviewResponseData {
  /** Array of projects that should appear in the portfolio. */
  projects: ProjectResponseData[];
  /** Array of tools used to build portfolio projects. */
  tools: ToolResponseData[];
}

/** The raw response body of an Overview response. */
export interface OverviewValidatorData {
  /** Array of projects that should appear in the portfolio. */
  projects: Project[];
  /** Array of tools used to build portfolio projects. */
  tools: Tool[];
}

/** Validates the response from the Overview endpoint. */
export class Overview extends NodeValidator<OverviewValidatorData> {
  /** The validated node data. */
  data: OverviewValidatorData;
  
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
   */
  private validateProjects(projectsBody: ProjectResponseData[]): Project[] {
    const mappedProjects = projectsBody.map(project => new Project(project));
    const uniqueProjects = filterByDuplicateProperty(
      mappedProjects,
      project => project.data.uuid, 
      project => 
        console.warn(`Found duplicate Project with uuid: ${project.data.uuid}.`)
    );
    const validProjects = uniqueProjects.filter(project => 
      project.getErrors().size === 0
    );
    return validProjects;
  }

  /**
   * Creates an array of ToolEntities based on the raw "tools" field of an
   * OverviewResponseShape. ToolEntities are then validated and any invalid
   * entities are discarded.
   * @param toolsBody An array of raw tool response data to validate.
   */
  private validateTools(toolsBody: ToolResponseData[]): Tool[] {
    const mappedTools = toolsBody.map(tool => new Tool(tool));
    const uniqueTools = filterByDuplicateProperty(
      mappedTools, 
      tool => tool.data.uuid,
      tool => 
        console.warn(`Found duplicate Tool with uuid: ${tool.data.uuid}.`)
    );
    const validTools = uniqueTools.filter(tool => tool.getErrors().size === 0);
    return validTools;
  }
}
