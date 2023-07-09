
function numberChecker(numbers){
    return function(number){
        return numbers.includes(number)
    };
}



const numberArray = [1, 2, 3, 4, 5, 6,];
const checkNumber = numberChecker(numberArray);

console.log(checkNumber(9));
console.log(checkNumber(5));