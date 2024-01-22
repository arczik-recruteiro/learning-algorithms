import { countsItemsInTheList } from './countsItemsInTheList.mjs';

describe('countsItemsInTheList', () => {
  it('should count properly', () => {
    const input = [1, 2, 3, 4, 5];

    const result1 = countsItemsInTheList(input);
    const result2 = countsItemsInTheList([]);

    expect(result1).toEqual(5);
    expect(result2).toEqual(0);
  });
});
