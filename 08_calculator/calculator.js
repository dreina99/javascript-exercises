const add = function(x, y) {
  return x + y
};

const subtract = function(x, y) {
	return x - y
};

const sum = function(arr) {
	return arr.reduce((total, curr) => total + curr, 0)
};

const multiply = function(...args) {
  return args.reduce((total, curr) => total * curr, 1)
};

const power = function(num, exp) {
  if(exp == 0) {
    return 1
  } else {
    return num * power(num, exp - 1)
  }
};

const factorial = function(num) {
  if(num == 0) {
    return 1
  } else {
    return num * factorial(num - 1)
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
