import { getDaysForYear } from './get-days-for-year';

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
  // fallback to Feb 28.
  if (index < 0) {
    return 58;
  }
  return index;
};
