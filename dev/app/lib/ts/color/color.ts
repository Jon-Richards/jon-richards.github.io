import { BaseColor } from './base_color';
import { Percentage } from './channel_values/percentage';
import { Degree } from './channel_values/degree';
import { UnitInterval } from './channel_values/unit_interval';

/**
 * Stores HSLA color values and provides an API for manipulating them.
 */
export class Color {
  constructor(
    hue: number,
    saturation: number,
    lightness: number,
    alpha = 1
  ) {
    this.baseValue = new BaseColor(hue, saturation, lightness, alpha);
  }

  private baseValue: BaseColor;

  /** Returns an object containing the HSLA value of this color. */
  value() {
    return {
      hue: this.baseValue.hue,
      saturation: this.baseValue.saturation,
      lightness: this.baseValue.lightness,
      alpha: this.baseValue.alpha
    };
  }

  /**
   * Returns the color value as an HSLA string.
   */
  asHSLA(): string {
    const {hue, saturation, lightness, alpha} = this.baseValue;
    return `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`;
  }

  /**
   * Returns the color value as an HSL string, ignoring the alpha value.
   */
  asHSL(): string {
    const {hue, saturation, lightness} = this.baseValue;
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  }

  /**
   * Adjust the color's hue and returns a new Color with the resulting
   * values.
   */
  adjustHue(value: number): Color {
    const val = new Degree(value).value;
    const {saturation, lightness, alpha} = this.baseValue;
    return new Color(val, saturation, lightness, alpha);
  }

  /**
   * Adjust the color's saturation and returns a new Color with the resulting
   * values.
   */
  adjustSaturation(value: number): Color {
    const newSaturation = new Percentage(value).value;
    const {hue, lightness, alpha} = this.baseValue;
    return new Color(hue, newSaturation, lightness, alpha);
  }

  /**
   * Adjust the color's lightness and returns a new Color with the resulting
   * values.
   */
  adjustLightness(value: number): Color {
    const newLightness = new Percentage(value).value;
    const {hue, saturation, alpha} = this.baseValue;
    return new Color(hue, saturation, newLightness, alpha);
  }

  /**
   * Adjust the color's alpha and returns a new Color with the resulting
   * values.
   */
  adjustAlpha(value: number): Color {
    const newAlpha = new UnitInterval(value).value;
    const {hue, saturation, lightness} = this.baseValue;
    return new Color(hue, saturation, lightness, newAlpha);
  }
}
