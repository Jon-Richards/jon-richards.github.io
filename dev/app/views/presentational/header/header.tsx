/** @jsx jsx */

import * as React from 'react';
import { css, jsx } from '@emotion/core';
import { STYLES } from './styles';
import { Nav } from '../nav';

/** The main header of the page. */
export class Header extends React.Component<Record<string, unknown>, never> {
  /** Renders the header to the DOM. */
  render (): JSX.Element {
    return (
      <header css={css(STYLES.header)}>
        <Nav />
      </header>
    );
  }
}
