import { Breakpoints } from 'Config/styles/breakpoints';

/** Styles for the header. */
export const STYLES = {
  header: `
    display: flex;
    width: 100%;
    position: fixed;
    z-index: 99;
    bottom: 0rem;
    left: 0rem;
    align-items: center;
    justify-content: center;
    transform: translateY(5rem);

    @media (min-width: ${Breakpoints[720]}) {
      justify-content: flex-end;
      top: 0rem;
      bottom: initial;
      transform: translateY(-5rem);
    }
  `
};
