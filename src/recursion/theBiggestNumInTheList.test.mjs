import { theBiggestNumInTheList } from './theBiggestNumInTheList';

describe('theBiggestNumInTheList', () => {
  it('should count properly', () => {
    const input = [1, -10, 20, 15, 5, -2];

    const result1 = theBiggestNumInTheList(input);
    const result2 = theBiggestNumInTheList([]);

    expect(result1).toBe(20);
    expect(result2).toBeUndefined();
  });
});
