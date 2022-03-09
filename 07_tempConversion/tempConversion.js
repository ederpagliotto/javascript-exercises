let fahrenheit;
let celsius;
let conversion;
                         //Fahrenheit to Celsius
const ftoc = function(fahrenheit = -100) {             //value to convert
  conversion = (fahrenheit - 32) * 5/9;                //formula
  return parseFloat(conversion.toFixed(1));           // tofixed returns string, so I need to do a ParseFloat.
};
                         // Celsius to Fahrenheit
const ctof = function(celsius = -10) {                //value to convert
  conversion = (celsius * 9/5) + 32;                    // formula
  return parseFloat(conversion.toFixed(1));            // tofixed(1) returns 1 number after pontuation.
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
