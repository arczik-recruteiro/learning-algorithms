export const prepareInitCosts = (graph, startKey) => {
  const costs = {};

  for (const firstLevelKey in graph) {
    if (firstLevelKey === startKey) {
      costs[firstLevelKey] = {
        previousVertice: null,
        distanceCostTheFromStart: 0,
      };
    } else {
      costs[firstLevelKey] = {
        previousVertice: null,
        distanceCostTheFromStart: Infinity,
      };
    }

    // walk through neighbours
    for (const secondLevelKey in graph[firstLevelKey]) {
      costs[secondLevelKey] = {
        previousVertice: null,
        distanceCostTheFromStart: Infinity,
      };
    }
  }

  return costs;
};

export const findVerticeWithLowestValue = (costs, visited = []) => {
  let lowestValue = Infinity,
    lowestValueVertice;

  for (const costKey in costs) {
    if (
      !visited.includes(costKey) &&
      lowestValue > costs[costKey].distanceCostTheFromStart
    ) {
      lowestValue = costs[costKey].distanceCostTheFromStart;
      lowestValueVertice = costKey;
    }
  }

  return lowestValueVertice;
};

export const updateCosts = (graph, costs, currentVerticeKey) => {
  const currentDistance = costs[currentVerticeKey].distanceCostTheFromStart;

  // walk through neighbours
  for (const neighbour in graph[currentVerticeKey]) {
    const neighbourDistance = graph[currentVerticeKey][neighbour];

    const newDistance = neighbourDistance + currentDistance;
    // check if current vertice has shorter way than one from costs table
    // if yes, update it
    if (newDistance < costs[neighbour].distanceCostTheFromStart) {
      costs[neighbour].distanceCostTheFromStart = newDistance;
      costs[neighbour].previousVertice = currentVerticeKey;
    }
  }
};

export const getPathFromCosts = (costs, endKey) => {
  let currentKey = endKey;
  const result = [];

  do {
    result.push(currentKey);
    currentKey = costs[currentKey].previousVertice;
  } while (typeof costs[currentKey] !== 'undefined');

  return result.reverse();
};

export const dijkstra3 = (graph, startKey, endKey) => {
  const costs = prepareInitCosts(graph, startKey);

  let visited = [];

  let verticeWithLowestValue = findVerticeWithLowestValue(costs, visited);

  while (typeof verticeWithLowestValue !== 'undefined') {
    updateCosts(graph, costs, verticeWithLowestValue);

    visited.push(verticeWithLowestValue);

    verticeWithLowestValue = findVerticeWithLowestValue(costs, visited);
  }

  const shortestPaths = getPathFromCosts(costs, endKey);

  return { value: costs[endKey].distanceCostTheFromStart, shortestPaths };
};
