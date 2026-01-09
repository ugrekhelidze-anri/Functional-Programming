import { linearFold } from './linearFold';

/**
 * Sum of random numbers
 *
 * generate array with random numbers as elements max 10
 * uses linear fold util to sum the numbers
 *
 * @example
 * const randomSum = sumOfRandomNumbers();
 * console.log(randomSum); // example: 123 - can be anything as it's random
 */

export function sumOfRandomNumbers(): number {
  const numbers: number[] = Array.from(
    { length: 10 },
    () => Math.floor(Math.random() * 100) + 1,
  ); // generate 1 to 100 random number, 10 in total
  const sum = linearFold((acc, x) => acc + x, 0, numbers); // sum of random numbers
  return sum;
}
