import { Colors } from 'Config/styles/colors';
import { Breakpoints } from 'Config/styles/breakpoints';
import { Fonts } from 'Config/styles/fonts';

/** Styles for the Nav component. */
export const STYLES = {
  root: `
    display: flex;
    width: 100%;
    margin: 0rem;
    padding: 0rem 1rem 1rem 1rem;
    align-items: center;
    justify-content: center;
    list-style-type: none;
    background-color: ${Colors.SWATCH_1.value};

    @media (min-width: ${Breakpoints[720]} {
      padding-top: 1rem 1rem 0rem 1rem;
      justify-content: flex-end;
      margin-right: 1rem;
      background-color: transparent;
    }

    @media (min-width: ${Breakpoints[1440]} {
      width: auto;
    }
  `,
  link: `
    display: inline-block;
    margin: 0rem 1rem;
    padding: 1rem 0rem 0rem 0rem;
    text-decoration: none;
    color: ${Colors.SWATCH_2.value};
    width: auto;
    height: auto;
    font-family: ${Fonts.OPEN_SANS};
    font-weight: ${Fonts.OPEN_SANS.fontStyles.regular.weights.extraBold}

    @media (min-width: ${Breakpoints[720]}) {
      padding-bottom: 0.5rem;
      border-bottom: thin solid transparent;
    }

    @media (min-width: ${Breakpoints[1440]}) {
      font-size: 0.8rem;
    }

    &:hover {
      border-top: thin solid ${Colors.SWATCH_3.value};

      @media (min-width: std-get-breakpoint(720)) {
      @media (min-width: ${Breakpoints[720]} {
        border-top: none;
        border-bottom: thin solid ${Colors.SWATCH_3.value};
      }
    }
  `
};