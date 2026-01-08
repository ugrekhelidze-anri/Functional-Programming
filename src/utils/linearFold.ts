/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Linear fold
 *
 * Reduces an array into a single value by applying a function to each element.
 *
 * @example
 * const numbers = [1, 2, 3, 4];
 * const sum = linearFold((acc, x) => acc + x, 0, numbers);
 * console.log(sum); // 10
 */

export function linearFold(
  fn: (acc: any, val: any) => any,
  init: any,
  arr: any[],
): any {
  let acc = init; // current accumulator
  for (const val of arr) {
    // iterate over the array
    acc = fn(acc, val);
  }
  return acc; // return the final accumulator
}
