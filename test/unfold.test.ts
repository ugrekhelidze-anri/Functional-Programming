import { unfold } from '../src';

describe('linear unfold', () => {
  it('should generate an array from a seed value until a condition is met', () => {
    const result = unfold(
      1,
      (n) => n > 5,
      (n) => n + 1,
      (n) => n,
    );
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });
  it('generate powers of 2 up to 16', () => {
    const result = unfold(
      1,
      (n) => n > 16,
      (n) => n * 2,
      (n) => n,
    );
    expect(result).toEqual([1, 2, 4, 8, 16]);
  });
  it('doesnt change the original value', () => {
    const result = unfold(
      1,
      (n) => n > 5,
      (n) => n + 1,
      (n) => n,
    );
    expect(result).toEqual([1, 2, 3, 4, 5]);
    expect(result).not.toBe([1, 2, 3, 4, 5]);
  });
});
