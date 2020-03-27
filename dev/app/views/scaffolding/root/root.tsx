/**
 * @fileoverview
 * Contains the root component for the application.
 */

import * as React from 'react';
const CSS = require('./root.scss');
import { Preloader } from '../../presentational/preloader';
import { Header } from '../../presentational/header';
import { HomePage } from '../home_page';
import { ROUTES } from 'Config/routes';

type Props = {
  /** Initializes the application. */
  initialize(): void;
  /** The scheme for the current route. */
  route: string;
};

type State = {
  /** The overall status of the application. */
  status: 'initializing' | 'loading' | 'ready';
};

/**
 * The root of the component tree.   
 * Scaffolds the page, initializes the application once the Store has been
 * created and  coordinates how the overall state of the application displays.
 */
export class Root extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      status: 'initializing'
    };
    this.props.initialize();
  }

  /**
   * Handles status updates from child components and updates the overall.
   * application state accordingly.
   */
  updateApplicationState = (status: State['status']): void => {
    this.setState({ status });
  }

  /** Renders the root layout to the DOM. */
  render(): JSX.Element {
    return (
      <div className={`${CSS['root']} root--${this.state.status}`}>
        <Preloader />
        <Header />
        <main className={CSS['main']}>
          {(
            this.props.route === ROUTES.home ||
            this.props.route === ROUTES.portfolio_piece
          ) && (
            <HomePage/>
          )}
          {this.props.route === ROUTES.error && (
            <div>Error</div>
          )}
        </main>
      </div>
    );
  }
}