/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Partial function is a function that accepts a function as an argument
 * and returns a new function that is a partial application of the previous function.
 *
 * @example
 * function add(a: number, b: number): number {
 *   return a + b;
 * }
 *
 * const add5 = partial(add, 5);
 * add5(3); // 8
 */

export function partial(fn: (...args: any[]) => any, ...args: any[]) {
  return function (...args2: any[]) {
    return fn(...args, ...args2);
  };
}
