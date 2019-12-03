/**
 * @fileoverview
 * Contains the React Component that wraps the application.
 */

import * as React from 'react';
import { HomePage } from './home';

/** The root application component. */
export class Root extends React.Component<
  {
    /** Gets an overview of the portfolio, including the resume. */
    getOverview(): void;
  },
  never
> {
  constructor(props: Root['props']) {
    super(props);
    props.getOverview();
  }

  /** Returns the rendered component as JSX. */
  render(): JSX.Element {
    return (
      <>
        <HomePage />
      </>
    );
  }
}
