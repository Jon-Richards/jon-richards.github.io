import { UnitInterval } from './unit_interval';

describe('A Unit Interval', () => {
  it('Throws if passed a number greater than 1.', () => {
    expect(() => {
      const i = new UnitInterval(1.2);
    }).toThrow('Unit interval must range from 0 to 1.');
  });

  it('Throws if passed a number less than 0.', () => {
    expect(() => {
      const i = new UnitInterval(-1);
    }).toThrow('Unit interval must range from 0 to 1.');
  });

  it ('Accepts a number from 0 and 1.', () => {
    const i1 = new UnitInterval(0.4);
    const i2 = new UnitInterval(1);
    const i3 = new UnitInterval(0);
    expect(i1.value).toEqual(0.4);
    expect(i2.value).toEqual(1);
    expect(i3.value).toEqual(0);
  });
});