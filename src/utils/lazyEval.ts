/* eslint-disable @typescript-eslint/no-explicit-any */
/*
 * Lazy Evaluation
 *
 * Allows us to wrap a value in a function, so we can call it later as a function to get the value
 *
 * @example
 * function multiply(a, b) {
 *   return a * b;
 *  }
 *
 * const lazyValue = lazy(() => 5);
 * const result = multiply(lazyValue(), 10);
 */

export function lazy<T extends any[], R>(fn: (...args: T) => R, ...args: T) {
  return () => fn(...args);
}
