import * as React from 'react';
import {connect} from 'react-redux';
import {IStore} from '../../models/store';

class Root extends React.Component<IStore, never> {
    public render(): JSX.Element {
        console.log(this.props.bootstrap.foo);
        return (
            <div>test {this.props.bootstrap.foo}</div>
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
