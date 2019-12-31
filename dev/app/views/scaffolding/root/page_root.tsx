/**
 * @fileoverview
 * Contains the root component for the application.
 */

import * as React from 'react';
const CSS = require('./page_root.scss');
import { Preloader } from '../../components/preloader';
import { Header } from '../../components/header';
import { HomePage } from './home_page';
import { PortfolioProject } from 'Views/scaffolding/interfaces';

type Props = {
  /** Initializes the application. */
  initialize(): void;
  /** Portfolio projects passed to various pages. */
  projects: PortfolioProject[];
  // /** Possible media query IDs that can match the runtime environment. */
  // possibleMediaQueryies: string[];
  // /** Media query IDs that match the current environment. */
  // matchingMediaQueries: string[];
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
export class PageRoot extends React.Component<Props, State> {
  constructor(props: PageRoot['props']) {
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
      <div className={`${CSS['root']} page_root--${this.state.status}`}>
        <Preloader />
        <Header />
        <main className={CSS['main']}>
          <HomePage projects={this.props.projects} />
        </main>
      </div>
    );
  }
}