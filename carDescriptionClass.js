class Car {
    constructor(company, model , year){
        this.company = company;
        this.model = model;
        this.year = year;
    }

    getDescription(){
        return `This is a ${this.year} ${this.company} ${this.model}.`;
    }
}


// Example 

const myCar = new Car('Mercedes' , 'Benz T-Class' ,  2023);
console.log(myCar.getDescription())

const myCar2 = new Car('Rolls-Royce' , 'Phantom' , 2003)
console.log(myCar2.getDescription());