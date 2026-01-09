import { findFirst } from '../../src';
describe('Should find first matching condition element of array', () => {
  it('Should return the first even number', () => {
    const numbers = [1, 3, 4, 6, 7];
    const result = findFirst(numbers, (x) => x % 2 === 0);
    expect(result).toBe(4);
  });

  it('Should return undefined if no element matches', () => {
    const numbers = [1, 3, 5];
    const result = findFirst(numbers, (x) => x % 2 === 0);
    expect(result).toBeUndefined();
  });

  it('Should return the first number greater than 5', () => {
    const numbers = [1, 2, 3, 6, 7];
    const result = findFirst(numbers, (x) => x > 5);
    expect(result).toBe(6);
  });
});
