// Adding a method to a Prototype. ===============

function Student(name){
    this.name = name;
}

Student.prototype.printDetails = function(){
    console.log("Hello, my name is " + this.name);
};







// Instantiate a student object
const student1 = new Student('Aviral Singh')


// call the printDetails method
student1.printDetails();