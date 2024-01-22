'use strict';

export const breadthFirstSearch = (
  graph = {},
  rootItemName,
  desiredFeature
) => {
  const rootElement = graph[rootItemName];
  const queue = [...rootElement.linkedItems];
  const processedElements = [];

  while (queue.length > 0) {
    const operationalElementName = queue.shift();

    //  check if item is not a root item and it wasn't processed before
    if (
      !processedElements.includes(operationalElementName) &&
      operationalElementName !== rootItemName
    ) {
      const operationalElement = graph[operationalElementName];

      if (operationalElement.features[desiredFeature]) {
        return operationalElement;
      } else {
        Array.prototype.push.apply(queue, operationalElement.linkedItems);
      }

      processedElements.push(operationalElementName);
    }
  }

  return undefined;
};
