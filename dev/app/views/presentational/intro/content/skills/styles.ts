import { Breakpoints } from 'Config/styles/breakpoints';

/** Styles for the Skills component. */
export const STYLES = {
  root: `
    display: flex;
  `,
  skills: `
    display: flex;
    list-style-type: none;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: auto;
    height: 100%;
    max-width: 100%;

    @media (min-width: ${Breakpoints[720]}) {
      justify-content: flex-start;
    }
  `,
};
