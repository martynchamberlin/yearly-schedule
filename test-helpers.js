const createLeapYear = (date = '01-01') => {
  return new Date(`2020-${date}`);
};

const createNonLeapYear = (date = '01-01') => {
  return new Date(`2019-${date}`);
};

module.exports = {
  createLeapYear,
  createNonLeapYear,
};
