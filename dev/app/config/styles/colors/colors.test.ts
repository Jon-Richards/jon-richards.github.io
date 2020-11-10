import { Colors } from './colors';

describe('Colors', () => {
  it('Contains three swatches.', () => {
    const s1 = Colors.SWATCH_1;
    const s2 = Colors.SWATCH_2;
    const s3 = Colors.SWATCH_3;
    expect(s1.value).toEqual('hsla(0, 0%, 14%, 1)');
    expect(s2.value).toEqual('hsla(48, 7%, 86%, 1)');
    expect(s3.value).toEqual('hsla(59, 100%, 50%, 1)');
  });
});
