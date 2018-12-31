/** 
 * Provides a shim to allow TypeScript to see .vue files.
 * Does not need to be imported anywhere, the compiler will pick it up.
 * 
 * https://github.com/Microsoft/TypeScript-Vue-Starter#single-file-components
 */
declare module "*.vue" {
    import Vue from "vue";
    export default Vue;
}