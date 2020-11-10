import { Breakpoints } from 'Config/styles/breakpoints';

/** Styles for the Intro component. */
export const STYLES = {
  root: `
    display: flex;
    position: relative;
    width: 100%;
    height: auto;
    min-height: 100vh;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  `,
  wrapper: `
    display: flex;
    position: relative;
    z-index: 1;
    width: auto;
    margin: auto;
    max-width: 45rem;
    height: auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media( min-width: ${Breakpoints[480]}) {
      margin: auto 4rem;
    }

    @media (min-width: ${Breakpoints[720]}) {
      display: inline-flex;
      flex-shrink: 1;
      flex-direction: row;
      align-items: flex-start;
    }
  `
};
