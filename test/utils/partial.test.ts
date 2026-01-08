import { partial } from '../../src/utils/partial';

describe('partial', () => {
  it('partially applies the function', () => {
    function add(a: number, b: number): number {
      return a + b;
    }

    const add5 = partial(add, 5);
    expect(add5(3)).toBe(8);
  });

  it('partially applies the function with multiple arguments', () => {
    function add(a: number, b: number, c: number): number {
      return a + b + c;
    }

    const add5 = partial(add, 5, 3);

    expect(add5(3)).toBe(11);
  });

  it('does not modify the original function', () => {
    function add(a: number, b: number): number {
      return a + b;
    }

    const add5 = partial(add, 5);
    expect(add(3, 3)).toBe(6);
    expect(add5(3)).toBe(8);
  });
});
