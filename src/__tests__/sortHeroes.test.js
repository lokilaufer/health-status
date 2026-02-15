import { sortHeroesByHealth } from '../sortHeroes';

describe('sortHeroesByHealth', () => {
  test('should sort heroes by health in descending order', () => {
    const heroes = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ];

    const expected = [
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ];

    expect(sortHeroesByHealth(heroes)).toEqual(expected);
  });

  test('should not mutate original array', () => {
    const heroes = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
    ];

    const copy = [...heroes];
    sortHeroesByHealth(heroes);
    expect(heroes).toEqual(copy);
  });

  test('should handle empty array', () => {
    expect(sortHeroesByHealth([])).toEqual([]);
  });

  test('should handle array with one hero', () => {
    const heroes = [{ name: 'маг', health: 100 }];
    expect(sortHeroesByHealth(heroes)).toEqual([{ name: 'маг', health: 100 }]);
  });
});