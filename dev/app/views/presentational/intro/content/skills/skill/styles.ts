import { Breakpoints } from 'Config/styles/breakpoints';
import { Colors } from 'Config/styles/colors';

/** Styles for a single skill. */
export const STYLES = {
  skill: `
    display: none;
    margin: 0.2rem 0.2rem;
    padding: 0.4rem 1rem;
    width: auto;
    background: ${Colors.SWATCH_1.value};
    color: ${Colors.SWATCH_2.withLightness(30).value};

    @media (min-width: ${Breakpoints[720]}) {
      display: flex;
    }
  `,
  coreSkill: `
    display: none;
    margin: 0.2rem 0.2rem;
    padding: 0.4rem 1rem;
    width: auto;
    background: ${Colors.SWATCH_1.value};
    color: ${Colors.SWATCH_2.withLightness(30).value};

    @media (min-width: ${Breakpoints[480]}) {
      display: flex;
    }
  `
};