import { Piece, PieceStoreNode } from './piece';
import { v4 as uuid } from 'uuid';

/** Test properties for instantiating a Piece. */
const mockPiece: PieceStoreNode = {
  uuid: 'abc-123',
  title: 'Test Piece',
  url: '/test_piece',
  description: 'A simple test piece.data.',
  thumbDeviceSmall: null,
  thumbDeviceMedium: null,
  thumbDeviceLarge: null,
  tools: [],
};

describe('The Piece class:', () => {
  it('Preserves a valid UUID when supplied.', () => {
    const testUUID = uuid();
    const piece = new Piece({
      ...mockPiece,
      uuid: testUUID,
    });
    expect(piece.data.uuid).toBe(testUUID);
  });

  it('Replaces properties of invalid types with valid ones.', () => {
    const piece = new Piece({
      ...mockPiece,
      title: (undefined as unknown) as string,
    });
    expect(piece.data.title).toBe('');
  });

  it('Replaces invalid null values with valid types.', () => {
    const piece = new Piece({
      ...mockPiece,
      title: (null as unknown) as string,
    });
    expect(piece.data.title).toBe('');
  });

  it('Assigns properties as null when nullable.', () => {
    const piece = new Piece({
      ...mockPiece,
      thumbDeviceSmall: null,
    });
    expect(piece.data.thumbDeviceSmall).toBe(null);
  });

  it('Preserves valid properties.', () => {
    const piece = new Piece({
      ...mockPiece,
      title: 'A Title',
    });
    expect(piece.data.title).toBe('A Title');
  });

  it('Discards tools with empty values.', () => {
    const piece = new Piece({
      ...mockPiece,
      tools: ['one', '', 'three'],
    });
    expect(piece.data.tools.length).toBe(2);
  });

  it('Discards tools of the wrong type.', () => {
    const piece = new Piece({
      ...mockPiece,
      tools: ['one', (undefined as unknown) as string, 'three'],
    });
    expect(piece.data.tools.length).toBe(2);
  });

  it('Preserves valid tools.', () => {
    const piece = new Piece({
      ...mockPiece,
      tools: ['banana'],
    });
    expect(piece.data.tools.length).toBe(1);
  });
});
