import { BaseColor } from './base_color';

describe('BaseColor', () => {
  it('Sets the hue to 0 when invalid.', () => {
    const col = new BaseColor(1080, 50, 50, 1);
    expect(col.hue).toEqual(0);
  });
  
  it('Sets the saturation to 0 when invalid.', () => {
    const col = new BaseColor(50, 300, 50, 1);
    expect(col.saturation).toEqual(0);
  });

  it('Sets the lightness to 0 when invalid.', () => {
    const col = new BaseColor(100, 100, -12, 1);
    expect(col.lightness).toEqual(0);
  });

  it('Sets the alpha value to opaque when invalid.', () => {
    const col = new BaseColor(100, 100, 100, 3);
    expect(col.alpha).toEqual(1);
  });

  it('Assigns values to the corresponding channels when valid.', () => {
    const col = new BaseColor(100, 100, 100, 0.3);
    expect(col.hue).toBe(100);
    expect(col.saturation).toBe(100);
    expect(col.lightness).toBe(100);
    expect(col.alpha).toBe(0.3);
  });
});
