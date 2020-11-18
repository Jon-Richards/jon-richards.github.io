import { ProjectResponseData } from '../project';
import { v4 as uuid } from 'uuid';

/**
 * Mocks a ProjectResponseData type, calculating unique values where needed.  If
 * a field is nullable, it will returned as null by default.
 * @param data A complete or partial ProjectResponseData type.  The provided
 * fields of which will appear in the return value.
 * @return A valid ProjectResponseData type.
 */
export function projectResponseData(
  data: Partial<ProjectResponseData> = {}
): ProjectResponseData {
  const stubUUID = uuid();

  return {
    id: Math.ceil(Math.random() * 1000000000),
    uuid: stubUUID,
    display_title: `Project Title ${stubUUID}`,
    url_title: `project-title-${stubUUID}`,
    description: `Project description for project: ${stubUUID}`,
    thumb_device_small: null,
    thumb_device_medium: null,
    thumb_device_large: null,
    tools: [],
    ...data,
  };
}
