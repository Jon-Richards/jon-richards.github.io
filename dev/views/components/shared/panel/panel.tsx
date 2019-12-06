import * as React from 'react';
const CSS = require('./panel.scss');
import { createCSSHook } from '../../../../lib/ts/create_css_hook';

type Props = {
  /** Value of the CSS "display" property for the panel element. */
  display: 'flex' | 'inline-flex' | 'block' | 'inline-block';
  /** 
   * Optional css class hook, this will expose BEM formatted css hooks matching
   * the parent module.
   */
  cssHook?: string;
};

/**
 * Renders a panel.  This component is intended as a CSS delivery mechanism and
 * has minimal impact on its children.
 * 
 * @example
 * <Panel display="inline-flex" cssHook="my-panel">
 *   <!-- child content -->
 * </Panel>
 */
export const PANEL = React.memo<React.PropsWithChildren<Props>>(props => {
  const { cssHook, display, children } = props;
  
  return (
    <div 
      className={`${CSS['frame']} ${createCSSHook(cssHook, 'frame')}`}
      style={{display}}
    >
      <div className={`${CSS['content']} ${createCSSHook(cssHook, 'content')}`}>
        {children}
      </div>
    </div>
  );
});