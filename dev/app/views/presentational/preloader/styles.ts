import { Colors } from 'Config/styles/colors';

const barColor = Colors.SWATCH_3.value;
const barColorDark = Colors.SWATCH_3.withLightness(40);

/** preloader CSs styles. */
export const STYLES = {
  root: `
    display: block;
    position: fixed;
    z-index: 99;
    width: 100%;
    overflow: hidden;
    height: 0.25rem;
  `,
  gradient: `
    position: relative;
    display: block;
    top: 0rem;
    left: -100%;
    width: 200%;
    height: 100%;

    background-image: linear-gradient(
      90deg,
      ${barColorDark} 0%,
      ${barColor} 45%,
      ${barColorDark} 50%,
      ${barColor} 95%,
      ${barColorDark} 100%
    );
    background-repeat: repeat-x;

    animation-name: preloader-loading;
    animation-direction: normal;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-duration: 0.8s;
    animation-timing-function: linear;

    @keyframes preloader-loading {
      0% {
        left: -100%;
      }
      100% {
        left: 0%;
      }
    }
    
    @keyframes preloader-enter {
      0% {
        transform: translateY(0rem);
      }
      100% {
        transform: translateY(-0.25rem);
      }
    }
  `,
};