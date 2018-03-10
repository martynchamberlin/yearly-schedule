import { isLeapYear } from './is-leap-year';

describe('isLeapYear', () => {
  test('Should be true for 2020', () => {
    expect(isLeapYear(2020)).toEqual(true);
  });

  test('Should be false for 2019', () => {
    expect(isLeapYear(2019)).toEqual(false);
  });
});