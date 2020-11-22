/** @jsx jsx */

import * as React from 'react';
import { css, jsx } from '@emotion/core';
import { STYLES } from './styles';

type Props = React.PropsWithChildren<Record<string, unknown>>;

/**
 * Renders a panel.  This component is intended as a CSS delivery mechanism and
 * has minimal impact on its children.
 *
 * @example
 * <Panel display="inline-flex">
 *   <!-- child content -->
 * </Panel>
 */
export function Panel(props: Props): JSX.Element {
  return (
    <div css={css(STYLES.frame)}>
      <div css={css(STYLES.content)}>
        {props.children}
      </div>
    </div>
  );
}
