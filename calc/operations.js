const add = (x, y) => {
  return +x + +y;
};

const substract = (x, y) => {
  return +x - +y;
};

const multiply = (x, y) => {
  return +x * +y;
};

const devide = (x, y) => {
  return +x / +y;
};

const validateNumbers = (x, y) => {
  if (isNaN(x) || isNaN(y)) {
    return false;
  }
  return true;
};

module.exports = { add, substract, multiply, devide, validateNumbers };
