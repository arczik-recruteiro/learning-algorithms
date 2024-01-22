import { selectionSort } from './selectionSort.mjs';

describe('selectionSort', () => {
  it('should return sorted result', () => {
    const inputArr = [55, 10, 12, 1, 8, 5, 8, 23];
    const result = selectionSort(inputArr);

    expect(result).toEqual([1, 5, 8, 8, 10, 12, 23, 55]);
  });
});
