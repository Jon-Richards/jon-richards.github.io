import { Dimensions } from 'Config/styles/dimensions';
import { Breakpoints } from 'Config/styles/breakpoints';

/** Styles belonging to the Root component. */
export const STYLES = {
  root: `
    display: flex;
    position: relative;
    width: 100%;
    height: auto;
    flex-direction: column;
    flex-wrap: wrap;
  `,
  main: `
    display: flex;
    position: relative;
    width: 100%;
    max-width: 80rem;
    border: thin solid #00f;
    margin: 0rem auto;
    padding: 0rem calc(${Dimensions.whitespace} / 2);
    height: auto;
    min-height: 100%;

    @media (min-width: ${Breakpoints[480]}) {
      padding: 0rem ${Dimensions.whitespace};
    }

    @media (min-width: ${Breakpoints[1440]}) {
      padding: 0rem;
    }
  `,
};
