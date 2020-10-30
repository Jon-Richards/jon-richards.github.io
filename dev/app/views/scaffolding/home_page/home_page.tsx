/** @jsx jsx */
import * as React from 'react';
import { IntroHOC } from './intro_hoc';
import { GalleryHOC } from './gallery_hoc';
import { css, jsx } from '@emotion/core';

type Props = {};

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
      </div>
    );
  }
}