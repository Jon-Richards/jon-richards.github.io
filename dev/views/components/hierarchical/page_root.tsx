/**
 * @fileoverview
 * Contains the root component for the application.
 */

import * as React from 'react';
const CSS = require('./page_root.scss');
import { Preloader } from '../shared/preloader';
import { Header } from '../shared/header';
import { HomePage } from './pages';

type Props = {
  /** Initializes the application. */
  initilize(): void;
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
export class PageRoot extends React.Component<{}, State> {
  constructor(props: PageRoot['props']) {
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
      <div className={`${CSS['root']} page_root--${this.state.status}`}>
        <Preloader />
        <Header />
        <main className={CSS['main']}>
          <HomePage />
        </main>
      </div>
    );
  }
}
