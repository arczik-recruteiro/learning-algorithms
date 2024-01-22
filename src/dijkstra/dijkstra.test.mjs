import { dijkstra } from './dijkstra.mjs';

describe('dijkstra', () => {
  it('should return undefined for empty graph', () => {
    const inputGraph = {};
    const result = dijkstra(inputGraph, '', '');

    expect(result).toBeUndefined();
  });

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
    ],
  ])(
    'should return proper result',
    (inputGraph, resultValue, resultParents) => {
      const { value, parents } = dijkstra(inputGraph, 'start', 'meta');

      expect(value).toBe(resultValue);
      expect(parents).toEqual(resultParents);
    }
  );
});
