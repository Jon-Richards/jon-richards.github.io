/**
 * @fileoverview
 * Entrypoint for the navigation component.
 */

import * as React from 'react';
const CSS = require('./navigation.scss');
import { kebabCase } from 'lodash';

interface NavigationLink {
    /** UUID for this link in the array. */
    uuid: string;
    /** The link's text. */
    displayText: React.ReactFragment;
    /** The value of link's href attribute. */
    href: string;
}

/** Renders the main navigation. */
export class Navigation extends React.Component<
    {
        /** Visual format in which the navigation should render. */
        format: 'LARGE_DEVICE' | 'SMALL_DEVICE'
    },
    {
        /** The active link's hash value. */
        activeLink: NavigationLink['href']
    }
> {
    
    /** The links that will be rendered by the navigation. */
    static readonly links: NavigationLink[] = [
        {
            uuid: String(Math.floor( Math.random() * 1000000 )),
            displayText: 'Work',
            href: '#work'
        },
        {
            uuid: String(Math.floor( Math.random() * 1000000 )),
            displayText: 'Resume',
            href: '#resume'
        },
        {
            uuid: String(Math.floor( Math.random() * 1000000 )),
            displayText: 'Contact',
            href: '#contact'
        }
    ];

    constructor (props: Navigation['props']) {
        super(props);

        const activeLink = window.location.hash;
        this.state = {
            activeLink
        };
    }

    /** Window.popstate event handler. */
    private handlePopstateEvent = (): void => {
        this.setState({
            activeLink: window.location.hash
        });
    }
    
    /** @inheritdoc */
    componentDidMount(): void {
        window.addEventListener('popstate', this.handlePopstateEvent, false);
    }

    /** @inheritdoc */
    componentWillUnmount(): void {
        window.removeEventListener('popstate', this.handlePopstateEvent, false);
    }

    /** Renders the navigation to the DOM */
    render(): JSX.Element {
        const { format } = this.props;

        return (
            <nav 
                id="navigation" 
                className={
                    `${ CSS['root'] } ` + 
                    `${ CSS['root--' + kebabCase(format)] }`
                }
            >
                <ul className={CSS['links-list']}>
                    {Navigation.links.map( link => (
                        <li key={link.uuid} className={CSS['links-list__item']}>
                            <a 
                                className={
                                    `${CSS['link']} ` +
                                    `${link.href === this.state.activeLink 
                                        ? CSS['link--active'] 
                                        : ''
                                    }`
                                } 
                                href={link.href}
                            >
                                {link.displayText}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        );
    }
}
