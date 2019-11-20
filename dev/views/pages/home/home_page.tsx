/**
 * @fileoverview
 * Conatains the component for the home page.
 */

const CSS = require('./home_page.scss');
import * as React from 'react';
import { PageTemplate } from '../../lib/components/page_template';
import { INTRO } from './intro';
import { Gallery } from './gallery';
import { v4 as uuid } from 'uuid';

/** The root component of the home page. */
export class HomePage extends React.Component<
  {
    /** Gets an overview of the portfolio including pieces and toosl used. */
    getProjects(): void;
  },
  never
> {
  constructor(props: HomePage['props']) {
    super(props);
    props.getProjects();
  }
  /** Renders this component to the DOM. */
  render(): JSX.Element {
    return (
      <PageTemplate>
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
      </PageTemplate>
    );
  }
}
