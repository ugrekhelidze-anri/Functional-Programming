import { filter } from '../../src';
describe('Filtering Algorithm', () => {
  it('Correctly filters an array', () => {
    const numbers = [1, 2, 3, 4];
    const evenNumbers = filter(numbers, (num) => num % 2 === 0);
    const oddNumbers = filter(numbers, (num) => num % 2 !== 0);

    expect(evenNumbers).toEqual([2, 4]);
    expect(oddNumbers).toEqual([1, 3]);
  });

  it('Correctly filters an array of objects', () => {
    const users = [
      { name: 'Anri', age: 18 },
      { name: 'Saba', age: 21 },
      { name: 'Dzmitry', age: 25 },
    ];
    const names = filter(users, (user) => Boolean(user.name));
    const ages = filter(users, (user) => Boolean(user.age));

    expect(names).toEqual([
      { name: 'Anri', age: 18 },
      { name: 'Saba', age: 21 },
      { name: 'Dzmitry', age: 25 },
    ]);
    expect(ages).toEqual([
      { name: 'Anri', age: 18 },
      { name: 'Saba', age: 21 },
      { name: 'Dzmitry', age: 25 },
    ]);
  });

  it('Correctly filters users whose name starts with S', () => {
    const users = [
      { name: 'Anri', age: 18 },
      { name: 'Saba', age: 21 },
      { name: 'Dzmitry', age: 25 },
    ];

    const sNames = filter(users, (user) => user.name.startsWith('S'));

    expect(sNames).toEqual([{ name: 'Saba', age: 21 }]);
  });
});
