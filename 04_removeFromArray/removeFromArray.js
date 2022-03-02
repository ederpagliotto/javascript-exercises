let array = [1, 2, 3, 4];               
let values = [1, 3];
const removeFromArray = function(array) {                      
array = array.filter(item => (!values.includes(item)));  //array recebe filtro com item tal que o valor ! nao seja incluso.
return array;                                            // por isso o uso da negacao "!"
};                                                       // resulta o array filtrado SEM incluir os valores.
removeFromArray(array);
// Do not edit below this line
module.exports = removeFromArray;
