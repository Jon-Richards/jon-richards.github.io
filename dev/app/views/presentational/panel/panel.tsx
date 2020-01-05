import * as React from 'react';
const CSS = require('./panel.scss');

type Props = React.PropsWithChildren<{}>;

/**
 * Renders a panel.  This component is intended as a CSS delivery mechanism and
 * has minimal impact on its children.
 * 
 * @example
 * <Panel display="inline-flex">
 *   <!-- child content -->
 * </Panel>
 */
function Panel(props: Props): JSX.Element {
  return (
    <div className={`${CSS['frame']}`}>
      <div className={`${CSS['content']}`}>
        {props.children}
      </div>
    </div>
  );
}

const panelMemo = React.memo<Props>(Panel);

export {panelMemo as Panel};