import { binarySearch } from './binarySearch.mjs';

describe('binarySearch', () => {
  const input1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const input2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  it('should work', () => {
    const result1 = binarySearch(input1, 8);
    const result2 = binarySearch(input2, 3);
    const result3 = binarySearch(input2, 1);
    const result4 = binarySearch(input2, 10);
    const result5 = binarySearch(input2, 100);
    const result6 = binarySearch(input2, 1);
    const result7 = binarySearch(input2, -1);

    expect(result1).toBe(7);
    expect(result2).toBe(2);
    expect(result3).toBe(0);
    expect(result4).toBe(9);
    expect(result5).toBeNull();
    expect(result6).toBe(0);
    expect(result7).toBeNull();
  });
});
