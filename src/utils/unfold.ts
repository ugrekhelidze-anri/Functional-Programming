/**
 * Generates an array from a seed value until a condition is met.
 * is like a for/while loop.
 *
 * @example
 * // Generate numbers from 1 to 5
 * const numbers = unfold(1, n => n > 5, n => n + 1, n => n);
 * console.log(numbers); // [1, 2, 3, 4, 5]
 *
 * @example
 * // Generate powers of 2 up to 16
 * const powersOf2 = unfold(1, n => n > 16, n => n * 2, n => n);
 * console.log(powersOf2); // [1, 2, 4, 8, 16]
 */

export function unfold<S, T>(
  seed: S,
  done: (seed: S) => boolean,
  next: (seed: S) => S,
  value: (seed: S) => T,
): T[] {
  const result: T[] = [];
  let current = seed;

  while (!done(current)) {
    result.push(value(current));
    current = next(current);
  }

  return result;
}
