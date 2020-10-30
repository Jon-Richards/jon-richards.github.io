import { Breakpoints } from 'Config/styles/breakpoints';
import { Fonts } from 'Config/styles/fonts';
import { Colors } from 'Config/styles/colors';

/** Styling for the Info Content component. */
export const STYLES = {
  content: `
    display: flex;
    flex-direction: column;
    padding: 2rem;

    @media (min-width: ${Breakpoints[720]}) {
      flex-direction: row;
    }
  `,
  headline: `
    display: flex;
    width: auto;
    flex-grow: 0;
    flex-shrink: 0;
    flex-direction: column;
    align-items: flex-start;

    @media (min-width: ${Breakpoints[480]}) {
      width: auto;
      margin: auto;
    }

    @media (min-width: ${Breakpoints[720]}) {
      width: auto;
    }
  `,
  title: `
    display: flex;
    margin-bottom: 0.2rem;
    font-family: ${Fonts.HEEBO.fontFamily};
    font-size: 2.8rem;
    color: ${Colors.SWATCH_2.value};
    line-height: 3.2rem;
  `,
  subtitle: `
    display: flex;
    font-family: ${Fonts.OPEN_SANS.fontFamily};
    font-weight: ${Fonts.OPEN_SANS.fontStyles.regular.weights.regular};
    font-size: 1.4rem;
    color: ${Colors.SWATCH_2.value};
  `,
  children: `
    display: none;

    @media (min-width: ${Breakpoints[480]}) {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      width: auto;
      padding: 1rem 0rem 0rem 0rem;
      margin: 1.4rem 0rem 0rem 0rem;
      border-top-width: thin;
      border-color: ${Colors.SWATCH_2.withLightness(40).value};
      border-style: dotted;
    }

    @media (min-width: ${Breakpoints[720]}) {
      padding: 0rem 0rem 0rem 1rem;
      margin: 0rem 0rem 0rem 1.4rem;
      border-top-width: 0rem;
      border-left-width: thin;
    }
  `
};