/**
 * @fileoverview
 * Contains contact section.
 */

import * as React from 'react';
import './contact.scss';

/** Renders the contact section. */
export const CONTACT: React.FunctionComponent<{}> = (props): JSX.Element => {
    return (
        <div className="contact" role="region" aria-label="Contact">
            Contact
        </div>
    );
};
