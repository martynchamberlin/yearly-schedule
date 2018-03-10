/**
 * Determines whether a year is leap year or not
 *
 * @param {number} year
 * @return {bool}
 */
const isLeapYear = (year = new Date().getFullYear()) => new Date(year, 1, 29).getDate() === 29;

/**
 * Computes an array of all the days of the current year.
 *
 * @return {Array}
 */
const getDays = () => {
  const limit = isLeapYear() ? 366 : 365;
  let i = 0;
  const days = [];
  const oneDay = 60 * 60 * 24 * 1000;
  let seconds = new Date(`Jan 1, ${new Date(new Date().getTime()).getFullYear()}`).getTime();
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
 * Determines if a leap year occurs in a schedule, given an annually recurring
 * start day and month.
 *
 * @param {string} startDay - format in MM-dd format
 * @param {object} currentDay - date object
 * @return {bool}
 */
const leapDayOccursInSchedule = (startDay = '01-01', currentDay = new Date()) => {

};

module.exports = {
  getDays,
  isLeapYear,
  leapDayOccursInSchedule,
};
