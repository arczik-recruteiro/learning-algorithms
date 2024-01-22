import { dijkstra2 } from './dijkstra2.mjs';

describe('dijkstra2', () => {
  it.each([
    [
      {
        start: {
          a: 6,
          b: 2,
        },
        a: {
          meta: 1,
        },
        b: { meta: 5, a: 3 },
      },
      6,
      { a: 'b', meta: 'a' },
      ['start', 'b', 'a', 'meta'],
      'start',
      'meta',
    ],
    [
      {
        start: {
          a: 5,
          b: 2,
        },
        a: {
          c: 2,
          d: 4,
        },
        b: { a: 8, c: 7 },
        c: {
          e: 1,
        },
        d: {
          c: 6,
          e: 3,
        },
      },
      8,
      { a: 'b', meta: 'a' },
      ['start', 'a', 'c', 'e'],
      'start',
      'e',
    ],
    [
      {
        start: {
          a: 10,
        },
        a: {
          b: 20,
        },
        b: { c: 1, d: 30 },
        c: {
          a: 1,
        },
      },
      60,
      { a: 'b', meta: 'a' },
      ['start', 'a', 'b', 'd'],
      'start',
      'd',
    ],
  ])(
    'should return proper result',
    (
      inputGraph,
      resultValue,
      resultParents,
      resultShortestPaths,
      startKey,
      endKey
    ) => {
      const { value, paths, shortestPaths } = dijkstra2(
        inputGraph,
        startKey,
        endKey
      );

      expect(value).toBe(resultValue);
      // expect(paths).toEqual(resultParents);
      expect(shortestPaths).toEqual(resultShortestPaths);
    }
  );
});
