/** @jsx jsx */

import * as React from 'react';
import { css, jsx } from '@emotion/core';
import { STYLES } from './styles';

/** The main navigation. */
export class Nav extends React.Component<{}, never> {
  /** Renders the navigation to the DOM. */
  render(): JSX.Element {
    return (
      <nav css={css(STYLES.root)} role="navigation">
        <a href="#" css={css(STYLES.link)}>
          Work
        </a>
        <a href="#" css={css(STYLES.link)}>
          Resume
        </a>
        <a href="#" css={css(STYLES.link)}>
          Contact
        </a>
      </nav>
    );
  }
}
