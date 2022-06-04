let a = 4;
let b = 3;
let n = 10;

const add = function(a,b) {
return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(a) {
	return a.reduce((total, current) => total + current, 0);
};

const multiply = function() {
  return b.length 
  ? b.reduce((total, nextNumber) => total * nextNumber) : 0;
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(n) {
  if (n === 0) return 1;
  let product = 1;
  for (let i = n; i > 0; i--) {
    product *= i;
  }
  return product;
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
