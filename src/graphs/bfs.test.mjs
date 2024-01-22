'use strict';

import { breadthFirstSearch } from './bfs.mjs';
import { makeGraphItem } from './makeGraphItem.mjs';

const makeMangoTestGraph = () => ({
  Artur: makeGraphItem({
    itemName: 'Artur',
    linkedItems: ['Asia', 'Olek', 'Aurelka'],
  }),
  Asia: makeGraphItem({
    itemName: 'Asia',
    linkedItems: ['Olek', 'Aurelka'],
    features: {
      isWashingDishes: true,
    },
  }),
  Aurelka: makeGraphItem({
    itemName: 'Aurelka',
    linkedItems: ['Olek', 'Dominika'],
    features: {
      isPlayingDolls: true,
    },
  }),
  Olek: makeGraphItem({
    itemName: 'Aurelka',
    linkedItems: ['Artur'],
    features: {
      isPlayingLego: true,
    },
  }),
  Dominika: makeGraphItem({
    itemName: 'Dominika',
    linkedItems: ['Olek', 'Michal'],
    features: {
      isWashingDishes: true,
    },
  }),
  Michal: makeGraphItem({
    itemName: 'Michal',
    linkedItems: ['Olek'],
    features: {
      isSellingMango: true,
    },
  }),
});

describe('breadthFirstSearch', () => {
  it('should find the closest seller on mango', () => {
    const inputGraph = makeMangoTestGraph();
    const result1 = breadthFirstSearch(inputGraph, 'Artur', 'isSellingMango');
    const result2 = breadthFirstSearch(
      inputGraph,
      'Olek',
      'isDancingBreakDance'
    );

    expect(result1).not.toBeUndefined();
    expect(result1.itemName).toEqual('Michal');

    expect(result2).toBeUndefined();
  });
});
