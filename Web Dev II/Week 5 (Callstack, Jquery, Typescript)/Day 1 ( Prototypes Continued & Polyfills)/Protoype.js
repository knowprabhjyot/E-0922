// Regular Function 
function Person(name, email, age, numberOfSteps = 0) {
    this.personName = name;
    this.personEmail = email;
    this.personAge = age;
    this.personNumberOfSteps = numberOfSteps;


    this.walk = function() {
        console.log(this.personName + " starts walking!");
    }

    this.incrementSteps = function() {
        this.personNumberOfSteps += 10;
    }
}

let person1 = new Person("Prabh", "prabh@ciccc.ca", 28, 0);
let person2 = new Person("Mike", "mikegmail.com", 20, 100);

person1.walk();

// I want to add a nationality of the person later on, we can make use of prototypes.

Person.prototype.nationality = "Canadian";

person1.nationality = "Indian;"
// console.log(person1.nationality);
// console.log(person2.nationality);

Person.prototype.showInfo = function() {
    console.log(this.personName  + " is of age " + this.personAge)
}

person1.showInfo();