import { curry } from '../../src/utils/curry';

describe('curry', () => {
  it('Correctly adds numbers', () => {
    const add = (a: number, b: number) => a + b;
    const curriedAdd = curry(add);

    expect(curriedAdd(3)(5)).toBe(8);
  });

  test('currying does not modify original function', () => {
    const add = (a: number, b: number) => a + b;
    const curriedAdd = curry(add);

    curriedAdd(2)(3);
    curriedAdd(4)(5);

    expect(add(1, 1)).toBe(2); // still works
  });

  test('arguments are applied in correct order', () => {
    const subtract = (a: number, b: number, c: number) => a - b - c;
    expect(curry(subtract)(10)(3)(2)).toBe(5);
  });
});
