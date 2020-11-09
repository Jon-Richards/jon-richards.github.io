import { Breakpoints } from 'Config/styles/breakpoints';
import { Colors } from 'Config/styles/colors';
import { Fonts } from 'Config/styles/fonts';

/** Styles for a single skill. */
export const STYLES = {
  skill: `
    display: none;
    margin: 0.2rem 0.2rem;
    padding: 0.4rem 1rem 0.5rem;
    width: auto;
    background: ${Colors.SWATCH_1.withLightness(15).value};
    color: ${Colors.SWATCH_2.value};
    font-family: ${Fonts.OPEN_SANS.fontFamily};
    font-weight: ${Fonts.OPEN_SANS.fontStyles.regular.weights.light};
    border-radius: 0.5rem;

    @media (min-width: ${Breakpoints[720]}) {
      display: block;
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