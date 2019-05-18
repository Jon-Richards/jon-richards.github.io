/**
 * @fileoverview
 * Contains contact section.
 */

import * as React from 'react';
const CSS = require('./contact.scss');

/** Renders the contact section. */
export const CONTACT: React.FunctionComponent<{}> = (props): JSX.Element => {
    return (
        <div id="contact" className={CSS['root']} role="region" aria-label="Contact">
            Contact
        </div>
    );
};
