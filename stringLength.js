const stringLength = (string) => {
  if (string.length < 1) {
    throw new Error('String is empty');
  } else if (string.length > 10) {
    throw new Error('String is too long');
  }
  return string.length;
};

module.exports = stringLength;