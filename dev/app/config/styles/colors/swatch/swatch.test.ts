import { Swatch } from './swatch';

describe('Swatch', () => {
  it('Accepts hue, saturation, lightness and alpha values.', () => {
    const s = new Swatch(20, 30, 40, 0.5);
    expect(s).toBeInstanceOf(Swatch);
  });

  it('Generates the alpha value if not provided.', () => {
    const s = new Swatch(20, 30, 40);
    expect(s.value).toEqual('hsla(20, 30%, 40%, 1)');
  });

  describe('#value', () => {
    it('Returns a hsla string matching the values from instantiation.', () => {
      const s = new Swatch(20, 30, 40);
      expect(s.value).toEqual('hsla(20, 30%, 40%, 1)');
    });
  });

  describe('#withLightness', () => {
    it('Returns a new swatch with the new lightness value applied.', () => {
      const s = new Swatch(20, 30, 40);
      const adjusted = s.withLightness(60);
      expect(adjusted.value).toEqual('hsla(20, 30%, 60%, 1)');
    });
  });

  describe('#withAlpha', () => {
    it('Returns a new swatch with the new alpha value applied.', () => {
      const s = new Swatch(20, 30, 40, 1);
      const adjusted = s.withAlpha(0.4);
      expect(adjusted.value).toEqual('hsla(20, 30%, 40%, 0.4)');
    });
  });
});