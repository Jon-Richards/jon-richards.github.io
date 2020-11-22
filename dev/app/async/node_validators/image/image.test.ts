import { ImageValidator } from './image';
import { imageResponseData } from './__mocks__/image_response_data';

describe('The Image validator.', () => {
  it('Should store an error when an invalid property is passed.', () => {
    const image = new ImageValidator(
      imageResponseData({
        id: (undefined as unknown) as number,
      }),
    );
    expect(image.getErrors().size).toBe(1);
  });

  it('Should handle an invalid id property when supplied.', () => {
    const image = new ImageValidator(
      imageResponseData({
        id: (undefined as unknown) as number,
      }),
    );
    expect(image.data.id).toBe(0);
    expect(image.getErrors().get('id')).toBeDefined();
  });

  it('Should handle an invalid uuid property when supplied.', () => {
    const image = new ImageValidator(
      imageResponseData({
        uuid: ('abc-123' as unknown) as string,
      }),
    );
    expect(image.data.uuid).toBe('');
    expect(image.getErrors().get('uuid')).toBeDefined();
  });

  it('Should handle an invalid category property when supplied.', () => {
    const image = new ImageValidator(
      imageResponseData({
        category: (undefined as unknown) as string,
      }),
    );
    expect(image.data.category).toBe('');
    expect(image.getErrors().get('category')).toBeDefined();
  });

  it('Should handle an invalid width property when supplied.', () => {
    const image = new ImageValidator(
      imageResponseData({
        width: ('apple' as unknown) as number,
      }),
    );
    expect(image.data.width).toBe(0);
    expect(image.getErrors().get('width')).toBeDefined();
  });

  it('Should handle an invalid height property when supplied.', () => {
    const image = new ImageValidator(
      imageResponseData({
        height: ('aardvark' as unknown) as number,
      }),
    );
    expect(image.data.height).toBe(0);
    expect(image.getErrors().get('height')).toBeDefined();
  });

  it('Should handle an invalid description property when supplied.', () => {
    const image = new ImageValidator(
      imageResponseData({
        description: (42 as unknown) as string,
      }),
    );
    expect(image.data.description).toBe('');
    expect(image.getErrors().get('description')).toBeDefined();
  });

  it('Should handle an invalid source property when supplied.', () => {
    const image = new ImageValidator(
      imageResponseData({
        source: (false as unknown) as string,
      }),
    );
    expect(image.data.source).toBe('');
    expect(image.getErrors().get('source')).toBeDefined();
  });
});
