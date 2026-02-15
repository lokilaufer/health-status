import { getHealthStatus } from '../healthIndicator';

describe('getHealthStatus', () => {
  test('should return "healthy" for health > 50', () => {
    expect(getHealthStatus({ name: 'Маг', health: 90 })).toBe('healthy');
  });

  test('should return "wounded" for health between 15 and 50', () => {
    expect(getHealthStatus({ name: 'Воин', health: 30 })).toBe('wounded');
    expect(getHealthStatus({ name: 'Воин', health: 50 })).toBe('wounded');
    expect(getHealthStatus({ name: 'Лучник', health: 15 })).toBe('wounded');
  });

  test('should return "critical" for health < 15', () => {
    expect(getHealthStatus({ name: 'Разбойник', health: 10 })).toBe('critical');
    expect(getHealthStatus({ name: 'Мертвый', health: 0 })).toBe('critical');
  });
});