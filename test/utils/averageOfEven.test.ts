import { averageOfEven } from '../../src/utils/averageOfEven';

describe('Average of even numbers', () => {
  it('Should sum even numbers', () => {
    const numbers = [1, 2, 3, 4];
    const sum = averageOfEven(numbers);
    expect(sum).toEqual(3);
  });
  it('Should return 0 when there are no even numbers', () => {
    expect(averageOfEven([1, 3, 5, 7])).toEqual(0);
  });
  it('Should return average when all numbers are even', () => {
    expect(averageOfEven([2, 4, 6, 8])).toEqual(5);
  });
});
