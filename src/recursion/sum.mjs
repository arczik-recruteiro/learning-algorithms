export const sum = (arr = []) => {
  return arr.length === 0 ? 0 : arr.pop() + sum(arr);
};
