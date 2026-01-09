/* eslint-disable @typescript-eslint/no-explicit-any */
/*
 * Memoization
 *
 * Allows us to cache the result of a function call.
 * Handles NaN and Infinity.
 *
 * @example
 * const memoizedFn = memoize(fn);
 * memoizedFn(arg);
 *
 */

export function memoize<T, R>(fn: (arg: T) => R) {
  const cache = new Map<any, R>();

  return (arg: T): R => {
    const key = arg !== arg ? '__NaN__' : arg; // handle NaN
    if (cache.has(key)) {
      return cache.get(key)!;
    }

    const result = fn(arg);
    cache.set(key, result);
    return result;
  };
}
