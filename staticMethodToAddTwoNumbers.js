//  Using Static Method to Add Two Numbers with Calculator Class

class Calculator{
  static add(num1, num2){
    return num1 + num2;
  }
}
  

// Call the add method

const result = Calculator.add(58,65);
console.log(result);