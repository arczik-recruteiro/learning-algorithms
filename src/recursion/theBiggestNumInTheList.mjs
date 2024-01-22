export const theBiggestNumInTheList = (arr = []) => {
  if (arr.length === 0) {
    return undefined;
  }

  if (arr.length === 1) {
    return arr.at(0);
  }

  const desiredNum = arr.pop();
  const newNum = theBiggestNumInTheList(arr);

  // return desiredNum > theBiggestNumInTheList(arr)?desiredNum(arr)
  return desiredNum > newNum ? desiredNum : newNum;
};
