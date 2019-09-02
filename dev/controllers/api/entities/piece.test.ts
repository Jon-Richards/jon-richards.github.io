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

    test('If the id is not a number, the id is replaced with -1', () => {
        const piece = new Piece({
            ...mockPiece, 
            id: 'banana' as unknown as number
        });
        expect(piece.id).toEqual(-1);
    });

    test('If the UUID is undefined, a valid UUID is created.', () => {
        const piece = new Piece({
            ...mockPiece, 
            uuid: undefined as unknown as string
        });
        expect( isUUID(piece.uuid) ).toBe( true );
    });

    test('If the UUID is empty, a valid UUID is created.', () => {
        const piece = new Piece({
            ...mockPiece, 
            uuid: ''
        });
        expect( isUUID(piece.uuid) ).toBe( true );
    });

    test('If the UUID is invalid, the invalid UUID is replaced with a valid one.', () => {
        const piece = new Piece({
            ...mockPiece, 
            uuid: 'abc-123'
        });
        expect( isUUID(piece.uuid) ).toBe( true );
    });

    test('If the UUID is valid, the piece\'s UUID is the supplied UUID', () => {
        const testUUID = uuid();
        const piece = new Piece({
            ...mockPiece, 
            uuid: testUUID
        });
        expect( piece.uuid ).toBe( testUUID );
    });

    test('If a property is an invalid type, it should be replaced with a valid type.', () =>
        {
            const piece = new Piece({
                ...mockPiece,
                display_title: undefined as unknown as string
            });
            expect( piece.displayTitle ).toBe( '' );
        }
    );

    test(
        'If a property is not nullable and is null, it should be replaced with a valid value', 
        () => {
            const piece = new Piece({
                ...mockPiece, 
                display_title: null as unknown as string
            });
            expect( piece.displayTitle ).toBe( '' );
        }
    );

    test('If a property is nullable and is null, it should be null.', () => {
        const piece = new Piece({
            ...mockPiece, 
            thumb_device_small: null
        });
        expect( piece.thumbDeviceSmall ).toBe( null );
    });

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
        expect( piece.tools.length ).toBe(2);
    });

    test('If a tool is not of type "string", it should be discarded.', () => {
        const piece = new Piece({
            ...mockPiece, 
            tools: ['one', undefined as unknown as string, 'three']
        });
        expect( piece.tools.length ).toBe(2);
    });

    test(
        'If a tool is of type "string" and not empty, it should appear in the tools array.', 
        () => {
            const piece = new Piece({
                ...mockPiece, 
                tools: ['banana']
            });
            expect( piece.tools.length ).toBe(1);
    });
});