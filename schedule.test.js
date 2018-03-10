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

describe('findIndexFromDateString', () => {
  test('should be able to perform reverse of getDays', () => {
    expect(schedule.findIndexFromDateString('01-01')).toEqual(0);
    expect(schedule.findIndexFromDateString('02-15')).toEqual(45);

    expect(schedule.findIndexFromDateString('02-29', helpers.createLeapYear('02-29'))).toEqual(59);
    expect(schedule.findIndexFromDateString('02-29', helpers.createNonLeapYear('02-29'))).toEqual(58);
  });
});

// describe('leapDayOccursInSchedule', () => {
//   const sampleRanges = ['01-01', '01-02', '02-28', '03-01', '12-30', '12-31'];
//   const sampleRangesWithLeapYear = [...sampleRanges, '02-29'];

//   test('Should occur in schedule with start date of January 1 and any current day', () => {
//     const date = helpers.createLeapYear('01-01');
//     sampleRanges.forEach((range) => {
//       expect(schedule.leapDayOccursInSchedule(range, date)).toEqual(true);
//     });
//   });
// });
