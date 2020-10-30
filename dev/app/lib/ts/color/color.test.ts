import { Color } from './color';

describe('Color', () => {
  it('Accepts hue, saturation, lightness, and alpha values.', () => {
    const col = new Color(20, 30, 40, 0.5);
    expect(col.value())
        .toEqual({hue: 20, saturation: 30, lightness: 40, alpha: 0.5});
  });

  it('Defaults the alpha value to 1 if not provided.', () => {
    const col = new Color(20, 30, 40);
    expect(col.value())
        .toEqual({hue: 20, saturation: 30, lightness: 40, alpha: 1});
  });

  describe('#value', () => {
    it('Returns an object with the hsla value of the color.', () => {
      const col = new Color(20, 20, 20, 1);
      expect(col.value())
          .toEqual({hue: 20, saturation: 20, lightness: 20, alpha: 1});
    });
  });

  describe('#asHSLA', () => {
    it('Returns the current color as an hsla string.', () => {
      const col = new Color(20, 30, 40, 1);
      const result = 'hsla(20, 30%, 40%, 1)';
      expect(col.asHSLA()).toEqual(result);
    });
  });

  describe('#asHSL', () => {
    it('Returns the current color as an hsl string.', () => {
      const col = new Color(20, 30, 40);
      const result = 'hsl(20, 30%, 40%)';
      expect(col.asHSL()).toEqual(result);
    });
  });

  describe('#adjustHue', () => {
    it('Returns a new color.', () => {
      const col = new Color(20, 30, 40);
      const result = col.adjustHue(col.value().hue);
      expect(result).not.toBe(col);
      expect(result.asHSLA()).toEqual('hsla(20, 30%, 40%, 1)');
    });

    it('Returns a new color with the adjusted hue value.', () => {
      const col = new Color(20, 30, 40);
      const result = col.adjustHue(60);
      expect(result.asHSLA()).toEqual('hsla(60, 30%, 40%, 1)');
    });
  });

  describe('#adjustSaturation', () => {
    it('Returns a new color.', () => {
      const col = new Color(20, 30, 40);
      const result = col.adjustSaturation(col.value().saturation);
      expect(result).not.toBe(col);
      expect(result.asHSLA()).toEqual('hsla(20, 30%, 40%, 1)');
    });

    it('Returns a new color with the adjusted saturation value.', () => {
      const col = new Color(20, 30, 40);
      const result = col.adjustSaturation(60);
      expect(result.asHSLA()).toEqual('hsla(20, 60%, 40%, 1)');
    });
  });

  describe('#adjustLightness', () => {
    it('Returns a new color.', () => {
      const col = new Color(20, 30, 40);
      const result = col.adjustLightness(col.value().lightness);
      expect(result).not.toBe(col);
      expect(result.asHSLA()).toEqual('hsla(20, 30%, 40%, 1)');
    });

    it('Returns a new color with the adjusted lightness value.', () => {
      const col = new Color(20, 30, 40);
      const result = col.adjustLightness(60);
      expect(result.asHSLA()).toEqual('hsla(20, 30%, 60%, 1)');
    });
  });

  describe('#adjustAlpha', () => {
    it('Returns a new color.', () => {
      const col = new Color(20, 30, 40, 0.5);
      const result = col.adjustAlpha(col.value().alpha);
      expect(result).not.toBe(col);
      expect(result.asHSLA()).toEqual('hsla(20, 30%, 40%, 0.5)');
    });

    it('Returns a new color with the adjusted alpha value.', () => {
      const col = new Color(20, 30, 40, 0.5);
      const result = col.adjustAlpha(0.8);
      expect(result.asHSLA()).toEqual('hsla(20, 30%, 40%, 0.8)');
    });
  });
});