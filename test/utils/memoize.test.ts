/* eslint-disable @typescript-eslint/no-explicit-any */
import { memoize } from '../../src';
describe('memoize', () => {
  it('should cache the result of a function call', () => {
    const memoizedFn = memoize((arg: number) => arg);
    expect(memoizedFn(1)).toBe(1);
    expect(memoizedFn(1)).toBe(1);
    expect(memoizedFn(2)).toBe(2);
    expect(memoizedFn(2)).toBe(2);
  });
  it('should handle NaN and Infinity', () => {
    const memoizedFn = memoize((arg: number) => arg);
    expect(memoizedFn(NaN)).toBe(NaN);
    expect(memoizedFn(Infinity)).toBe(Infinity);
  });
  it('should handle undefined correctly', () => {
    let callCount = 0;
    const memoizedFn = memoize((arg: any) => {
      callCount++;
      return arg;
    });

    expect(memoizedFn(undefined)).toBeUndefined();
    expect(memoizedFn(undefined)).toBeUndefined();
    expect(callCount).toBe(1); // ensure cached result used
  });
});
