import { getDaysForYear } from './get-days-for-year';

describe('getDaysForYear', () => {
  test('should output a valid array', () => {
    const days = getDaysForYear();
    expect(days[0].format).toEqual('01-01');
    expect(days[45].format).toEqual('02-15');
  })
});
