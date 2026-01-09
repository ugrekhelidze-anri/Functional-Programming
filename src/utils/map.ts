/**
 * Map algorithm
 *
 * Iterate over an array and apply a function to each item
 *
 * @example
 * const numbers = [1, 2, 3, 4];
 * const sum = map(numbers, (num) => num + 1);
 * const double = map(numbers, (num) => num * 2);
 *
 * console.log(sum); // [2, 3, 4, 5]
 * console.log(double); // [2, 4, 6, 8]
 */

export function map<T, U>(arr: T[], fn: (value: T, index: number) => U) {
  const results: U[] = []; // hold the results
  for (let i = 0; i < arr.length; i++) {
    results.push(fn(arr[i], i)); // apply the function to each item
  }

  return results;
}
