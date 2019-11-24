/**
 * @fileoverview
 * Contains unit tests for the Overview node validator.
 */

import { OverviewValidator } from './overview';
import { buildProjectValidator, ProjectResponseData } from '../project';
import { buildToolValidator, ToolResponseData } from '../tool';
import { v4 as uuid } from 'uuid';
// import { buildValidators } from '../../../../lib/node_validator';

type mockProjectValidator = ReturnType<typeof buildProjectValidator>;

/**
 * Generates an array of ProjectResponseData for testing.
 * @param numberOfProjects The number of projects to build excluding any that
 * are supplied via the mockProject parameter.  Defaults to 3.
 * @param includeProject An optional project or projects that will be pushed
 * onto the array of returned projects.
 * @return An array of project response data.
 */
function buildProjects(
  numberOfProjects = 3, 
  addProject?: mockProjectValidator | mockProjectValidator[]
): ProjectResponseData[] {
  let projects: mockProjectValidator[] = [];
  let included: mockProjectValidator[] = [];
  
  if (addProject) {
    included = Array.isArray(addProject) ? addProject : [addProject];
  }
  Array.from({length: numberOfProjects}).forEach( () => 
    projects.push( buildProjectValidator() )
  );
  projects = [...projects, ...included];
  
  return projects.map((project) => project.data);
}

// const projects = buildValidators(
//   buildProjectValidator,
//   3
// );