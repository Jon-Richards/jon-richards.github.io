/**
 * @fileoverview
 * Contains the component that renders a list of skills.
 */

import * as React from 'react';
const CSS = require('./skills.scss');
import { Skill, SkillProps } from './skill';

type SkillsProps = {
  /** Array of skill filters. */
  skills: SkillProps[];
};

/**
 * Renders a filterable list of skills.
 * 
 * __NOTE:__  At the time of this writing, filtering happens automatically based
 * on the isCore property for each skill. 
 *
 * @example
 * <Skills
 *      skills={[
 *          {
 *              displayLabel: 'foo',
 *              value: 'bar',
 *              uuid: 'abc-123',
 *              isCore: true
 *          }
 *      ]}
 * />
 */
function Skills (props: SkillsProps): JSX.Element {
  const { skills } = props;

  return (
    <div className={CSS['root']}>
      <ul className={CSS['skills']}>{mapSkills(skills)}</ul>
    </div>
  );
}

function mapSkills(skills: SkillProps[]): React.ReactFragment {
  if (skills.length) {
    return skills.map(skill => (
      <li key={skill.uuid}>
        <Skill
          displayLabel={skill.displayLabel}
          uuid={skill.uuid}
          isCore={skill.isCore}
        />
      </li>
    ));
  }
  return <></>;
}

const skillsMemo = React.memo<SkillsProps>(Skills);

export { skillsMemo as Skills, SkillsProps };
