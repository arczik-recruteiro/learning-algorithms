export const quickSort = (arr = []) => {
  const workArr = arr.slice(0);

  if (workArr.length < 2) {
    return workArr;
  }

  const pivotIndex = Math.floor(workArr.length / 2);

  const pivotElement = workArr.splice(pivotIndex, 1).at(0);

  const lowerValues = workArr.filter((i) => i < pivotElement);
  const equalAndHigherValues = workArr.filter((i) => i >= pivotElement);

  return [
    ...quickSort(lowerValues),
    pivotElement,
    ...quickSort(equalAndHigherValues),
  ];
};
