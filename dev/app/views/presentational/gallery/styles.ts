import { Breakpoints } from 'Config/styles/breakpoints';

/** Styles for the Gallery component. */
export const STYLES = {
  root: `
    display: flex;
    width: 100%;
    height: auto;
    flex-wrap: wrap;
    
    @media (min-width: ${Breakpoints[480]}) {
      align-items: center;
    }
  `
};
