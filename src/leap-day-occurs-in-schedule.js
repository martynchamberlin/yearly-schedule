import { getDaysForYear } from './helpers/get-days-for-year';
import { findIndexFromDateString } from './helpers/find-index-from-date-string';

/**
 * Determines if a leap year occurs in a schedule, given an annually recurring
 * start day and month.
 *
 * @param {string} startDay - format in MM-dd format
 * @param {object} currentDay - date object
 * @return {bool}
 */
export const leapDayOccursInSchedule = (startDay = '01-01', currentDay = new Date()) => {
  // Passing this currentDay param for testing purposes only. This library
  // is really a spec to which implementing libraries should conform, not
  // a core library to actually use.
  const days = getDaysForYear(currentDay);
  const integerStart = findIndexFromDateString(startDay);
  // if (integer)
};
