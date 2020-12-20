import { css } from '@emotion/core';
import { Fonts } from 'Config/styles/fonts';
import { Dimensions } from 'Config/styles/dimensions';

export const STYLES = {
  list: css`
    list-style-type: lower-roman;
  `,
  item: css`
    display: list-item;
    font-family: ${Fonts.OPEN_SANS.fontFamily};
    font-weight: ${Fonts.OPEN_SANS.fontStyles.regular.weights.regular};
    line-height: 1.6rem;
    padding-left: 0.5rem;
    margin-left: 2rem;
    margin-bottom: calc(${Dimensions.whitespace} / 2);

    &::before {
      right: 1rem;
      opacity: 0.5;
    }
  `
};
