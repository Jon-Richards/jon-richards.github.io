/** @jsx jsx */

import * as React from 'react';
import { STYLES } from './styles';
import { css, jsx } from '@emotion/core';

type SkillProps = {
  /** UUID for this particular skill. */
  uuid: string;
  /** The label as it will display to the user. */
  displayLabel: string;
  /** If this is a core skill. */
  isCore: boolean;
};

/**
 * Renders a single skill.
 *
 * @example
 * <Skill
 *      uuid="abc-123"
 *      displayLabel="foo"
 *      value="bar"
 *      isActive={true}
 *      isCore={false}
 *      onClick={(e, value) => {
 *          console.log(value);
 *      }}
 * />
 */
function Skill (props: SkillProps): JSX.Element {
  const { displayLabel, isCore } = props;

  return (
    <span
      css={css(isCore ? STYLES.skill : STYLES.coreSkill)}
      data-testid="intro__skill"
    >
      {displayLabel}
    </span>
  );
}

const skillMemo = React.memo<SkillProps>(Skill);

export {skillMemo as Skill, SkillProps};