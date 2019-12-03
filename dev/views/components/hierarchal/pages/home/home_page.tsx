/**
 * @fileoverview
 * Conatains the component for the home page.
 */

const CSS = require('./home_page.scss');
import * as React from 'react';
import { INTRO } from './intro';
import { Gallery } from './gallery';
import { v4 as uuid } from 'uuid';

type Props = {
  /** Function that gets the overview of the portfolio. */
  getOverview: () => void;
};

type State = {
  /** A list of portfolio projects held by the store. */
  projects: string[];
  /** A list of tools held by the store. */
  tools: string[];
};

/** The root component of the home page. */
export class HomePage extends React.Component<Props, State> {
  constructor(props: HomePage['props']) {
    super(props);
    this.props.getOverview();
  }

  /** Renders this component to the DOM. */
  render(): JSX.Element {
    return (
      <div className={CSS['root']}>
        <INTRO
          title={
            <>
              Jon
              <br />
              Richards
            </>
          }
          subtitle="Front-end Engineer"
        />
        <Gallery
          pieces={[
            {
              title: 'One In X',
              description: (
                <>
                  <p>Visualizing statistics in an interesting way.</p>
                </>
              ),
              uuid: uuid(),
            },
            {
              title: 'One In X',
              description: (
                <>
                  <p>Visualizing statistics in an interesting way.</p>
                </>
              ),
              uuid: uuid(),
            },
            {
              title: 'One In X',
              description: (
                <>
                  <p>Visualizing statistics in an interesting way.</p>
                </>
              ),
              uuid: uuid(),
            },
          ]}
        />
      </div>
    );
  }
}