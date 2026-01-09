import { map } from '../../src';

describe('Map algoruthm', () => {
  it('should correctly map an array', () => {
    const numbers = [1, 2, 3, 4];
    const sum = map(numbers, (num) => num + 1);
    const double = map(numbers, (num) => num * 2);

    expect(sum).toEqual([2, 3, 4, 5]);
    expect(double).toEqual([2, 4, 6, 8]);
  });

  it('should correctly map an array of objects', () => {
    const users = [
      { name: 'Anri', age: 18 },
      { name: 'Saba', age: 21 },
      { name: 'Dzmitry', age: 25 },
    ];
    const names = map(users, (user) => user.name);
    const ages = map(users, (user) => user.age);

    expect(names).toEqual(['Anri', 'Saba', 'Dzmitry']);
    expect(ages).toEqual([18, 21, 25]);
  });

  it('should correctly map an array of strings', () => {
    const names = ['Anri', 'Saba', 'Dzmitry'];
    const upperNames = map(names, (name) => name.toUpperCase());

    expect(upperNames).toEqual(['ANRI', 'SABA', 'DZMITRY']);
  });
});
