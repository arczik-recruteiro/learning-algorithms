import { multiplicationTable } from './multiplicationTable.mjs';

describe('multiplicationTable', () => {
  it('should print the result in console', () => {
    // console.log([])

    // console.log()

    const result1 = multiplicationTable([]);
    const result2 = multiplicationTable([1]);
    const result3 = multiplicationTable([2, 3, 5, 2, 5]);

    expect(result1).toBeUndefined();
    expect(result2).toMatchSnapshot();
    expect(result3).toMatchSnapshot();
  });
});
