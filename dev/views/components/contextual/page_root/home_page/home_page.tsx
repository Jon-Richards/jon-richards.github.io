/**
 * @fileoverview
 * Conatains the component for the home page.
 */

const CSS = require('./home_page.scss');
import * as React from 'react';
import { Intro } from './intro/intro';
import { Gallery } from './gallery';
import { v4 as uuid } from 'uuid';

type Project = {
  /** The title of the project as displayed to the user. */
  title: string;
};

type Props = {
  /** Array of projects to display in the gallery. */
  projects: Project[];
};

/** The root component of the home page. */
export class HomePage extends React.PureComponent<Props, never> {
  /** Renders this component to the DOM. */
  render(): JSX.Element {
    return (
      <div className={CSS['root']}>
        {!this.props.projects.length && (<>LOADING</>)}
        <Intro
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