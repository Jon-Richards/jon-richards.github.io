/**
 * @fileoverview
 * Conatains the component for the index page.
 */

import { React, Page, LoremIpsum } from './mediator';

type Props = {};

/** The root component of the index page. */
export class IndexPage extends React.Component<Props, never> {
    /** Renders this component to the DOM. */
    render(): JSX.Element {
        return (
            <Page>
                <div className="index">
                    <LoremIpsum />
                </div>
            </Page>
        );
    }
}
