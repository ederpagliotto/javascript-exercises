let numbers = [1,4];                                //array
let firstNumber = numbers[0];                        //receive the number on index 0.
let lastNumber = numbers[numbers.length-1];          //receive the last number.
let sum;                                   
const sumAll = function(firstNumber, lastNumber) {            
if (firstNumber < 0 || lastNumber < 0) {            //returns Error if the numer is negative.
    return "ERROR"
}

if (!Number.isInteger(firstNumber) || !Number.isInteger(lastNumber)) {
    return "ERROR";                                    //returns erros if it is not a number.
}

if (firstNumber > lastNumber) {          //change the position if first number is bigger than
    let changePosition = firstNumber;     // that last number.
    firstNumber = lastNumber;
    lastNumber = changePosition;
}

sum = 0;
for (let i = firstNumber; i <= lastNumber; i++) {
    sum += i;                                   //let sum receive the sum of all numbers
}                                            //between first and last including them.
return sum;

};
sumAll(sum);
// Do not edit below this line
module.exports = sumAll;
