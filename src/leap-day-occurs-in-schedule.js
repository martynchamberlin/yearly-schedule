import { getDaysForYear } from './helpers/get-days-for-year';
import { findIndexFromDateString } from './helpers/find-index-from-date-string';
import { formatDateToString } from './helpers/format-date-to-string';
import { feb28 } from './helpers/constants';
import { isLeapYear } from './helpers/is-leap-year';

/**
 * Determines if a leap year occurs in a schedule, given an annually recurring
 * start day and month.
 *
 * @param {string} startDay - format in MM-dd format
 * @param {object} currentDay - date object that will be always hardcoded to the
 * current day in a real implementation library.
 * @return {bool}
 */
export const leapDayOccursInSchedule = (startDay = '01-01', currentDay = new Date()) => {
  // Passing this currentDay param for testing purposes only. This library
  // is really a spec to which implementing libraries should conform, not
  // a core library to actually use.
  const days = getDaysForYear(currentDay);
  const integerStart = findIndexFromDateString(startDay);
  const integerCurrent = findIndexFromDateString(formatDateToString(currentDay));
  if (integerStart <= feb28) {
    if (integerCurrent <= feb28 && integerCurrent < integerStart) {
      return isLeapYear(currentDay.getFullYear() - 1);
    }
    return isLeapYear(currentDay.getFullYear());
  } else if (integerStart > feb28) {

  }
};
