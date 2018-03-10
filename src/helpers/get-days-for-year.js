import { isLeapYear } from './is-leap-year';
import { pad } from './pad';
import { formatDateToString } from './format-date-to-string';

/**
 * Computes an array of all the days of the a given year.
 * The date param here is purely for testing purposes. In a real
 * life application you can assume that it is always the current
 * year in which the code is being run.
 *
 * @param {object} date
 * @return {Array}
 */
export const getDaysForYear = (date = new Date()) => {
  const limit = isLeapYear(date.getFullYear()) ? 366 : 365;
  let i = 0;
  const days = [];
  const oneDay = 60 * 60 * 24 * 1000;
  let seconds = new Date(`Jan 1, ${new Date(date.getTime()).getFullYear()}`).getTime();
  while (i < limit) {
    const day = new Date(seconds);
    days.push({ format: formatDateToString(day) });
    seconds += oneDay;
    i++;
  }
  return days;
};
