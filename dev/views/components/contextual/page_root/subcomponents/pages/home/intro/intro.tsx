/**
 * @fileoverview
 * Parent component to the intro section.
 */

import * as React from 'react';
import { v4 as uuid } from 'uuid';
import { SkillFilters, SkillFilter } from './content/skill_filters';
import { Panel } from '../../../../../../shared/panel';
import { Content } from './content';
const CSS = require('./intro.scss');

/** Parent component for the intro section. */
export const INTRO = React.memo<{
  /** The intro title. */
  title: React.ReactFragment;
  /** The subtitle. */
  subtitle: React.ReactFragment;
  /** Array of skills by which portfolio pieces can be ordered. */
  skills?: SkillFilter[];
}>(props => {
  const { title, subtitle, skills = [] } = props;

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
    },
    {
      uuid: uuid(),
      displayLabel: 'Rails',
      value: 'typescript',
      isActive: false,
      isCore: false,
    },
    {
      uuid: uuid(),
      displayLabel: 'Photoshop',
      value: 'typescript',
      isActive: false,
      isCore: true,
    },
    {
      uuid: uuid(),
      displayLabel: 'Illustrator',
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
    },
    {
      uuid: uuid(),
      displayLabel: 'Rails',
      value: 'typescript',
      isActive: false,
      isCore: false,
    },
    {
      uuid: uuid(),
      displayLabel: 'Photoshop',
      value: 'typescript',
      isActive: false,
      isCore: true,
    },
    {
      uuid: uuid(),
      displayLabel: 'Illustrator',
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
    },
    {
      uuid: uuid(),
      displayLabel: 'Rails',
      value: 'typescript',
      isActive: false,
      isCore: false,
    },
    {
      uuid: uuid(),
      displayLabel: 'Photoshop',
      value: 'typescript',
      isActive: false,
      isCore: true,
    },
    {
      uuid: uuid(),
      displayLabel: 'Illustrator',
      value: 'typescript',
      isActive: false,
      isCore: true,
    },
  ];

  let renderWithPanel = false;

  if (window) {
    if (window.matchMedia('(min-width: 480px)').matches === true) {
      renderWithPanel = true;
    }
  }

  return (
    <div className={CSS['root']}>
      <div className={CSS['wrapper']}>
        {renderWithPanel ? (
          <Panel display="flex">
            <Content title={title} subtitle={subtitle} skills={mockSkills} />
          </Panel>
        ) : (
          <Content title={title} subtitle={subtitle} skills={mockSkills} />
        )}
      </div>
    </div>
  );
});
