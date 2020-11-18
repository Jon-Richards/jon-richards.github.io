import { Breakpoints } from 'Config/styles/breakpoints';
import { Dimensions } from 'Config/styles/dimensions';

/** Styles for the Thumbnails component. */
export const STYLES = {
  root: `
    width: 100%;
    height: auto;
    padding: 0rem;

    @media (min-width: ${Breakpoints[720]}) {
      transition: all 0.2s ease-in-out;
      transform-origin: 50% 50%;
      &:hover, &:active, &:focus, &:focus-within {
        transform: scale(1.1, 1.1);
      }
    }
  `,
  figure: `
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: auto;
    padding: 0rem;
    margin: 0rem;
    vertical-align: top;
  `,
  picture: `
    flex: 0 0 100%;
    
    @media (min-width: ${Breakpoints[480]}) {
      flex: 1 0 50%;
    }
  `,
  image: `
    width: 100%;
    height: auto;
  `,
  caption: `
    flex: 0 0 100%;
    padding: ${Dimensions.whitespace};
  
    @media (min-width: ${Breakpoints[480]}) {
      flex: 0 1 50%;
    }
  `,
};
