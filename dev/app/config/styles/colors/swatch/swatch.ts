import { Color } from 'Lib/ts/color';

/**
 * A single color swatch as used by this project.
 */
export class Swatch {
  constructor(hue: number, saturation: number, lightness: number, alpha = 1) {
    this.color = new Color(hue, saturation, lightness, alpha);
  }

  private color: Color;

  /** Returns the hsla color string tracked by this Swatch. */
  get value(): string {
    return this.color.asHSLA();
  }

  /**
   * Accepts a lightness setting and returns a new Swatch with the lightness
   * setting applied.
   */
  withLightness(value: number): Swatch {
    const {hue, saturation, alpha} = this.color.value();
    return new Swatch(hue, saturation, value, alpha);
  }

  /**
   * Accepts an opacity setting and returns a new Swatch with the opacity
   * applied.
   */
  withAlpha(value: number): Swatch {
    const {hue, saturation, lightness} = this.color.value();
    return new Swatch(hue, saturation, lightness, value);
  }
}