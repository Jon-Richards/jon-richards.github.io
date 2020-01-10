const CSS = require('./home_page.scss');
import * as React from 'react';
import { IntroHOC } from './intro_hoc';
import { GalleryHOC } from './gallery_hoc';

type Props = {};

/** The root component of the home page. */
export class HomePage extends React.PureComponent<Props, never> {
  /** Renders this component to the DOM. */
  render(): JSX.Element {
    return (
      <div className={CSS['root']}>
        <IntroHOC />
        <GalleryHOC />
      </div>
    );
  }
}