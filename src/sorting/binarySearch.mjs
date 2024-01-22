export const binarySearch = (array = [], desiredItem = null) => {
  if (desiredItem === null) {
    return desiredItem;
  }

  let min = 0;
  let high = array.length - 1;

  while (min <= high) {
    let mid = Math.floor((min + high) / 2);

    if (array[mid] === desiredItem) {
      return mid;
    } else if (array[mid] < desiredItem) {
      min = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return null;
};
