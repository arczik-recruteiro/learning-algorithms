export const makeGraphItem = ({
  itemName,
  linkedItems = [],
  features = {},
} = {}) => {
  return {
    itemName,
    linkedItems,
    features,
  };
};
