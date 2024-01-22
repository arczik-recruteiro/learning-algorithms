'use strict';

export const findNodeWithTheLowestCost = (costs, processed) => {
  let lowestCost = Infinity;
  let lowestCostNode = null;

  console.log('costs', costs);

  for (const costKey in costs) {
    console.log('costKey', costKey, costs[costKey]);

    const costValue = costs[costKey];

    if (costValue < lowestCost && !processed.includes(costKey)) {
      lowestCost = costValue;
      lowestCostNode = costKey;
    }
  }

  return lowestCostNode;
};

export const makeInitialCosts = (graph, startKey, endKey) => {
  const initialCosts = { [endKey]: Infinity };

  for (const childKey in graph[startKey]) {
    initialCosts[childKey] = graph[startKey][childKey];
  }

  return initialCosts;
};

export const dijkstra = (graph = {}, startKey = '', endKey = '') => {
  if (Object.keys(graph).length === 0) {
    return undefined;
  }

  const processed = [];
  const costs = makeInitialCosts(graph, startKey, endKey);
  const parents = {};

  let node = findNodeWithTheLowestCost(costs, processed);

  while (node !== null) {
    const singleCost = costs[node];
    const neighbours = graph[node];

    for (const neighbourKey in neighbours) {
      const newCost = singleCost + neighbours[neighbourKey];

      if (costs[neighbourKey] > newCost) {
        costs[neighbourKey] = newCost;
        parents[neighbourKey] = node;
      }
    }

    processed.push(node);

    node = findNodeWithTheLowestCost(costs, processed);
  }

  return { value: costs[endKey], costs, parents };
};
