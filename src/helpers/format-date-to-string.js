import { pad } from './pad';

/**
 * Takes a date object and returns a MM-dd format
 *
 * @param {object} date
 * @return {string}
 */
export const formatDateToString = (date) => {
  const month = pad(date.getMonth() + 1);
  const dayOfMonth = pad(date.getDate());
  return `${month}-${dayOfMonth}`;
};