/**
 * @fileoverview
 * Entrypoint for the navigation component.
 */

import * as React from 'react';
const CSS = require('./navigation.scss');

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
    {},
    {
        /** The active link's hash value. */
        activeLink: NavigationLink['href']
    }
> {
    
    /** The links that will be rendered by the navigation. */
    static readonly links: NavigationLink[] = [
        {
            uuid: String(Math.floor( Math.random() * 1000000 )),
            displayText: 'About',
            href: '#about'
        },
        {
            uuid: String(Math.floor( Math.random() * 1000000 )),
            displayText: 'Work',
            href: '#work'
        },
        {
            uuid: String(Math.floor( Math.random() * 1000000 )),
            displayText: 'Resume',
            href: '#resume'
        }
    ];

    constructor (props: Navigation['props']) {
        super(props);

        const activeLink = window.location.hash;
        this.state = {
            activeLink
        };

        this.setupHistoryAPIFeedback();
    }

    /** Adds event listeners and handling for the html history API */
    private setupHistoryAPIFeedback = (): void => {
        window.addEventListener('popstate', (e:PopStateEvent) => this.handlePopstateEvent(e));
        window.onpopstate = (e:PopStateEvent): void => {
            this.setState({
                activeLink: window.location.hash
            });
        };
    }

    /** Window.popstate event handler. */
    private handlePopstateEvent = (e: PopStateEvent): void => {
        this.setState({
            activeLink: window.location.hash
        });
    }

    /** Renders the navigation to the DOM */
    render(): JSX.Element {
        return (
            <nav id="navigation" className={CSS['root']}>
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