export const countsItemsInTheList = (arr = []) => {
  const item = arr.pop();

  if (typeof item === 'undefined') {
    return 0;
  } else return 1 + countsItemsInTheList(arr);
};
