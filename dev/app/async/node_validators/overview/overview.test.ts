/**
 * @fileoverview
 * Contains unit tests for the Overview node validator.
 */

import { OverviewValidator } from './../overview';
import { projectResponseData } from '../project/__mocks__/project_response_data';
import { toolResponseData } from '../tool/__mocks__/tool_response_data';
import { overviewResponseData } from './__mocks__/overview_response_data';

describe('The OverviewValidator class.', () => {
  it('Stores valid OverviewResponse data.', () => {
    const v = new OverviewValidator(overviewResponseData());
    expect(v.getErrors().size).toBe(0);
  });

  it('Registers an error when a duplicate project is found.', () => {
    const project = projectResponseData();
    const projects = [project, project];
    const data = overviewResponseData(projects);
    const validator = new OverviewValidator(data);
    expect(validator.getErrors().size).toBe(1);
  });

  it('Registers an error when a duplicate tool is found.', () => {
    const tool = toolResponseData();
    const tools = [tool, tool];
    const data = overviewResponseData(undefined, tools);
    const validator = new OverviewValidator(data);
    expect(validator.getErrors().size).toBe(1);
  });

  it('Registers separate errors for separate fields.', () => {
    const project = projectResponseData();
    const projects = [project, project, project];
    const tool = toolResponseData();
    const tools = [tool, tool, tool];
    const data = overviewResponseData(projects, tools);
    const validator = new OverviewValidator(data);
    expect(validator.getErrors().size).toBe(2);
  });

  it('Discards projects with errors.', () => {
    const projectWithError = projectResponseData({
      id: ('banana' as unknown) as number,
    });
    const projects = [projectResponseData(), projectWithError];
    const data = overviewResponseData(projects);
    const validator = new OverviewValidator(data);
    expect(validator.data.projects.length).toBe(1);
  });

  it('Discards tools with errors.', () => {
    const toolWithError = toolResponseData({
      id: ('banana' as unknown) as number,
    });
    const tools = [toolResponseData(), toolWithError];
    const data = overviewResponseData(undefined, tools);
    const validator = new OverviewValidator(data);
    expect(validator.data.tools.length).toBe(1);
  });
});
