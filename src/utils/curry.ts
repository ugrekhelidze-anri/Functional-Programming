/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 *
 * Currying allows us to convert multi arg functions into single chained arg functions
 *
 * @example
 * const add = (a, b) => a + b;
 * const curriedAdd = curry(add);
 *
 * curryAdd(3)(5); // => 8
 *
 */

export function curry(fn: (...args: any[]) => any) {
  return function curried(...arg: any[]) {
    if (fn.length === 1) {
      return fn(...arg); // execute instantly if only 1 param
    }

    return curry(fn.bind(null, ...arg)); // set arg as first param
  };
}
