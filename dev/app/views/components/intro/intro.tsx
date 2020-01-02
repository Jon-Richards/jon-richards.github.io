/**
 * @fileoverview
 * Parent component to the intro section.
 */

import * as React from 'react';
import { v4 as uuid } from 'uuid';
import { SkillFilters, SkillFilter } from './content/skill_filters';
import { Panel } from 'Views/components/panel';
import { IntroContent } from './content';
const CSS = require('./intro.scss');

/** Props needed to instantiate the Intro component. */
type Props = {
  /** The intro title. */
  title: React.ReactFragment;
  /** The subtitle. */
  subtitle: React.ReactFragment;
  /** Array of skills by which portfolio pieces can be ordered. */
  skills?: SkillFilter[];
  /** An optional theme with qhich to render the intro.  Defaults to "PANEL" */
  theme?: 'PANEL' | 'COPY';
};

/** Renders the introduction section. */
function Intro (props: Props): JSX.Element {
  const {
    title,
    subtitle,
    skills = [],
    theme = 'PANEL',
  } = props;

  const mockSkills: SkillFilter[] = [
    {
      uuid: uuid(),
      displayLabel: 'TypeScript',
      value: 'typescript',
      isActive: false,
      isCore: true,
    },
    {
      uuid: uuid(),
      displayLabel: 'JavaScript',
      value: 'typescript',
      isActive: false,
      isCore: false,
    },
    {
      uuid: uuid(),
      displayLabel: 'Node',
      value: 'typescript',
      isActive: false,
      isCore: false,
    },
    {
      uuid: uuid(),
      displayLabel: 'CSS / SASS',
      value: 'typescript',
      isActive: false,
      isCore: true,
    },
    {
      uuid: uuid(),
      displayLabel: 'SVG',
      value: 'typescript',
      isActive: false,
      isCore: false,
    },
    {
      uuid: uuid(),
      displayLabel: 'PHP',
      value: 'typescript',
      isActive: false,
      isCore: false,
    }
  ];

  return (
    <div className={CSS['root']}>
      <div className={CSS['wrapper']}>
        {theme === 'PANEL' ? (
          <Panel>
            <IntroContent
              title={title} 
              subtitle={subtitle} 
              skills={mockSkills}
            />
          </Panel>
        ) : (
          <IntroContent title={title} subtitle={subtitle} skills={mockSkills} />
        )}
      </div>
    </div>
  );
}

const introMemo = React.memo<Props>(Intro);

export { introMemo as Intro, Props as IntroProps };