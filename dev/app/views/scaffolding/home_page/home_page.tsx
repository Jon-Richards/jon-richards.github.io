/**
 * @fileoverview
 * Conatains the component for the home page.
 */

const CSS = require('./home_page.scss');
import * as React from 'react';
import { 
  Intro,
  IntroProps
} from 'Views/components/intro';
import { Gallery } from './gallery';
import { v4 as uuid } from 'uuid';
import { RootStore } from 'Store/root_reducer';

type Props = {
  /** Array of projects to display in the gallery. */
  projects: RootStore['portfolio']['projects'];
  /** An array of tools used to create various projects. */
  tools: RootStore['portfolio']['tools'];
  /** Media queries that match the current environemnt. */
  matchingMediaQueries: RootStore['browser']['matching_media_queries'];
};

/** The root component of the home page. */
export class HomePage extends React.PureComponent<Props, never> {
  private resolveIntroTheme = (): IntroProps['theme'] => {
    const queries = this.props.matchingMediaQueries.map(query => query.id);
    if (queries.includes('480')) {
      return 'PANEL';
    } else {
      return 'COPY';
    }
  }
  
  /** Maps this component's tools prop to display as skills in the intro. */
  private mapToolsToSkills = (): IntroProps['skills'] => {
    const tools = this.props.tools;
    return tools.map(tool => (
      {
        uuid: tool.uuid,
        displayLabel: tool.display_title,
        isCore: tool.is_core
      }
    ));
  }

  /** Renders this component to the DOM. */
  render(): JSX.Element {
    return (
      <div className={CSS['root']}>
        {!this.props.projects.length && (<>LOADING</>)}
        <Intro
          title={<>Jon<br />Richards</>}
          subtitle="Front-end Engineer"
          theme={this.resolveIntroTheme()}
          skills={this.mapToolsToSkills()}
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