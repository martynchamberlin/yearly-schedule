import {
  createLeapYear,
  createNonLeapYear,
  createYearWithPreviousLeapYear,
  createYearWithUpcomingLeapYear
} from './test-helpers';
import { leapDayOccursInSchedule } from './leap-day-occurs-in-schedule';

describe('leapDayOccursInSchedule', () => {
  const sampleRanges = ['01-01', '01-02', '02-28', '03-01', '12-30', '12-31'];
  const sampleRangesWithLeapYear = [...sampleRanges, '02-29'];

  test('Should occur with leap year in schedule with start date of January 1 and any current day', () => {
    sampleRangesWithLeapYear.forEach((range) => {
      expect(leapDayOccursInSchedule('01-01', createLeapYear(range))).toEqual(true);
    });
  });

  test('Should not occur in non-leap year in schedule with start date of January 1 and any current day', () => {
    sampleRanges.forEach((range) => {
      expect(leapDayOccursInSchedule('01-01', createNonLeapYear(range))).toEqual(false);
    });
  });

  describe('If start day is Feb 28 and currently in a leap year', () => {
    // When looking at these tests, you might be tempted to say this: “for a given start
    // date, leapDayOccursInSchedule's truthfulness should hold constant for all
    // days, regardless of what that day happens to be.” That's a deceptive oversimplification.
    // In actuality, `leapDayOccursInSchedule` does maintain its truthfulness for the year
    // whose beginning is marked by the start date. Just because we call `createLeapYear()`
    // doesn't mean that the resulting value is a day that is leap-year eligible. The test
    // is whether or not a leap DAY is going to be encountered for a given start day, not
    // whether the day is in a calendar leap year.
    test('Should be true if current day is Feb 28', () => {
      expect(leapDayOccursInSchedule('02-28', createLeapYear('02-28'))).toEqual(true);
    });

    test('Should be true if current day is December 31', () => {
      expect(leapDayOccursInSchedule('02-28', createLeapYear('12-31'))).toEqual(true);
    });

    test('Should be false if current day is January 1', () => {
      expect(leapDayOccursInSchedule('2-28', createLeapYear('01-01'))).toEqual(false);
    });

    test('Should be false if current day is Feb 27', () => {
      expect(leapDayOccursInSchedule('2-28', createLeapYear('02-27'))).toEqual(false);
    });
  });

  describe('If start day is Feb 28 and previous year was leap year', () => {
    test('Should be true if current day is January 1', () => {
      expect(leapDayOccursInSchedule('2-28', createYearWithPreviousLeapYear('01-01'))).toEqual(true);
    });
  });

  test('Start date of May 1, current date April 1, should check current year to see if leap year or not', () => {
    expect(leapDayOccursInSchedule('05-01', createLeapYear('04-01'))).toEqual(true);
    expect(leapDayOccursInSchedule('05-01', createNonLeapYear('04-01'))).toEqual(false);
  });

  test('Start date of May 1, current date May 1, should check next year to see if leap year or not', () => {
    expect(leapDayOccursInSchedule('05-01', createLeapYear('05-01'))).toEqual(false);
    expect(leapDayOccursInSchedule('05-01', createYearWithUpcomingLeapYear('05-01'))).toEqual(true);
  });

  test('Start date of March 1', () => {
    expect(leapDayOccursInSchedule('03-01', createYearWithUpcomingLeapYear('06-01'))).toEqual(true);
    expect(leapDayOccursInSchedule('03-01', createLeapYear('01-01'))).toEqual(true);
  });
});
