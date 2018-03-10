import { createLeapYear } from './test-helpers';
import { leapDayOccursInSchedule } from './leap-day-occurs-in-schedule';

describe('leapDayOccursInSchedule', () => {
  const sampleRanges = ['01-01', '01-02', '02-28', '03-01', '12-30', '12-31'];
  const sampleRangesWithLeapYear = [...sampleRanges, '02-29'];

  test('Should occur in schedule with start date of January 1 and any current day', () => {
    sampleRanges.forEach((range) => {
      expect(leapDayOccursInSchedule('01-01', createLeapYear(range))).toEqual(true);
    });
  });
});
