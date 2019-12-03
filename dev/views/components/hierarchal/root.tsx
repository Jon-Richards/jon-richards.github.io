/**
 * @fileoverview
 * Contains the root component for the application.
 */

import * as React from 'react';
const CSS = require('./root.scss');
import { Preloader } from '../shared/preloader';
import { Header } from '../shared/header';
import { HomePage } from './pages/home';

type State = {
  /** The overall status of the application. */
  status: 'initializing' | 'loading' | 'ready';
};

/** 
 * Scaffolds the page and coordinates how the overall state of the application
 * is displayed.
 * 
 * **Note:** This is strictly a presentation component.  Although the Store
 * should be available through a Provider component, to prevent unncessary
 * renders,  _this_ component does not make direct use of any of its props.
 */
export class Root extends React.Component<{}, State> {
  constructor(props: Root['props']) {
    super(props);
    this.state = {
      status: 'initializing'
    };
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
      <div className={`${CSS['root']} ${'page--' + this.state.status}`}>
        <Preloader />
        <Header />
        <main className={CSS['main']}>
          <HomePage />
        </main>
      </div>
    );
  }
}
