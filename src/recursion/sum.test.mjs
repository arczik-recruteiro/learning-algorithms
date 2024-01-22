import { sum } from './sum.mjs';

describe('sum', () => {
  it('should calculate proper sum', () => {
    const input = [1, 2, 3, 10, 1];

    const result1 = sum(input);
    const result2 = sum([]);

    expect(result1).toEqual(17);
    expect(result2).toEqual(0);
  });
});
