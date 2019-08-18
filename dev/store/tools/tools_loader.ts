/**
 * @fileoverview
 * Contains a class that manages loading and validating tools.
 */

import { Tool, Error } from './mediator';

/** Loads and validates portfolio tools */
export class ToolsLoader {
    /** Fully validated array of Tool instances. */
    tools: Tool[] = [];
    /** Any errors that have occurred. */
    errors: Error[] = [];

    constructor(
        /** Array of Tools to validate and load. */
        tools: Tool[]
    ) {
        if (tools.length < 1) console.error('No tools were loaded.');
        if (this.hasDuplicateIds(tools) === false) {
            this.tools = tools;
        }
    }

    /** 
     * Checks for duplicate tool ID's.
     * @param tools Array of portfolio tools to check.
     * @return If any duplicate id's were found.
     */
    private hasDuplicateIds (tools: Tool[]) {
        const checkedIds: Array<Tool['uuid']> = [];
        let hasDuplicateIds = false;
        
        tools.forEach( piece => {
            const { uuid } = piece;
            if (checkedIds.indexOf(uuid) > -1) {
                const message = `Found more than one tool with UUID: ${uuid}`;
                console.error(message);
                this.errors.push({ message, severity: 3 });
                hasDuplicateIds = true;
            } else {
                checkedIds.push(uuid);
            }
        });

        return hasDuplicateIds;
    }
}