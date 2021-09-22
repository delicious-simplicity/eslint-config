import { trim, filter } from './jest';

const list = ['apple', 'pear', 'orange', 'banana', 'lyche'];

describe('jest', () => {
  it('trims', () => {
    expect(trim(' hello everybody! ')).toBe('hello everybody!');
  });

  it('filters', () => {
    const filtered = filter(list, (item) => item === 'orange');
    expect(filtered[0]).toBe('orange');
  });
});
