/**
 * @fileoverview
 * Contains the root component for the application.
 */

import * as React from 'react';
const CSS = require('./root.scss');
import { Preloader } from '../../components/preloader';
import { Header } from '../../components/header';
import { HomePage } from '../home_page';
import { RootStore } from 'Store/root_reducer';

type Props = {
  /** Initializes the application. */
  initialize(): void;
  /** Portfolio projects passed to various pages. */
  projects: RootStore['portfolio']['projects'];
  /** Tools used to create various projects. */
  tools: RootStore['portfolio']['tools'];
  /** Possible media query IDs that can match the runtime environment. */
  possibleMediaQueries: RootStore['browser']['possible_media_queries'];
  /** Media query IDs that match the current environment. */
  matchingMediaQueries: RootStore['browser']['matching_media_queries'];
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
          <HomePage
            projects={this.props.projects}
            tools={this.props.tools}
            matchingMediaQueries={this.props.matchingMediaQueries}
          />
        </main>
      </div>
    );
  }
}