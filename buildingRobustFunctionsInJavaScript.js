// ++++++++++++++++++++++2. Building Robust Functions in JavaScript +++++++++++++++++

function getPerson(person){
    try{
        if(typeof person !== 'object' || person === null || !('name' in person) || !('age' in person) ){
            throw new Error ('Invalid parameter type');
        }
        return `Name: ${person.name}, Age: ${person.age}`;
    }catch(error){
        return error.message;
    }
}


  
///// Example 

const person1 = {name: 'John', age: 30};

console.log(getPerson(person1));

const person2 ={name:"Adarsh Singh Chauhan" , age: `24 Years`};
console.log(getPerson(person2));