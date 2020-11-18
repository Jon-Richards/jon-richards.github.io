import { Breakpoints } from 'Config/styles/breakpoints';
import { Dimensions } from 'Config/styles/dimensions';

/** Styles for the Gallery component. */
export const STYLES = {
  root: `
    display: grid;
    width: 100%;
    height: auto;
    margin-bottom: ${Dimensions.whitespace};
    grid-template-columns: 1fr;
    grid-template-rows: repeat(auto-fill, auto);
    column-gap: ${Dimensions.whitespace};
    row-gap: ${Dimensions.whitespace};

    @media (min-width: ${Breakpoints[720]}) {
      grid-template-columns: 1fr 1fr;
    }

    @media (min-width: ${Breakpoints[1440]}) {
      grid-template-columns: 1fr 1fr 1fr;
    }
  `,
};
