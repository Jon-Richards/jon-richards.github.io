import { css } from '@emotion/core';
import { Dimensions } from 'Config/styles/dimensions';
import { Breakpoints } from 'Config/styles/breakpoints';

export const STYLES = {
  root: css`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(auto-fill, auto);
    column-gap: ${Dimensions.whitespace};
    row-gap: ${Dimensions.whitespace};

    @media (min-width: ${Breakpoints[480]}) {
      grid-template-columns: 1fr 1fr;
    }

    @media (min-width: ${Breakpoints[1080]}) {
      grid-template-columns: 1fr 1fr 1fr;
    }

    @media (min-width: ${Breakpoints[1440]}) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  `
}
