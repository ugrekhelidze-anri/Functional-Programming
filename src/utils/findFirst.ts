/**
 * Find first matching in array
 *
 * Iterates over the array to find the first number that matches condition
 *
 * @example
 * const numbers = [1, 3, 7, 4, 6, 9];
 * const firstEven = first(numbers, x => x % 2 === 0);
 * console.log(firstEven); // 4
 
 */

export function findFirst(arr: number[], fn: (x: number) => boolean) {
  for (const item of arr) {
    if (fn(item)) {
      return item;
    }
  }
  return undefined;
}
