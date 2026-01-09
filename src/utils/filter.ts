/**
 * Filter Algorithm
 *
 * Iterate over an array, if condition is true add to results, return new array
 *
 * @example
 * const numbers = [1, 2, 3, 4];
 * const evenNumbers = filter(numbers, (num) => num % 2 === 0);
 * const oddNumbers = filter(numbers, (num) => num % 2 !== 0);
 *
 * console.log(evenNumbers); // [2, 4]
 * console.log(oddNumbers); // [1, 3]
 */

export function filter<T>(arr: T[], fn: (value: T, index: number) => boolean) {
  const results: T[] = []; // hold the results

  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      // if true add to results
      results.push(arr[i]);
    }
  }

  return results;
}
