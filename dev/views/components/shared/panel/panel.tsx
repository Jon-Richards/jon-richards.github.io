import * as React from 'react';
const CSS = require('./panel.scss');

interface Props {
  /** Value of the CSS "display" property for the panel element. */
  display: 'flex' | 'inline-flex' | 'block' | 'inline-block';
}

/**
 * Renders a panel.  This component is intended as a CSS delivery mechanism and
 * has minimal impact on its children.
 * 
 * @example
 * <Panel display="inline-flex">
 *   <!-- child content -->
 * </Panel>
 */
export const PANEL = React.memo<React.PropsWithChildren<Props>>(props => {
  const {
    display,
    children
  } = props;

  return (
    <div className={`${CSS['frame']}`} style={{display}}>
      <div className={`${CSS['content']}`}>
        {children}
      </div>
    </div>
  );
});