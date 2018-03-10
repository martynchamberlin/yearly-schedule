import { formatDateToString } from './format-date-to-string';

describe('formatDateToString', () => {
  test('should preserve formatting', () => {
    // This test is, counter-intuitively, requiring a surprising result in JavaScript.
    // In Central Time Zone, for example, this:
    // new Date('2020-01-01').toDateString()
    // yields this:
    // "Tue Dec 31 2019"
    // The implementing language for this specification needs to be sure that
    // such surprises do not occur, or that if they do, they're accommodated for.
    expect(formatDateToString(new Date('2020-01-01'))).toEqual('01-01');
  });
});
