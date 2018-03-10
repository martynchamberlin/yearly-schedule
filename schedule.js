/**
 * Determines whether a year is leap year or not
 *
 * @param {number} year
 * @return {bool}
 */
const isLeapYear = (year = new Date().getFullYear()) => {
  return new Date(year, 1, 29).getDate() === 29;
};

/**
 * Computes an array of all the days of the a given year.
 * The date param here is purely for testing purposes. In a real
 * life application you can assume that it is always the current
 * year in which the code is being run.
 *
 * @param {object} date
 * @return {Array}
 */
const getDays = (date = new Date()) => {
  const limit = isLeapYear(date.getFullYear()) ? 366 : 365;
  let i = 0;
  const days = [];
  const oneDay = 60 * 60 * 24 * 1000;
  let seconds = new Date(`Jan 1, ${new Date(date.getTime()).getFullYear()}`).getTime();
  while (i < limit) {
    const day = new Date(seconds);
    const month = `0${day.getMonth() + 1}`.substr(-2);
    const dayOfMonth = `0${day.getDate()}`.substr(-2);
    days.push({ format: `${month}-${dayOfMonth}` });
    seconds += oneDay;
    i++;
  }
  return days;
};

/**
 * Takes a formatted date string and returns its day of the year (0-365)
 *
 * @param {string} date
 * @param {currentDate} - Again, this is only for testing purposes only
 * @return {number}
 */
const findIndexFromDateString = (dateStr, currentDate = new Date()) => {
  const days = getDays(currentDate);
  const index = days.findIndex(day => day.format === dateStr);
  // If it was leap year and leap year doesn't occur in the current year,
  // fallback to Feb 28.
  if (index < 0) {
    return 58;
  }
  return index;
};

/**
 * Determines if a leap year occurs in a schedule, given an annually recurring
 * start day and month.
 *
 * @param {string} startDay - format in MM-dd format
 * @param {object} currentDay - date object
 * @return {bool}
 */
const leapDayOccursInSchedule = (startDay = '01-01', currentDay = new Date()) => {
  // Passing this currentDay param for testing purposes only. This library
  // is really a spec to which implementing libraries should conform, not
  // a core library to actually use.
  const days = getDays(currentDay);
  const integerStart = findIndexFromDateString(startDay);
  // if (integer)
};

module.exports = {
  getDays,
  findIndexFromDateString,
  isLeapYear,
  leapDayOccursInSchedule,
};
