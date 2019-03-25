/**
 * @fileoverview
 * Contains the about section component.
 */

import * as React from 'react';
import './about.scss';

/**
 * Renders the about section.
 */
export const ABOUT: React.FunctionComponent<{
    /** Just a test prop. */
    name: string;
}> = ({
    name
}): JSX.Element => {
    return (
        <div className="about" role="region" aria-label="About">
            <div className="about__content">
                About section. - {name}

                <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui 
                blanditiis praesentium voluptatum deleniti atque corrupti quos 
                dolores et quas molestias excepturi sint occaecati cupiditate non 
                provident, similique sunt in culpa qui officia deserunt mollitia 
                animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis 
                est et expedita distinctio. Nam libero tempore, cum soluta nobis est 
                eligendi optio cumque nihil impedit quo minus id quod maxime placeat 
                facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. 
                Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus 
                saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
                Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis 
                voluptatibus maiores alias consequatur aut perferendis doloribus 
                asperiores repellat.
                </p>
            </div>
        </div>
    );
};