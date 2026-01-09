import { lazy } from '../../src';
describe('Lazy evaluation', () => {
  it('Does not evaluate the function', () => {
    const lazyValue = lazy(() => 5);
    expect(lazyValue()).toBe(5);
  });
  it('Supports functions with arguments', () => {
    function sum(a: number, b: number) {
      return a + b;
    }

    const lazySum = lazy(sum, 2, 3);
    expect(lazySum()).toBe(5);
  });
  it('Can store multiple lazy computations', () => {
    const tasks = [
      lazy((x: number) => x * 2, 3),
      lazy((x: number) => x * 3, 4),
    ];

    expect(tasks[0]()).toBe(6);
    expect(tasks[1]()).toBe(12);
  });
});
