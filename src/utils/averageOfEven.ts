import { filter } from './filter';
import { linearFold } from './linearFold';

/**
 * Filters for even numbers first using Filter utillity
 * Sums Using our Fold Utillity
 *
 * @example
 * const numbers = [1, 2, 3, 4];
 * const averageOfEvenSum = averageOfEven(numbers) //  6 / 2 = 3
 */

export function averageOfEven(arr: number[]) {
  const evenNumbers = filter(arr, (num: number) => num % 2 === 0);
  const sumOfEvenNumbers = linearFold((acc, x) => acc + x, 0, evenNumbers);
  if (evenNumbers.length === 0) return 0;
  return sumOfEvenNumbers / evenNumbers.length;
}
