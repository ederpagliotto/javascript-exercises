let year = 700;

const leapYears = function(year) {
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
};  //se o resto da divisao por 4 for 0 e bissexto.
    // divisivel por 100 nao sao bissextos a nao ser que
    // seja divisivel por 400
    // sobre a estrutura, se colocar return 1 + 2 = 5 vai retornar false.

// Do not edit below this line
module.exports = leapYears;
