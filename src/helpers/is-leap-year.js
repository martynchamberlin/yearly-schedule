/**
 * Determines whether a year is leap year or not
 *
 * @param {number} year
 * @return {bool}
 */
export const isLeapYear = (year = new Date().getFullYear()) => {
  return new Date(year, 1, 29).getDate() === 29;
};
