export const createLeapYear = (date = '01-01') => {
  return new Date(`2020-${date}`);
};

export const createNonLeapYear = (date = '01-01') => {
  return new Date(`2019-${date}`);
};
