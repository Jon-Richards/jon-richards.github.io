import { Color } from './color';

describe('A Color', () => {
  it('Throws if passed a number greater than 255.', () => {
    expect(() => {
      const col = new Color(256);
    }).toThrow('Color must be an integer from 0 to 255.');
  });

  it('Throws if passed a number less than 0.', () => {
    expect(() => {
      const col = new Color(-1);
    }).toThrow('Color must be an integer from 0 to 255.');
  });

  it('Throws if passed a number that is not an integer.', () => {
    expect(() => {
      const col = new Color(1.2);
    }).toThrow('Color must be an integer.');
  });

  it ('Accepts a number between 0 and 255.', () => {
    const col = new Color(45);
    expect(col.value).toEqual(45);
  });
});