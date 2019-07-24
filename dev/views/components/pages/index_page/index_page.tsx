/**
 * @fileoverview
 * Conatains the component for the index page.
 */

const CSS = require('./index_page.scss');
import { React, PageTemplate, Gallery } from '../mediator';

type Props = {};

/** The root component of the index page. */
export class IndexPage extends React.Component<Props, never> {
    /** Renders this component to the DOM. */
    render(): JSX.Element {
        return (
            <PageTemplate>
                <div className={CSS['root']}>
                    <Gallery 
                        pieces={[
                            {
                                text: 'One In X',
                                href: '#',
                                src: 'http://localhost:3004/img/luba_banner.jpg',
                                onClick: (href) => console.log(href)
                            },
                            {
                                text: 'One In X',
                                href: '#',
                                src: 'http://localhost:3004/img/luba_banner.jpg',
                                onClick: (href) => console.log(href)
                            },
                            {
                                text: 'One In X',
                                href: '#',
                                src: 'http://localhost:3004/img/luba_banner.jpg',
                                onClick: (href) => console.log(href)
                            },
                        ]}
                    />
                </div>
            </PageTemplate>
        );
    }
}
