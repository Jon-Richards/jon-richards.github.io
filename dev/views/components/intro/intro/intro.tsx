/**
 * @fileoverview
 * Parent component to the intro section.
 */

import { React, SKILL_FILTERS, SkillFilterShape, uuid } from '../mediator';
const CSS = require('./intro.scss');

/** Parent component for the intro section. */
export const INTRO = React.memo<
    {
        /** The intro title. */
        title: React.ReactFragment;
        /** The subtitle. */
        subtitle: React.ReactFragment;
        /** Array of skills by which portfolio pieces can be ordered. */
        skills?: SkillFilterShape[];
    }
>((props) => {
    const {
        title,
        subtitle,
        skills = []
    } = props;

    const mockSkills: SkillFilterShape[] = [
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
    ];

    return(
        <div className={CSS['root']}>
            <div className={CSS['content']}>
                <div className={CSS['headline']}>
                    <h1 className={CSS['title']}>
                        {title}
                    </h1>
                    <h2 className={CSS['subtitle']}>
                        {subtitle}
                    </h2>
                </div>
                <div className={CSS['skills']}>
                    <SKILL_FILTERS skills={mockSkills} />
                </div>
            </div>
        </div>
    );
});