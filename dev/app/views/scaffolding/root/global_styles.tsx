/** @jsx jsx */

import { css, jsx, Global } from '@emotion/core';
import * as React from 'react';
import { CSS_RESET } from 'Config/styles/reset';
import { Fonts } from 'Config/styles/fonts';
import { Colors } from 'Config/styles/colors';

function globalStyles(): JSX.Element {
  return (
    <Global
      styles={css`
        ${CSS_RESET}

        html, body {
          font-size: 1rem;
          padding: 0rem;
          margin: 0rem;
          background-color: ${Colors.SWATCH_1.value};
          color: ${Colors.SWATCH_2.value};
          font-family: ${Fonts.OPEN_SANS.fontFamily};
        }
      `}
    />
  );
}

export { globalStyles as GlobalStyles };
