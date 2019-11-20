import { Project, ProjectResponseData } from './project';
import { v4 as uuid } from 'uuid';

/** Test properties for instantiating a Project. */
export const MOCK_PROJECT: ProjectResponseData = {
  id: 1,
  uuid: uuid(),
  display_title: 'Test Project',
  url_title: '/test_project',
  description: 'A simple test project.',
  thumb_device_small: null,
  thumb_device_medium: null,
  thumb_device_large: null,
  tools: [],
};

describe('The Project node validator class.', () => {
  // it(`Should replace an invalid id with an empty string.`, () => {
  //   const project = new Project({
  //     ...MOCK_PROJECT,
  //     id: (undefined as unknown) as number,
  //   });
  //   expect(project.data.id).toBe(0);
  // });

  it(`Should store an error when an invalid property is passed.`, () => {
    const project = new Project({
      ...MOCK_PROJECT,
      id: (undefined as unknown) as number,
    });
    expect(project.getErrors().size).toBe(1);
  });

  it(`Should handle an invalid uuid property when supplied.`, () => {
    const project = new Project({
      ...MOCK_PROJECT,
      uuid: ('abc-123' as unknown) as string,
    });
    expect(project.data.uuid).toBe('');
    expect(project.getErrors().get('uuid')).toBeDefined();
  });

  it('Should store a valid UUID when supplied.', () => {
    const testUUID = uuid();
    const project = new Project({
      ...MOCK_PROJECT,
      uuid: testUUID,
    });
    expect(project.data.uuid).toBe(testUUID);
  });

  it(`Should handle an invalid display title when supplied.`, () => {
    const project = new Project({
      ...MOCK_PROJECT,
      display_title: (false as unknown) as string,
    });
    expect(project.data.title).toBe('');
    expect(project.getErrors().get('display_title')).toBeDefined();
  });

  it('Should store a valid display title when supplied.', () => {
    const testDisplayTitle = 'Hello world!';
    const project = new Project({
      ...MOCK_PROJECT,
      display_title: testDisplayTitle,
    });
    expect(project.data.title).toBe(testDisplayTitle);
  });

  it(`Should handle an invalid url title when supplied.`, () => {
    const project = new Project({
      ...MOCK_PROJECT,
      url_title: (false as unknown) as string,
    });
    expect(project.data.url).toBe('');
    expect(project.getErrors().get('url_title')).toBeDefined();
  });

  it('Should store a valid url title when supplied.', () => {
    const testURLTitle = 'test_title';
    const project = new Project({
      ...MOCK_PROJECT,
      url_title: testURLTitle,
    });
    expect(project.data.url).toBe(testURLTitle);
  });

  it(`Should handle an invalid description when supplied.`, () => {
    const project = new Project({
      ...MOCK_PROJECT,
      description: (false as unknown) as string,
    });
    expect(project.data.description).toBe('');
    expect(project.getErrors().get('description')).toBeDefined();
  });

  it('Should store a valid description when supplied.', () => {
    const testURLTitle = 'tdescription';
    const project = new Project({
      ...MOCK_PROJECT,
      description: testURLTitle,
    });
    expect(project.data.description).toBe(testURLTitle);
  });

  it(`Should handle an invalid small thumb url when supplied.`, () => {
    const project = new Project({
      ...MOCK_PROJECT,
      thumb_device_small: (false as unknown) as string,
    });
    expect(project.data.thumbDeviceSmall).toBe('');
    expect(project.getErrors().get('thumb_device_small')).toBeDefined();
  });

  it('Should store a valid small thumb url when supplied.', () => {
    const testThumbUrl = 'test_thumb_url';
    const project = new Project({
      ...MOCK_PROJECT,
      thumb_device_small: testThumbUrl,
    });
    expect(project.data.thumbDeviceSmall).toBe(testThumbUrl);
  });

  it(`Should handle an invalid medium thumb url when supplied.`, () => {
    const project = new Project({
      ...MOCK_PROJECT,
      thumb_device_medium: (false as unknown) as string,
    });
    expect(project.data.thumbDeviceMedium).toBe('');
    expect(project.getErrors().get('thumb_device_medium')).toBeDefined();
  });

  it('Should store a valid medium thumb url when supplied.', () => {
    const testThumbUrl = 'test_thumb_url';
    const project = new Project({
      ...MOCK_PROJECT,
      thumb_device_medium: testThumbUrl,
    });
    expect(project.data.thumbDeviceMedium).toBe(testThumbUrl);
  });

  it(`Should handle an invalid large thumb url when supplied.`, () => {
    const project = new Project({
      ...MOCK_PROJECT,
      thumb_device_large: (false as unknown) as string,
    });
    expect(project.data.thumbDeviceLarge).toBe('');
    expect(project.getErrors().get('thumb_device_large')).toBeDefined();
  });

  it('Should store a valid large thumb url when supplied.', () => {
    const testThumbUrl = 'test_thumb_url';
    const project = new Project({
      ...MOCK_PROJECT,
      thumb_device_large: testThumbUrl,
    });
    expect(project.data.thumbDeviceLarge).toBe(testThumbUrl);
  });

  it('Should discard empty tools.', () => {
    const project = new Project({
      ...MOCK_PROJECT,
      tools: ['one', '', 'three'],
    });
    expect(project.data.tools).toEqual(['one', 'three']);
  });

  it('Should discard tools that are not strings.', () => {
    const project = new Project({
      ...MOCK_PROJECT,
      tools: ['one', (37 as unknown) as string, 'three'],
    });
    expect(project.data.tools).toHaveLength(2);
  });

  it('Should store valid tools in the tools array within its data.', () => {
    const project = new Project({
      ...MOCK_PROJECT,
      tools: ['banana'],
    });
    expect(project.data.tools).toHaveLength(1);
  });
});
