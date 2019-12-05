import { ProjectValidator } from '../project';
import { v4 as uuid } from 'uuid';
import { projectResponseData } from './__mocks__/project_response_data';

describe('The Project node validator class.', () => {
  // it(`Should replace an invalid id with an empty string.`, () => {
  //   const project = new ProjectValidator({
  //     ...MOCKED_PROJECT_RESPONSE_DATA,
  //     id: (undefined as unknown) as number,
  //   });
  //   expect(project.data.id).toBe(0);
  // });

  it(`Should store an error when an invalid property is passed.`, () => {
    const project = new ProjectValidator(projectResponseData({
      id: (undefined as unknown) as number,
    }));
    expect(project.getErrors().size).toBe(1);
  });

  it(`Should handle an invalid uuid property when supplied.`, () => {
    const project = new ProjectValidator(projectResponseData({
      uuid: ('abc-123' as unknown) as string,
    }));
    expect(project.data.uuid).toBe('');
    expect(project.getErrors().get('uuid')).toBeDefined();
  });

  it('Should store a valid UUID when supplied.', () => {
    const testUUID = uuid();
    const project = new ProjectValidator(projectResponseData({
      uuid: testUUID,
    }));
    expect(project.data.uuid).toBe(testUUID);
  });

  it(`Should handle an invalid display title when supplied.`, () => {
    const project = new ProjectValidator(projectResponseData({
      display_title: (false as unknown) as string,
    }));
    expect(project.data.display_title).toBe('');
    expect(project.getErrors().get('display_title')).toBeDefined();
  });

  it('Should store a valid display title when supplied.', () => {
    const testDisplayTitle = 'Hello world!';
    const project = new ProjectValidator(projectResponseData({
      display_title: testDisplayTitle,
    }));
    expect(project.data.display_title).toBe(testDisplayTitle);
  });

  it(`Should handle an invalid url title when supplied.`, () => {
    const project = new ProjectValidator(projectResponseData({
      url_title: (false as unknown) as string,
    }));
    expect(project.data.url_title).toBe('');
    expect(project.getErrors().get('url_title')).toBeDefined();
  });

  it('Should store a valid url title when supplied.', () => {
    const testURLTitle = 'test_title';
    const project = new ProjectValidator(projectResponseData({
      url_title: testURLTitle,
    }));
    expect(project.data.url_title).toBe(testURLTitle);
  });

  it(`Should handle an invalid description when supplied.`, () => {
    const project = new ProjectValidator(projectResponseData({
      description: (false as unknown) as string,
    }));
    expect(project.data.description).toBe('');
    expect(project.getErrors().get('description')).toBeDefined();
  });

  it('Should store a valid description when supplied.', () => {
    const testURLTitle = 'some_title';
    const project = new ProjectValidator(projectResponseData({
      description: testURLTitle,
    }));
    expect(project.data.description).toBe(testURLTitle);
  });

  it(`Should handle an invalid small thumb url when supplied.`, () => {
    const project = new ProjectValidator(projectResponseData({
      thumb_device_small: (false as unknown) as string,
    }));
    expect(project.data.thumb_device_small).toBe('');
    expect(project.getErrors().get('thumb_device_small')).toBeDefined();
  });

  it('Should store a valid small thumb url when supplied.', () => {
    const testThumbUrl = 'test_thumb_url';
    const project = new ProjectValidator(projectResponseData({
      thumb_device_small: testThumbUrl,
    }));
    expect(project.data.thumb_device_small).toBe(testThumbUrl);
  });

  it(`Should handle an invalid medium thumb url when supplied.`, () => {
    const project = new ProjectValidator(projectResponseData({
      thumb_device_medium: (false as unknown) as string,
    }));
    expect(project.data.thumb_device_medium).toBe('');
    expect(project.getErrors().get('thumb_device_medium')).toBeDefined();
  });

  it('Should store a valid medium thumb url when supplied.', () => {
    const testThumbUrl = 'test_thumb_url';
    const project = new ProjectValidator(projectResponseData({
      thumb_device_medium: testThumbUrl,
    }));
    expect(project.data.thumb_device_medium).toBe(testThumbUrl);
  });

  it(`Should handle an invalid large thumb url when supplied.`, () => {
    const project = new ProjectValidator(projectResponseData({
      thumb_device_large: (false as unknown) as string,
    }));
    expect(project.data.thumb_device_large).toBe('');
    expect(project.getErrors().get('thumb_device_large')).toBeDefined();
  });

  it('Should store a valid large thumb url when supplied.', () => {
    const testThumbUrl = 'test_thumb_url';
    const project = new ProjectValidator(projectResponseData({
      thumb_device_large: testThumbUrl,
    }));
    expect(project.data.thumb_device_large).toBe(testThumbUrl);
  });

  it('Should discard empty tools.', () => {
    const project = new ProjectValidator(projectResponseData({
      tools: ['one', '', 'three'],
    }));
    expect(project.data.tools).toEqual(['one', 'three']);
  });

  it('Should discard tools that are not strings.', () => {
    const project = new ProjectValidator(projectResponseData({
      tools: ['one', (37 as unknown) as string, 'three'],
    }));
    expect(project.data.tools).toHaveLength(2);
  });

  it('Should store valid tools in the tools array within its data.', () => {
    const project = new ProjectValidator(projectResponseData({
      tools: ['banana'],
    }));
    expect(project.data.tools).toHaveLength(1);
  });
});
