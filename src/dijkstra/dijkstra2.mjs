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

export const findClosestNode = (graph, paths, currentVerticeKey) => {
  // const shorterVertice
  // const shorterVerticeValuej = Infinity;

  console.log(`CURRENT ${currentVerticeKey}`);
  let lowestValue, lowestValueVertice;

  for (const neighbour in graph[currentVerticeKey]) {
    console.log('findClosestNode', neighbour);

    const distance =
      graph[currentVerticeKey][neighbour] +
      paths[currentVerticeKey].distanceFromStart;

    console.log(
      `new distance for ${currentVerticeKey} and it's neighbour ${neighbour} is: ${distance} and current distance is ${paths[neighbour].distanceFromStart}`
    );

    if (!lowestValue) {
      lowestValue === distance;
      lowestValueVertice = neighbour;
    } else if (lowestValue < distance) {
      lowestValue === distance;
      lowestValueVertice = neighbour;
    }

    if (distance < paths[neighbour].distanceFromStart) {
      console.log('przestawianko');
      paths[neighbour].distanceFromStart = distance;
      paths[neighbour].previousVertice = currentVerticeKey;
    }

    console.log('== p1 ==');
    console.log(paths);

    console.log('distance', distance);

    return lowestValueVertice;
  }
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
  const verticesToBeVisited = [startKey];

  let closestNode = findClosestNode(graph, paths, startKey);

  while (typeof findVerticesWithSmallestPath !== undefined) {
    visitedVertives.push(findVerticesWithSmallestPath);

    findVerticesWithSmallestPath = findClosestNode(graph, paths, closestNode);
  }

  // while (verticesToBeVisited.length > 0) {
  //   const currentVertice = verticesToBeVisited.shift();

  //   if (!visitedVertives.includes(currentVertice)) {
  //     console.log('===============');
  //     const closest = findClosestNode(graph, paths, currentVertice);

  //     console.log(
  //       ` ${currentVertice} graph[currentVertice]`,
  //       graph[currentVertice]
  //     );

  //     if (typeof graph[currentVertice] !== 'undefined') {
  //       Array.prototype.push.apply(
  //         verticesToBeVisited,
  //         Object.keys(graph[currentVertice])
  //       );
  //     }
  //   }

  //   // console.log('removing');
  //   visitedVertives.push(currentVertice);

  //   console.log('tip top to be', verticesToBeVisited);
  //   // console.log('tip top already visited', visitedVertives);
  //   console.log('new paths', paths);
  // }

  // console.log('closest');
  // console.log(closest);

  console.log('ultimate paths');
  console.log(paths);

  // console.log('vertices paths',);

  const shortestPaths = getShortestPath(paths, startKey, endKey);
  console.log('shortestPaths paths', shortestPaths);

  return { value: paths[endKey].distanceFromStart, paths, shortestPaths };
};
