/**
 * @fileoverview
 * Contains the component that renders the skill list filter.
 */

import { React, FILTER_TOGGLE, SkillFilterShape } from '../mediator';
const CSS = require('./skill_filters.scss');

/** The hspae of a single skill filter. */
export interface SkillFilterShape {
  /** UUID for this particular skill. */
  uuid: string;
  /** The label as it will display to the user. */
  displayLabel: string;
  /** The actual value for the filter. */
  value: string;
  /** If this filter is active. */
  isActive: boolean;
  /** If this is a core skill. */
  isCore: boolean;
}

/**
 * Renders a filterable list of skills.
 *
 * @example
 * <SKILL_FILTERS
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
export const SKILL_FILTERS = React.memo<{
  /** Array of skill filters. */
  skills: SkillFilterShape[];
}>(props => {
  const { skills } = props;

  return (
    <div className={CSS['root']}>
      <ul className={CSS['filters']}>{mapSkillsToFilters(skills)}</ul>
    </div>
  );
});

/**
 * Maps an array of SkillFilterShapes to individual skill filter toggle
 * components.
 * @param skills Array of SkillFilterShapes to map.
 * @return  A React Fragment containing SKILL_FILTER_TOGGLE components
 *          wrapped in list item elements.
 */
function mapSkillsToFilters(skills: SkillFilterShape[]): React.ReactFragment {
  if (skills.length) {
    return skills.map(skill => (
      <li key={skill.uuid}>
        <FILTER_TOGGLE
          displayLabel={skill.displayLabel}
          value={skill.value}
          isActive={skill.isActive}
          onClick={() => console.log('click')}
          uuid={skill.uuid}
          isCore={skill.isCore}
        />
      </li>
    ));
  }
  return <></>;
}
