import * as Redux from 'redux';

/*
 * ---------------  State  ---------------
 */

/** Bootstrap state tree. */
export interface IBootstrapState {
    foo: string;
}

const defaultBootstrapState: IBootstrapState = {
    foo: '',
};

/*
 * --------------- Action Creators  ---------------
 */

/** Changes the "foo" property of the bootstrap state tree. */
export interface ITestActionAction {
    type: string;
    foo: string;
}

/** Just a test action. */
export function testAction(): ITestActionAction {
    return {
        foo: 'bar',
        type: 'TEST_ACTION',
    };
}

type Actions = ITestActionAction;

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
    }
    return state;
}
