/**
 * Declares a module for scss files so that TypeScript can import them.
 *
 * Each .scss file will still need a type definition file that exports its
 * classes as a string type.
 *
 * @SEE https://stackoverflow.com/questions/40382842/cant-import-css-scss-modules-typescript-says-cannot-find-module#answer-41946697
 */
declare module '*.scss' {
    const content: Record<string, string>;
    export default content;
}

/**
 * @example
 *
 * // my_scss_file.scss.d.ts
 * export const my_class: string;
 *
 * my_component.ts
 * import * as CSS from './my_scss_file.scss';
 * console.log(CSS.my_class); // class's string value.
 */

