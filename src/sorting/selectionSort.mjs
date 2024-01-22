'use strict';

export const findTheSmallestItemIndex = (arr) => {
  const max = arr.length;

  if (max === 0) {
    return -1;
  }

  if (max === 1) {
    return 0;
  }

  let smallestIndex = 0;

  for (let i = 1; i < max; i++) {
    if (arr[smallestIndex] > arr.at(i)) {
      smallestIndex = i;
    }
  }

  return smallestIndex;
};

export const selectionSort = (arr) => {
  if (typeof arr === 'undefined' || arr === null) {
    return arr;
  }

  const arrayCopy = [...arr];
  const resultArr = [];

  while (arrayCopy.length) {
    const smallestIndex = findTheSmallestItemIndex(arrayCopy);

    resultArr.push(arrayCopy.splice(smallestIndex, 1).at(0));
  }

  return resultArr;
};
