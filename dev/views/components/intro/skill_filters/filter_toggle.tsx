/**
 * @fileoverview
 * Contains a single skill filter.
 */

import { React, SkillFilterShape } from '../mediator';
const CSS = require('./skill_filters.scss');

/** 
 * Renders a single skill filter.
 *
 * @example
 * <FILTER_TOGGLE
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
export const FILTER_TOGGLE = React.memo<
    SkillFilterShape & 
    {
        /** Fires when this button is clicked. */
        onClick(
            e: React.MouseEvent<HTMLButtonElement>, 
            value: SkillFilterShape['value']
        ): void;
    }
>((props) => {
    const {
        displayLabel,
        value,
        isActive,
        isCore,
        onClick
    } = props;
    
    return (
        <button 
            className={
                `${ CSS['filter'] }` +
                `${ isActive ? ' ' + CSS['filter--active'] : ''}` +
                `${ isCore ? ' ' + CSS['filter--is-core'] : ''}`
            } 
            onClick={ (e: React.MouseEvent<HTMLButtonElement>) => onClick(e, value) }
        >
            {displayLabel}
        </button>
    );
});