import { quickSort } from './quickSort.mjs';

describe('quickSort', () => {
  it('should return proper sorted result', () => {
    const input1 = [];
    const input2 = [1];
    const input3 = [2, 1];
    const input4 = [5, 1, 10];
    const input5 = [5, 1, 1, 2, 10];
    const input6 = [22, 13, 66, 5, 1, 1, 2, 10];

    expect(quickSort(input1)).toEqual([]);
    expect(quickSort(input2)).toEqual([1]);
    expect(quickSort(input3)).toEqual([1, 2]);
    expect(quickSort(input4)).toEqual([1, 5, 10]);
    expect(quickSort(input5)).toEqual([1, 1, 2, 5, 10]);
    expect(quickSort(input6)).toEqual([1, 1, 2, 5, 10, 13, 22, 66]);
  });
});
