/** @jsx jsx */

import * as React from 'react';
import { css, jsx } from '@emotion/core';
import { STYLES } from './styles';

/** Indicates to the user that something is processing. */
function Preloader (): JSX.Element {
  return (
    <div css={css(STYLES.root)}>
      <div css={css(STYLES.gradient)}></div>
    </div>
  );
}

const preloaderMemo = React.memo<Record<string, unknown>>(Preloader);

export { preloaderMemo as Preloader };
