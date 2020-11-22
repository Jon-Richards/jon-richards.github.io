import { ImageResponseData } from '../image';
import { v4 as uuid } from 'uuid';

/**
 * Mocks an ImageResponseData type, calculating unique values where needed.  If
 * a field is nullable, it will returned as null by default.
 * @param data A complete or partial ImageResponseData type.  The provided
 * fields of which will appear in the return value.
 * @return A valid ImageResponseData type.
 */
export function imageResponseData(
  data: Partial<ImageResponseData> = {}
): ImageResponseData {
  const stubUUID = uuid();

  return {
    id: Math.ceil(Math.random() * 1000000000),
    uuid: stubUUID,
    category: 'thumbnail',
    width: 400,
    height: 400,
    description: 'This is a description of the image.',
    source: 'https://www.google.com',
    ...data,
  };
}
