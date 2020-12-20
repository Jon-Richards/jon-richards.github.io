import { css } from '@emotion/core';
import { Fonts } from 'Config/styles/fonts';
import { Dimensions } from 'Config/styles/dimensions';

export const STYLES = {
  article: css`
    display: block;
    margin: 0;
    padding: 0;
    width: auto;
    height: auto;
  `,
  content: css`
    padding: ${Dimensions.whitespace};
  `,
  title: css`
    font-family: ${Fonts.OPEN_SANS.fontFamily};
    font-size: 1.8rem;
    font-weight: ${Fonts.OPEN_SANS.fontStyles.regular.weights.light};
    margin-bottom: ${Dimensions.whitespace};
  `,
}
