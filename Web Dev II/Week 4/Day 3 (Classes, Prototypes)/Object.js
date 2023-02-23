
// Literal Object Creation
let movieObject = {
    name : "Harry Potter",
    author: "JK Rowling",
    leadActor: "Daniel Radcliff"
}


movieObject.name; // Dot Operator
movieObject['name'] // Square brackets

// We can run a loop over an object using for in loop

for (let key in movieObject) {
    console.log(key); // name author leadActor
    console.log(movieObject.key); // Undefined
    console.log(movieObject[key]); // Harry Potter JK Rowling Daniel Radcliffe
}

// Add or update an existing property inside the object
movieObject.leadActress = "Emma Watson";


// Delete keys in object using delete operator
delete movieObject.author 

// So my new object will become

let movieObject = {
    name : "Harry Potter",
    leadActor: "Daniel Radcliff"
}


// Creating an empty object from Object
let obj = new Object();

// Object.freeze
Object.freeze(movieObject) // This will not allow anyone to update or add  or delete value inside object
Object.isFrozen(movieObject) // This tells if the object is frozen

// Object.seal
let obj2 = {
    name: "Prabh"
}

Object.seal(obj2); // This will allow you to update but won't allow you to add a new key


// Getters and setters 

let obj3 = {
    firstName: "Prabh",
    email: "prabh@gmail.com",
    get getName() {
        return this.firstName;
    },
    set setName(name) {
        this.firstName = name;
    }
}

// Getter
obj.getName;

// Setter
obj.setName = "Daniel";

// Object.assign


// Object.create - It creates a new object from the given object, and adds those values
// to the prototype of the new object created.
let newMovieObj = Object.create(movieObject)



let object = {
    name : "Prabh",
    email: "prabh@ciccc.ca"
}

// It will extract the keys and convert it into an array
Object.keys(object) // ['name', 'email']

// It will extract the values and convert it into an array
Object.values(object);

// This will extract the keys and values together
Object.entries(object); // [['name', 'Prabh'], ['email', 'prabh@ciccc.ca'] ]


// Try to write the polyfill for Object.entries

// Object.prototype.entries = function(object) {

// }

