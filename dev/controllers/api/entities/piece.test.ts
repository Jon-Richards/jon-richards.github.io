import { Piece, PieceResponseShape } from './piece';
import { isUUID, uuid} from './mediator';

/** Test properties for instantiating a Piece. */
const mockPiece: PieceResponseShape = {
    id: 1,
    uuid: 'abc-123',
    display_title: 'Test Piece',
    url_title: '/test_piece',
    description: 'A simple test piece.',
    thumb_device_small: null,
    thumb_device_medium: null,
    thumb_device_large: null,
    tools: [],
};

describe('The Piece API entity class.', () => {

    test(`If the id is undefined, the id is replaced with ${Piece.STUBS.ID}.`, () => {
        const piece = new Piece({
            ...mockPiece, 
            id: undefined as unknown as number
        });
        expect(piece.id).toBe(Piece.STUBS.ID);
    });

    test(`If the UUID is invalid, it is replaced with ${Piece.STUBS.UUID}.`, () => {
        const piece = new Piece({
            ...mockPiece, 
            uuid: 'abc-123' as unknown as string
        });
        expect(piece.uuid).toBe(Piece.STUBS.UUID);
    });

    test('If the UUID is valid, the piece\'s UUID is the supplied UUID', () => {
        const testUUID = uuid();
        const piece = new Piece({
            ...mockPiece, 
            uuid: testUUID
        });
        expect( piece.uuid ).toBe( testUUID );
    });

    test(
        'If a property is an invalid type, it should be replaced with its corresponding stub.',
        () => {
            const piece = new Piece({
                ...mockPiece,
                display_title: undefined as unknown as string
            });
            expect( piece.displayTitle ).toBe(Piece.STUBS.DISPLAY_TITLE);
        }
    );

    test('If a property is valid, it should appear as the piece\'s corresponding property', () => {
        const piece = new Piece({
            ...mockPiece, 
            display_title: 'A Title'
        });
        expect( piece.displayTitle ).toBe( 'A Title' );
    });

    test('If a tool is empty, it should be discarded.', () => {
        const piece = new Piece({
            ...mockPiece, 
            tools: ['one', '', 'three']
        });
        expect( piece.tools ).toEqual( ['one', 'three'] );
    });

    test('If a tool is not of type "string", it should be discarded.', () => {
        const piece = new Piece({
            ...mockPiece, 
            tools: ['one', 37 as unknown as string, 'three']
        });
        expect(piece.tools).toHaveLength(2);
    });

    test(
        'If a tool is of type "string" and not empty, it should appear in the tools array.', 
        () => {
            const piece = new Piece({
                ...mockPiece, 
                tools: ['banana']
            });
            expect( piece.tools).toHaveLength(1);
    });
});