/**
 * @fileoverview
 * Contains the root component for the application.
 */

import * as React from 'react';
const CSS = require('./root.scss');
import { Preloader } from '../../presentational/preloader';
import { Header } from '../../presentational/header';
import { HomePage } from '../home_page';

type Props = {
  /** Initializes the application. */
  initialize(): void;
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
          <HomePage/>
        </main>
      </div>
    );
  }
}