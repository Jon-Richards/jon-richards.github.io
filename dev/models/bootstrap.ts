/*
 * ---------------  State  ---------------
 */

/** Bootstrap state tree. */
export interface IBootstrapState {
    foo: string;
}

const defaultBootstrapState: IBootstrapState = {
    foo: 'bar',
};

/*
 * --------------- Action Creators  ---------------
 */

/** Changes the "foo" property of the bootstrap state tree. */
export interface ITestAction {
    type: string;
    foo: string;
}

/** Just a test action. */
export function test(): ITestAction {
    return {
        foo: 'bar',
        type: 'TEST_ACTION',
    };
}

type Actions = ITestAction;

/*
 * ---------------  Reducer  ---------------
 */

export function bootstrapReducer(state: IBootstrapState = defaultBootstrapState, action: Actions): IBootstrapState {
    switch (action.type) {
        case 'TEST_ACTION':
            return {
                ...state,
                foo: action.foo,
            };
        default:
            return state;
    }
}
