import { findIndexFromDateString } from './find-index-from-date-string';
import { createLeapYear, createNonLeapYear } from '../test-helpers';

describe('findIndexFromDateString', () => {
  test('should be able to perform reverse of getDays', () => {
    expect(findIndexFromDateString('01-01')).toEqual(0);
    expect(findIndexFromDateString('02-15')).toEqual(45);

    expect(findIndexFromDateString('02-29', createLeapYear('02-29'))).toEqual(59);
    expect(findIndexFromDateString('02-29', createNonLeapYear('02-29'))).toEqual(58);
  });
});