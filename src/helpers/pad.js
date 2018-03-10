/**
 * Takes a number like 2 and returns 02.
 *
 * @param {number} num
 * @param {number} desiredLength
 */
export const pad = (num, desiredLength = 2) => `0${num}`.substr(-desiredLength);