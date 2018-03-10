import { getDaysForYear } from './get-days-for-year';
import { feb28 } from './constants';

/**
 * Takes a formatted date string and returns its day of the year (0-365)
 *
 * @param {string} date
 * @param {currentDate} - Again, this is only for testing purposes only
 * @return {number}
 */
export const findIndexFromDateString = (dateStr, currentDate = new Date()) => {
  const days = getDaysForYear(currentDate);
  const index = days.findIndex(day => day.format === dateStr);
  // If it was leap year and leap year doesn't occur in the current year,
  // (the scenario we suspect that caused the index to be < 0), then
  // fall back to Feb 28.
  if (index < 0) {
    return feb28;
  }
  return index;
};
