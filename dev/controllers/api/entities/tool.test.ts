import { Tool, ToolResponseShape } from './tool';
import { isUUID, uuid} from './mediator';

/** Test properties for instantiating a Tool. */
const mockTool: ToolResponseShape = {
    id: 1,
    uuid: uuid(),
    display_title: 'Test Piece',
    filterable_value: 'test_piece',
    logo: 'logo.png',
    is_core: true
};

describe('The Tool API entity class.', () => {
    
    describe('The id field.', () => {
        test(`If the id is not a number, the id is replaced with ${Tool.STUBS.id}`, () => {
            const tool = new Tool({
                ...mockTool, 
                id: 'banana' as unknown as number
            });
            expect(tool.id).toEqual(Tool.STUBS.id);
        });

        test('If the id is a number, the id is written to the Tools id property', () => {
            const tool = new Tool({
                ...mockTool, 
                id: 12
            });
            expect(tool.id).toEqual(12);
        });
    });

    describe('The UUID field.', () => {
        test('If the UUID is invalid, it is replaced with an empty string.', () => {
            const tool = new Tool({
                ...mockTool,
                uuid: undefined as unknown as string
            });
            expect( tool.uuid ).toBe( Tool.STUBS.uuid );
        });

        test('If the UUID is valid, the tool\'s UUID is the supplied UUID', () => {
            const testUUID = uuid();
            const tool = new Tool({
                ...mockTool, 
                uuid: testUUID
            });
            expect( tool.uuid ).toBe( testUUID );
        });
    });

    describe('The display_title filed.', () => {
        test('If the display_title is invalid, it is replaced with an empty string.', () => {
            const withNull = new Tool({
                ...mockTool, 
                display_title: null as unknown as string
            });
            const withUndefined = new Tool({
                ...mockTool, 
                display_title: undefined as unknown as string
            });
            const withBogus = new Tool({...mockTool, 
                display_title: 789 as unknown as string
            });
            
            expect( withNull.displayTitle ).toBe(Tool.STUBS.displayTitle);
            expect( withUndefined.displayTitle ).toBe(Tool.STUBS.displayTitle);
            expect( withBogus.displayTitle ).toBe(Tool.STUBS.displayTitle);
        });

        test(
            'If the display_title is a string, it is written to the DisplayTitle property.',
            () => {
                const tool = new Tool({
                    ...mockTool, 
                    display_title: 'I am a display title!'
                });
                expect( tool.displayTitle ).toBe('I am a display title!');
            }
        );
    });

    describe('The filterable_value field', () => {
        test('If the filterableinvalid, it is replaced with an empty string.', () => {
            const tool = new Tool({
                ...mockTool, 
                filterable_value: undefined as unknown as string
            });
            expect( tool.filterableValue ).toBe(Tool.STUBS.filterableValue);
        });

        test('If the filterable value is null, it is replaced with an empty string.', () => {
            const tool = new Tool({
                ...mockTool, 
                filterable_value: null as unknown as string
            });
            expect( tool.filterableValue ).toBe(Tool.STUBS.filterableValue);
        });

        test('If the filterable value the wrong type, it is replaced with an empty string.', () => {
            const tool = new Tool({
                ...mockTool, 
                filterable_value: 123 as unknown as string
            });
            expect( tool.filterableValue ).toBe(Tool.STUBS.filterableValue);
        });

        test(
            'If the filterable value is not URL safe, it is replaced with an empty string.', 
            () => {
                const tool = new Tool({
                    ...mockTool, 
                    filterable_value: 'I have spaced and $special# characters!'
                });
                expect( tool.filterableValue ).toBe(Tool.STUBS.filterableValue);
            }
        );

        test(
            'If the filterable value is a URL safe string, ' +
            'it is written to the FilterableValue property.', 
            () => {
                const tool = new Tool({
                    ...mockTool, 
                    filterable_value: 'a-filterable_value'
                });
                expect( tool.filterableValue ).toBe('a-filterable_value');
            }
        );
    });

    describe('The logo field.', () => {
        test('If the logo is undefined, it is replaced with an empty string.', () => {
            const tool = new Tool({
                ...mockTool, 
                logo: undefined as unknown as string
            });
            expect( tool.logo ).toBe(Tool.STUBS.logo);
        });

        test('If the logo is null, it is replaced with an empty string.', () => {
            const tool = new Tool({
                ...mockTool, 
                logo: null as unknown as string
            });
            expect( tool.logo ).toBe(Tool.STUBS.logo);
        });

        test('If the logo the wrong type, it is replaced with an empty string.', () => {
            const tool = new Tool({
                ...mockTool, 
                logo: 123 as unknown as string
            });
            expect( tool.logo ).toBe(Tool.STUBS.logo);
        });

        test('If the logo is not URL safe, it is replaced with an empty string.', () => {
            const tool = new Tool({
                ...mockTool, 
                logo: 'I have spaced and $special# characters!'
            });
            expect( tool.logo ).toBe(Tool.STUBS.logo);
        });

        test(
            'If the logo is a URL safe string, ' +
            'it is written to the logo property.', 
            () => {
                const tool = new Tool({
                    ...mockTool, 
                    logo: 'a-filterable_value'
                });
                expect( tool.logo ).toBe('a-filterable_value');
            }
        );
    });

    describe('The is_core field.', () => {
        test(`If the is_core is undefined, it is replaced with ${Tool.STUBS.isCore}.`, () => {
            const tool = new Tool({
                ...mockTool, 
                is_core: undefined as unknown as boolean
            });
            expect( tool.isCore ).toBe(Tool.STUBS.isCore);
        });

        test(`If the is_core is null, it is replaced with ${Tool.STUBS.isCore}.`, () => {
            const tool = new Tool({
                ...mockTool, 
                is_core: null as unknown as boolean
            });
            expect( tool.isCore ).toBe(Tool.STUBS.isCore);
        });

        test(
            `If the is_core is of the wrong type, it is replaced with ${Tool.STUBS.isCore}.`, 
            () => {
                const tool = new Tool({
                    ...mockTool, 
                    is_core: 'banana' as unknown as boolean
                });
                expect( tool.isCore ).toBe(Tool.STUBS.isCore);
            }
        );

        test('If the is_core is a boolean, it is written to the isCore property.', () => {
            const tool = new Tool({
                ...mockTool, 
                is_core: true
            });
            expect( tool.isCore ).toBe(true);
        });
    });
});