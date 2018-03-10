const schedule = require('./schedule');
const helpers = require('./test-helpers');

describe('isLeapYear', () => {
  test('Should be true for 2020', () => {
    expect(schedule.isLeapYear(2020)).toEqual(true);
  });

  test('Should be false for 2019', () => {
    expect(schedule.isLeapYear(2019)).toEqual(false);
  });
});

describe('getDays', () => {
  test('should output a valid array', () => {
    const days = schedule.getDays();
    expect(days[0].format).toEqual('01-01');
    expect(days[45].format).toEqual('02-15');
  })
});

describe('leapDayOccursInSchedule', () => {
  test('Should occur in schedule with start date of January 1 and any current day', () => {
    const date = helpers.createLeapYear('01-01');
    expect(schedule.leapDayOccursInSchedule('01-01', date)).toEqual(true);
  })
});
