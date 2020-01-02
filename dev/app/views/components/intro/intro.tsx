/**
 * @fileoverview
 * Parent component to the intro section.
 */

import * as React from 'react';
import { Panel } from 'Views/components/panel';
import { Content, ContentProps } from './content';
const CSS = require('./intro.scss');

/** Props needed to instantiate the Intro component. */
type Props = {
  /** The intro title. */
  title: React.ReactFragment;
  /** The subtitle. */
  subtitle: React.ReactFragment;
  /** An array of skills. */
  skills: ContentProps['skills'];
  /** An optional theme with qhich to render the intro.  Defaults to "PANEL" */
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
    <div className={CSS['root']}>
      <div className={CSS['wrapper']}>
        {theme === 'PANEL' ? (
          <Panel>
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