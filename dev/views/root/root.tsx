import * as React from 'react';
import {connect} from 'react-redux';
import {IStore} from '../../models/store';
import './root.scss';

export class Root extends React.Component<IStore, never> {
    public render(): JSX.Element {
        console.log(this.props.bootstrap.foo);
        return (
            <div className='grid-container--fluid'>
                <div className='grid-0--12 grid-0-flush test'>
                    Test
                </div>
            </div>
        );
    }
}

const mapStateToProps = (store: IStore) => {
    return {
        bootstrap: store.bootstrap,
    };
};

const mapDispatchToProps = () => {
    return {};
};

export const RootContainer = connect(mapStateToProps, mapDispatchToProps)(Root);
