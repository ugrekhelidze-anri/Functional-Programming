import { linearFold } from '../../src';
/* eslint-disable @typescript-eslint/no-unused-vars */

describe('linear fold', () => {
  it('should correctly sum numbers', () => {
    const numbers = [1, 2, 3, 4];
    const sum = linearFold((acc, x) => acc + x, 0, numbers);
    expect(sum).toBe(10);
  });
  test('multiplies numbers correctly', () => {
    const numbers = [1, 2, 3, 4];
    const product = linearFold((acc, x) => acc * x, 1, numbers);
    expect(product).toBe(24);
  });
  test('does not modify original array', () => {
    const arr = [1, 2, 3];
    const result = linearFold((acc, x) => acc + x, 0, arr);
    expect(arr).toEqual([1, 2, 3]);
  });
});
