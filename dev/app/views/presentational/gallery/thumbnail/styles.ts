import { Dimensions } from 'Config/styles/dimensions';
import { Colors } from 'Config/styles/colors';
import { Fonts } from 'Config/styles/fonts';
import { css, keyframes } from '@emotion/core';

const focusAnimationDuration = '0.25s';

const linkFocusAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
  }
`;

const frontFocusAnimation = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0.05;
  }
`;

const backFocusAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 100%;
  }
`;

/** Styles for the Thumbnails component. */
export const STYLES = {
  link: css`
    display: inline-block;
    width: 100%;
    height: auto;
    padding: 0rem;
    margin: 0rem;

    text-decoration: none;
  `,
  linkWithFocus: css`
    animation-name: ${linkFocusAnimation};
    animation-duration: ${focusAnimationDuration};
    animation-fill-mode: forwards;
  `,
  content: css`
    position: relative;
  `,
  front: css`
    width: 100%;
    height: auto;
    padding: 0rem;
    margin: 0rem;
  `,
  frontWithFocus: css`
    animation-name: ${frontFocusAnimation};
    animation-duration: ${focusAnimationDuration};
    animation-fill-mode: forwards;
  `,
  back: css`
    position: absolute;
    top: 0rem;
    left: 0rem;
    width: 100%;
    height: 100%;
    padding: ${Dimensions.whitespace};
    margin: 0rem;
    visibility: hidden;
  `,
  backWithFocus: css`
    visibility: visible;
    animation-name: ${backFocusAnimation};
    animation-duration: ${focusAnimationDuration};
    animation-fill-mode: forwards;
  `,
  backContent: css`
    padding: ${Dimensions.whitespace};
  `,
  title: css`
    color: ${Colors.SWATCH_2.value};
    margin-bottom: calc(${Dimensions.whitespace} / 2);
    font-size: 1.2rem;
    font-family: ${Fonts.OPEN_SANS.fontFamily};
    font-weight: ${Fonts.OPEN_SANS.fontStyles.regular.weights.regular};
  `,
  description: css`
    font-size: 1rem;
    font-family: ${Fonts.OPEN_SANS.fontFamily};
    font-weight: ${Fonts.OPEN_SANS.fontStyles.regular.weights.light};
    line-height: 1.6rem;
    color: ${Colors.SWATCH_2.value};
  `
};
