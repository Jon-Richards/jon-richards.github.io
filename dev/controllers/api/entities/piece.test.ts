import { Piece, PieceResponseData } from './piece';
import { uuid } from './mediator';

/** Test properties for instantiating a Piece. */
export const MOCK_PIECE: PieceResponseData = {
  id: 1,
  uuid: uuid(),
  display_title: 'Test Piece',
  url_title: '/test_piece',
  description: 'A simple test piece.',
  thumb_device_small: null,
  thumb_device_medium: null,
  thumb_device_large: null,
  tools: [],
};

describe('The Piece API entity class.', () => {
  it(`Should replace an invalid id with an empty string.`, () => {
    const piece = new Piece({
      ...MOCK_PIECE,
      id: (undefined as unknown) as number,
    });
    expect(piece.data.id).toBe(0);
  });

  it(`Should store an error when an invalid property is passed.`, () => {
    const piece = new Piece({
      ...MOCK_PIECE,
      id: (undefined as unknown) as number,
    });
    expect(piece.getErrors().size).toBe(1);
  });

  it(`Should handle an invalid uuid property when supplied.`, () => {
    const piece = new Piece({
      ...MOCK_PIECE,
      uuid: ('abc-123' as unknown) as string,
    });
    expect(piece.data.uuid).toBe('');
    expect(piece.getErrors().get('uuid')).toBeDefined();
  });

  it('Should store a valid UUID when supplied.', () => {
    const testUUID = uuid();
    const piece = new Piece({
      ...MOCK_PIECE,
      uuid: testUUID,
    });
    expect(piece.data.uuid).toBe(testUUID);
  });

  it(`Should handle an invalid display title when supplied.`, () => {
    const piece = new Piece({
      ...MOCK_PIECE,
      display_title: false as unknown as string,
    });
    expect(piece.data.displayTitle).toBe('');
    expect(piece.getErrors().get('display_title')).toBeDefined();
  });

  it('Should store a valid display title when supplied.', () => {
    const testDisplayTitle = 'Hello world!';
    const piece = new Piece({
      ...MOCK_PIECE,
      display_title: testDisplayTitle,
    });
    expect(piece.data.displayTitle).toBe(testDisplayTitle);
  });

  it(`Should handle an invalid url title when supplied.`, () => {
    const piece = new Piece({
      ...MOCK_PIECE,
      url_title: false as unknown as string,
    });
    expect(piece.data.urlTitle).toBe('');
    expect(piece.getErrors().get('url_title')).toBeDefined();
  });

  it('Should store a valid url title when supplied.', () => {
    const testURLTitle = 'test_title';
    const piece = new Piece({
      ...MOCK_PIECE,
      url_title: testURLTitle,
    });
    expect(piece.data.urlTitle).toBe(testURLTitle);
  });

  it(`Should handle an invalid description when supplied.`, () => {
    const piece = new Piece({
      ...MOCK_PIECE,
      description: false as unknown as string,
    });
    expect(piece.data.description).toBe('');
    expect(piece.getErrors().get('description')).toBeDefined();
  });

  it('Should store a valid description when supplied.', () => {
    const testURLTitle = 'tdescription';
    const piece = new Piece({
      ...MOCK_PIECE,
      description: testURLTitle,
    });
    expect(piece.data.description).toBe(testURLTitle);
  });

  it(`Should handle an invalid small thumb url when supplied.`, () => {
    const piece = new Piece({
      ...MOCK_PIECE,
      thumb_device_small: false as unknown as string,
    });
    expect(piece.data.thumbDeviceSmall).toBe('');
    expect(piece.getErrors().get('thumb_device_small')).toBeDefined();
  });

  it('Should store a valid small thumb url when supplied.', () => {
    const testThumbUrl = 'test_thumb_url';
    const piece = new Piece({
      ...MOCK_PIECE,
      thumb_device_small: testThumbUrl,
    });
    expect(piece.data.thumbDeviceSmall).toBe(testThumbUrl);
  });

  it(`Should handle an invalid medium thumb url when supplied.`, () => {
    const piece = new Piece({
      ...MOCK_PIECE,
      thumb_device_medium: false as unknown as string,
    });
    expect(piece.data.thumbDeviceMedium).toBe('');
    expect(piece.getErrors().get('thumb_device_medium')).toBeDefined();
  });

  it('Should store a valid medium thumb url when supplied.', () => {
    const testThumbUrl = 'test_thumb_url';
    const piece = new Piece({
      ...MOCK_PIECE,
      thumb_device_medium: testThumbUrl,
    });
    expect(piece.data.thumbDeviceMedium).toBe(testThumbUrl);
  });

  it(`Should handle an invalid large thumb url when supplied.`, () => {
    const piece = new Piece({
      ...MOCK_PIECE,
      thumb_device_large: false as unknown as string,
    });
    expect(piece.data.thumbDeviceLarge).toBe('');
    expect(piece.getErrors().get('thumb_device_large')).toBeDefined();
  });

  it('Should store a valid large thumb url when supplied.', () => {
    const testThumbUrl = 'test_thumb_url';
    const piece = new Piece({
      ...MOCK_PIECE,
      thumb_device_large: testThumbUrl,
    });
    expect(piece.data.thumbDeviceLarge).toBe(testThumbUrl);
  });

  it('Should discard empty tools.', () => {
    const piece = new Piece({
      ...MOCK_PIECE,
      tools: ['one', '', 'three'],
    });
    expect(piece.data.tools).toEqual(['one', 'three']);
  });

  it('Should discard tools that are not strings.', () => {
    const piece = new Piece({
      ...MOCK_PIECE,
      tools: ['one', (37 as unknown) as string, 'three'],
    });
    expect(piece.data.tools).toHaveLength(2);
  });

  it('Should store valid tools in the tools array within its data.', () => {
    const piece = new Piece({
      ...MOCK_PIECE,
      tools: ['banana'],
    });
    expect(piece.data.tools).toHaveLength(1);
  });
});
