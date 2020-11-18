/** @jsx jsx */

import * as React from 'react';
import { Preloader } from '../../presentational/preloader';
import { Header } from '../../presentational/header';
import { HomePage } from '../home_page';
import { ROUTES } from 'Config/routes';
import { css, jsx } from '@emotion/core';
import { GlobalStyles } from './global_styles';
import { STYLES } from './styles';

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
      status: 'initializing',
    };
    this.props.initialize();
  }

  updateApplicationState = (status: State['status']): void => {
    this.setState({ status });
  };

  render(): JSX.Element {
    return (
      <React.Fragment>
        <GlobalStyles />
        <div css={css(STYLES.root)}>
          <Preloader />
          <Header />
          <main css={css(STYLES.main)}>
            {(this.props.route === ROUTES.home ||
              this.props.route === ROUTES.portfolio_piece) && <HomePage />}
            {this.props.route === ROUTES.error && <div>Error</div>}
          </main>
        </div>
      </React.Fragment>
    );
  }
}
