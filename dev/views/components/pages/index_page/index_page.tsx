/**
 * @fileoverview
 * Conatains the component for the index page.
 */

const CSS = require('./index_page.scss');
import { React, PageTemplate, Gallery, INTRO, uuid } from '../mediator';

/** The root component of the index page. */
export class IndexPage extends React.Component<
    {
        /** Method dispatched to retrieve portfolio projects. */
        getProjects(): void;
    }, 
    never
> {
    constructor(props: IndexPage['props']) {
        super(props);
        props.getProjects();
    }
    /** Renders this component to the DOM. */
    render(): JSX.Element {
        return (
            <PageTemplate>
                <div className={CSS['root']}>
                    <INTRO
                        title={
                            <>
                                Jon<br />
                                Richards
                            </>
                        }
                        subtitle="Front-end Engineer" 
                    />
                    <Gallery 
                        pieces={[
                            {
                                title: 'One In X',
                                description: <>
                                    <p>
                                        Visualizing statistics in an interesting way.
                                    </p>
                                </>,
                                uuid: uuid()
                            },
                            {
                                title: 'One In X',
                                description: <>
                                    <p>
                                        Visualizing statistics in an interesting way.
                                    </p>
                                </>,
                                uuid: uuid()
                            },
                            {
                                title: 'One In X',
                                description: <>
                                    <p>
                                        Visualizing statistics in an interesting way.
                                    </p>
                                </>,
                                uuid: uuid()
                            },
                        ]}
                    />
                </div>
            </PageTemplate>
        );
    }
}
