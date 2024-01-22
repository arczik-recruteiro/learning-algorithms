'use strict';

const preparePaths = (graph, startKey) => {
  const resultDict = {};

  for (const vertice in graph) {
    if (vertice === startKey) {
      resultDict[vertice] = {
        distanceFromStart: 0,
        previousVertice: undefined,
      };
    } else {
      resultDict[vertice] = {
        distanceFromStart: Infinity,
        previousVertice: undefined,
      };
    }

    for (const innerVertice in graph[vertice]) {
      if (typeof resultDict[innerVertice] === 'undefined') {
        resultDict[innerVertice] = {
          distanceFromStart: Infinity,
          previousVertice: undefined,
        };
      }
    }
  }

  return resultDict;
};

export const findClosestNode = (
  graph,
  paths,
  currentVerticeKey,
  visited = [],
) => {
  let lowestValue = Infinity,
    lowestValueVertice;

  for (const neighbour in graph[currentVerticeKey]) {
    const distance =
      graph[currentVerticeKey][neighbour] +
      paths[currentVerticeKey].distanceFromStart;

    if (distance < paths[neighbour].distanceFromStart) {
      console.log('przestawianko');
      paths[neighbour].distanceFromStart = distance;
      paths[neighbour].previousVertice = currentVerticeKey;
    }
  }

  for (const pathKey in paths) {
    if (
      !visited.includes(pathKey) &&
      lowestValue > paths[pathKey].distanceFromStart
    ) {
      lowestValue = paths[pathKey].distanceFromStart;
      lowestValueVertice = pathKey;
    }
  }

  return lowestValueVertice;
};

export const getShortestPath = (paths, startKey, endKey) => {
  const resultPath = [endKey];
  let currentKey = endKey;

  do {
    currentKey = paths[currentKey].previousVertice;
    resultPath.push(currentKey);
  } while (currentKey !== startKey);

  return resultPath.reverse();
};

export const dijkstra2 = (graph, startKey, endKey) => {
  const paths = preparePaths(graph, startKey);
  const visitedVertives = [];

  let closestNode = findClosestNode(graph, paths, startKey, visitedVertives);

  while (typeof closestNode !== 'undefined') {
    visitedVertives.push(closestNode);

    closestNode = findClosestNode(graph, paths, closestNode, visitedVertives);
  }

  console.log('ultimate paths');
  console.log(paths);

  const shortestPaths = getShortestPath(paths, startKey, endKey);
  console.log('shortestPaths paths', shortestPaths);

  return { value: paths[endKey].distanceFromStart, paths, shortestPaths };
};
