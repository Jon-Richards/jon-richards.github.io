/** @jsx jsx */

import * as React from 'react';
import { Panel } from 'Views/presentational/panel';
import { Content, ContentProps } from './content';
import { css, jsx } from '@emotion/core';
import { STYLES } from './styles';

/** Props needed to instantiate the Intro component. */
type Props = {
  /** The intro title. */
  title: React.ReactFragment;
  /** The subtitle. */
  subtitle: React.ReactFragment;
  /** An array of skills. */
  skills: ContentProps['skills'];
  /** An optional theme with which to render the intro.  Defaults to "PANEL" */
  theme?: 'PANEL' | 'COPY';
};

/** Renders the introduction section. */
function Intro (props: Props): JSX.Element {
  const {
    title,
    subtitle,
    skills,
    theme = 'PANEL',
  } = props;

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

const introMemo = React.memo<Props>(Intro);

export { introMemo as Intro, Props as IntroProps };