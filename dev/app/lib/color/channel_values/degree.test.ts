import { Degree } from './degree';

describe('A Degree', () => {
  it('Throws if passed a number greater than 360.', () => {
    expect(() => {
      new Degree(360.1);
    }).toThrow('Degree can only range from 0 to 360.');
  });

  it('Throws if passed a number less than 0.', () => {
    expect(() => {
      new Degree(-1);
    }).toThrow('Degree can only range from 0 to 360.');
  });

  it('Accepts a number between 0 and 360.', () => {
    const d = new Degree(239.4);
    expect(d.value).toEqual(239.4);
  });
});
