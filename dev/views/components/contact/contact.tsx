/**
 * @fileoverview
 * Contains contact section.
 */

import * as React from 'react';
import * as styles from './contact.scss';

/** Renders the contact section. */
export const CONTACT: React.FunctionComponent<{}> = (props): JSX.Element => {
    return (
        <div className={styles.root} role="region" aria-label="Contact">
            Contact
        </div>
    );
};
