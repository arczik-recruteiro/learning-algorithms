'use strict';

export const multiplicationTable = (arr = []) => {
  if (arr.length === 0) {
    return;
  }

  let i = 0;
  const len = arr.length;
  const result = [];

  do {
    let j = 0;
    result.push(`==== ${arr.at(i)} ====`);
    do {
      const paragraph = `${arr.at(i)} * ${arr.at(j)}=${arr.at(i) * arr.at(j)}`;

      result.push(paragraph);
    } while (++j < len);
  } while (++i < len);

  return result;
};
