import { Colors } from 'Config/styles/colors';

const boxShadowColor = Colors.SWATCH_1.withLightness(0).withAlpha(0.5).value;

/** Styles for the Panel component. */
export const STYLES = {
  frame: `
    display: inline-flex;
    width: 100%;
    height: auto;
    position: relative;
    padding: 1px;
    margin: 0rem;
    overflow: hidden;
    background-color: ${Colors.SWATCH_1.value};
    background-image: linear-gradient(
      170deg,
      ${Colors.SWATCH_1.withLightness(30).value},
      ${Colors.SWATCH_1.withLightness(10).value},
      ${Colors.SWATCH_1.withLightness(17).value}
    );
    box-shadow: 0.4rem 0.8rem 2rem 0rem ${boxShadowColor};
  `,
  content: `
    display: block;
    width: 100%;
    height: 100%;
    margin: 0rem;
    padding: 0rem;
    background-color: ${Colors.SWATCH_1.value};
    background-image: linear-gradient(
      170deg,
      ${Colors.SWATCH_1.value},
      ${Colors.SWATCH_1.withLightness(8).value}
    );
  `,
};
