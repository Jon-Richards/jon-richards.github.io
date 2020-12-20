import { css } from '@emotion/core';
import { Fonts } from 'Config/styles/fonts';
import { Dimensions } from 'Config/styles/dimensions';
import { Colors } from 'Config/styles/colors';

export const STYLES = {
  jobTitle: css`
    font-family: ${Fonts.OPEN_SANS.fontFamily};
    font-size: 1.4rem;
    font-weight: ${Fonts.OPEN_SANS.fontStyles.regular.weights.light};
    margin-bottom: calc(${Dimensions.whitespace} / 2);
  `,
  organization: css`
    font-family: ${Fonts.OPEN_SANS.fontFamily};
    font-size: 1rem;
    font-weight: ${Fonts.OPEN_SANS.fontStyles.regular.weights.regular};
    margin-bottom: 1rem;
  `,
  date: css`
    display: inline-block;
    font-family: ${Fonts.OPEN_SANS.fontFamily};
    font-style: ${Fonts.OPEN_SANS.fontStyles.italic.name};
    font-weight: ${Fonts.OPEN_SANS.fontStyles.italic.weights.regular};
    color: ${Colors.SWATCH_1.withLightness(70).value};
    padding-bottom: calc(${Dimensions.whitespace} / 2);
    margin-bottom: calc(${Dimensions.whitespace} / 2);
    border-bottom: thin dotted ${Colors.SWATCH_2.withLightness(30).value};
  `,
  description: css`
    padding-bottom: calc(${Dimensions.whitespace} * 0.5);
    margin-bottom: ${Dimensions.whitespace};
    border-bottom: thin solid ${Colors.SWATCH_2.withLightness(30).value};
    &:last-of-type {
      border-bottom: none;
      padding-bottom: 0;
      margin-bottom: 0;
    }
  `,
  responsibility: css`
    display: list-item;
    list-style-type: circle;
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
