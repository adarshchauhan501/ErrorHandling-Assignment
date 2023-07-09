// ++++++++++++++++++++++++++++ Type Conversion ++++++++++++++++++++++++

function convertToNumber(str){
    try{
        const number = Number(str);
        
        if(isNaN(number)){
            throw new Error("Invalid number");
        }
        return number;
    }catch(error){
        return "Invalid number"
    }
}


const number1 = convertToNumber("18")
console.log(number1)

const number2 = convertToNumber("Hey there My name Adarsh Singh Chauhan")
console.log(number2)


