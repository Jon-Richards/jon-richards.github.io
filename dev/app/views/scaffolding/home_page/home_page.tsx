/** @jsx jsx */
import * as React from 'react';
import { IntroHOC } from './intro_hoc';
import { GalleryHOC } from './gallery_hoc';
import { Resume } from 'Views/presentational/resume';
import { css, jsx } from '@emotion/core';

type Props = Record<string, unknown>;

/** The root component of the home page. */
export class HomePage extends React.PureComponent<Props, never> {
  /** Renders this component to the DOM. */
  render(): JSX.Element {
    return (
      <div
        css={css`
          display: flex;
          flex-direction: column;
          width: 100%;
          height: auto;
        `}
      >
        <IntroHOC />
        <GalleryHOC />
        <Resume
          occupations={[
            {
              id: 'one',
              jobTitle: 'Sr. UI Developer',
              organization: 'Some Organization',
              startDate: 'Jan 1, 2021',
              endDate: 'Dec 31, 2021',
              responsibilities: [
                { id: 'one', description: 'Developed component libraries.' },
                { id: 'two', description: 'Managed legacy applications.' },
                { id: 'three', description: 'Did some other stuff.' },
              ]
            },
            {
              id: 'two',
              jobTitle: 'Software Engineer',
              organization: 'Catalina Marketing',
              startDate: 'Oct 7, 2014',
              endDate: 'Dec 31, 2017',
              responsibilities: [
                { id: 'one', description: 'Developed component libraries.' },
                { id: 'two', description: 'Managed legacy applications.' },
                { id: 'three', description: 'Did some other stuff.' },
              ]
            }
          ]}
          tools={[
            { id: 'one', name: 'React' },
            { id: 'two', name: 'Redux' },
            { id: 'three', name: 'Angular' },
            { id: 'four', name: 'Vue' },
            { id: 'five', name: 'Rails' },
            { id: 'six', name: 'Wordpress' },
            { id: 'seven', name: 'Symfony' },
          ]}
          practices={[]}
          languages={[]}
        />
      </div>
    );
  }
}
