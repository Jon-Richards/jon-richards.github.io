/**
 * @fileoverview
 * Contains tests for the PieceManager class.
 */

import { PieceManager, Piece, PieceShape, uuid } from './mediator';

/** Generates a PieceShape for testing. */
const createPieceShape = (): PieceShape => ({
  uuid: uuid(),
  title: uuid(),
  url: uuid(),
  description: 'Some description.',
  thumbDeviceSmall: '/small.png',
  thumbDeviceMedium: '/small.png',
  thumbDeviceLarge: '/small.png',
  tools: ['a', 'b', 'c'],
});

/** Array of pieces for testing. */
describe('The PieceManager class', () => {
  it('Maps an array of provided PieceShapes to instances of Piece.', () => {
    const testPieces: PieceShape[] = [
      { ...createPieceShape(), title: 'test 1', url: 'a' },
      { ...createPieceShape(), title: 'test 2', url: 'b' },
      { ...createPieceShape(), title: 'test 3', url: 'c' },
    ];
    const testManager = new PieceManager(testPieces);

    testManager.pieces.forEach(piece => {
      expect(piece).toBeInstanceOf(Piece);
    });
  });

  it('Discards invalid PieceShape objects.', () => {
    const testPieces: PieceShape[] = [
      { ...createPieceShape(), title: (6 as unknown) as string, url: 'a' },
      { ...createPieceShape(), url: (6 as unknown) as string },
      { ...createPieceShape(), uuid: (6 as unknown) as string },
      { ...createPieceShape(), title: 'test 2', url: 'b' },
    ];
    const testManager = new PieceManager(testPieces);

    expect(testManager.pieces.length).toEqual(1);
  });

  it('Discards Pieces with titles that have already been used.', () => {
    const testPieces: PieceShape[] = [
      { ...createPieceShape(), title: 'foo' },
      { ...createPieceShape(), title: 'foo' },
      { ...createPieceShape(), title: 'bar' },
    ];
    const testManager = new PieceManager(testPieces);

    expect(testManager.pieces.length).toEqual(2);
  });

  it('Discards Pieces with UUIDs that have already been used.', () => {
    const testUUID = uuid();
    const testPieces: PieceShape[] = [
      { ...createPieceShape(), uuid: testUUID },
      { ...createPieceShape(), uuid: testUUID },
      { ...createPieceShape() },
    ];
    const testManager = new PieceManager(testPieces);

    expect(testManager.pieces.length).toEqual(2);
  });

  it('Discards Pieces with urls that have already been used.', () => {
    const testPieces: PieceShape[] = [
      { ...createPieceShape(), url: '/foo' },
      { ...createPieceShape(), url: '/foo' },
      { ...createPieceShape(), url: '/bar' },
    ];
    const testManager = new PieceManager(testPieces);

    expect(testManager.pieces.length).toEqual(2);
  });
});
