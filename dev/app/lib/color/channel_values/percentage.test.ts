import { Percentage } from './percentage';

describe('A Percentage', () => {
  it('Throws if passed a number greater than 100.', () => {
    expect(() => {
      new Percentage(100.1);
    }).toThrow('Percentage can only range from 0 to 100.');
  });

  it('Throws if passed a number less than 0.', () => {
    expect(() => {
      new Percentage(-1);
    }).toThrow('Percentage can only range from 0 to 100.');
  });

  it('Accepts a number between 0 and 100.', () => {
    const p = new Percentage(39.4);
    expect(p.value).toEqual(39.4);
  });
});
