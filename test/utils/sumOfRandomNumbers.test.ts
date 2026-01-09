import { sumOfRandomNumbers } from '../../src';

describe('Sum of random numbers from an array', () => {
  it('Should always return a number', () => {
    const randomSum = sumOfRandomNumbers();
    expect(typeof randomSum).toBe('number');
  });
  it('Should return a sum between 10 and 1000', () => {
    const sum = sumOfRandomNumbers();
    expect(sum).toBeGreaterThanOrEqual(10);
    expect(sum).toBeLessThanOrEqual(1000);
  });
  it('Should always return a number in range for multiple calls', () => {
    for (let i = 0; i < 100; i++) {
      const sum = sumOfRandomNumbers();
      expect(typeof sum).toBe('number');
      expect(sum).toBeGreaterThanOrEqual(10);
      expect(sum).toBeLessThanOrEqual(1000);
    }
  });
});
