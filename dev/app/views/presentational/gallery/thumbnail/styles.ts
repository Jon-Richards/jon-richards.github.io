import { Breakpoints } from 'Config/styles/breakpoints';
import { Colors } from 'Config/styles/colors';
import { Dimensions } from 'Config/styles/dimensions';

/** Styles for the Thumbnails component. */
export const STYLES = {
  root: `
    display: flex;
    width: 100%;
    height: auto;
    padding: 0rem;
    margin: calc(${Dimensions.whitespace} / 2);
  
    @media (min-width: ${Breakpoints[720]}) {
      display: inline-flex;
      width: calc(50% - 2rem);
    }
  
    @media (min-width: ${Breakpoints[1440]}) {
      width: calc(33% - 2rem);
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
  image: `
    display: inline-flex;
    width: 100%;
    height: auto;
  
    @media (min-width: ${Breakpoints[480]}) {
      width: 50%;
    }
  `,
  caption: `
    display: inline-flex;
    width: 100%;
    padding: ${Dimensions.whitespace};
  
    @media (min-width: ${Breakpoints[480]}) {
      width: 50%;
    }
  `
};