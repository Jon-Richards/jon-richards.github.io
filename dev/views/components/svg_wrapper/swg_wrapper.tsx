/**
 * @fileoverview
 * Contains a wrapper component for SVG elements.
 */

import * as React from 'react';

/**
 * Renders a wrapper tag for SVG elements with pre-set metadata.
 * @example
 * <SVGWrapper
 * viewBox="0 0 300 100"
 * width="100%"
 * height="100%"
 * preserveAspectRatio="none"
 * className="my-svg"
 * >
 * <!-- insert child SVG elements here -->
 * </SVGWrapper>
 */
export const SVG_WRAPPER = React.memo<{
    /** 
     * Value of the rendered SVG element's viewBox attribute.
     * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/viewBox
     */
    viewBox: string;
    /** Value of the rendered SVG element's width attribute. */
    width: string;
    /** Value of the rendered SVG element's height attribute. */
    height: string;
    /** 
     * Value of the rendered SVG element's preserveAspectRatio attribute.
     * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/preserveAspectRatio
     */
    preserveAspectRatio: 'none' | string;
    /** Optional CSS class name for the SVG element. */
    className?: string;
    /** Children of the SVG element. */
    children?: React.ReactChild;
}>(props => {
    const {
        viewBox,
        width,
        height,
        preserveAspectRatio,
        className = '',
    } = props;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            viewBox={viewBox}
            preserveAspectRatio={preserveAspectRatio}
            width={width}
            height={height}
            className={className}
        >
            {props.children}
        </svg>
    );
});