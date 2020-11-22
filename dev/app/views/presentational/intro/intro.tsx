/** @jsx jsx */

import * as React from 'react';
import { Panel } from 'Views/presentational/panel';
import { Content, ContentProps } from './content';
import { css, jsx } from '@emotion/core';
import { STYLES } from './styles';

/** Renders the introduction section. */
export function Intro(props: IntroProps): JSX.Element {
  const { title, subtitle, skills, theme = 'PANEL' } = props;

  return (
    <div css={css(STYLES.root)}>
      <div css={css(STYLES.wrapper)}>
        {theme === 'PANEL' ? (
          <Panel data-testid="intro_panel">
            <Content title={title} subtitle={subtitle} skills={skills} />
          </Panel>
        ) : (
          <Content title={title} subtitle={subtitle} skills={skills} />
        )}
      </div>
    </div>
  );
}

/** Props needed to instantiate the Intro component. */
export type IntroProps = {
  /** The intro title. */
  title: React.ReactFragment;
  /** The subtitle. */
  subtitle: React.ReactFragment;
  /** An array of skills. */
  skills: ContentProps['skills'];
  /** An optional theme with which to render the intro.  Defaults to "PANEL" */
  theme?: 'PANEL' | 'COPY';
};
