import { Degree } from './channel_values/degree';
import { Percentage } from './channel_values/percentage';
import { UnitInterval } from './channel_values/unit_interval';

type ValueKind = typeof Degree | typeof Percentage | typeof UnitInterval;

/** A color object.  If passed invalid values, defaults to black. */
export class BaseColor {
  constructor(
    readonly hue: number,
    readonly saturation: number,
    readonly lightness: number,
    readonly alpha: number
  ) {
    this.hue = this.assignValue(hue, Degree);
    this.saturation = this.assignValue(saturation, Percentage);
    this.lightness = this.assignValue(lightness, Percentage);
    this.alpha = this.assignValue(alpha, UnitInterval);
  }

  private assignValue(value: number, kind: ValueKind): number {
    let result = this.computeDefaultValue(kind);
    try {
      result = new kind(value).value;
    } catch (error) {
      console.error(error);
    } finally {
      return result;
    }
  }

  private computeDefaultValue(kind: ValueKind): number {
    switch (kind) {
    case Degree:
      return 0;
    case Percentage:
      return 0;
    case UnitInterval:
      return 1;
    default:
      return 0;
    }
  }
}
