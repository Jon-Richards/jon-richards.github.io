/**
 * @fileoverview
 * Conatains the component for the home page.
 */

const CSS = require('./home_page.scss');
import * as React from 'react';
import { INTRO } from './intro';
import { Gallery } from './gallery';
import { v4 as uuid } from 'uuid';

/** The root component of the home page. */
export class HomePage extends React.Component<
  {},
  never
> {
  constructor(props: HomePage['props']) {
    super(props);
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
