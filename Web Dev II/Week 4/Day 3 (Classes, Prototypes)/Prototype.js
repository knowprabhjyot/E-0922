let object = {
    name : "Prabh",
    email: "knowprabh@gmail.com"
}

// OBJECT PROTOTYPE ********************
// object.__proto__ --> Object --> null

// object.__proto__ // { constructor, toString , ... }

// object.__proto__.__proto__ // null

// Object.prototype --> Object --> null

// Object.prototype //  { constructor, toString , ... }

// Object.prototype.prototype // null

// object.__proto__ === Object.prototype

let movieObject = {
    name : "Harry Potter",
    author: "JK Rowling",
    leadActor: "Daniel Radcliff",

    getName() {
        console.log(this.name)
    }
}

let newMovieObj = Object.create(movieObject);

newMovieObj.getName() // Harry Potter

newMovieObj.name = "Daniel"

newMovieObj.getName() // Daniel


let fruitslist = ['mangoes', "apples"];

// Array PROTOTYPE ********************
// fruitslist.__proto__ --> Array Constructor Function.__proto__ --> Object.__proto__ --> null

// fruitslist.__proto__ // [constructor, toString , ... ]

// object.__proto__.__proto__ // null

// Object.prototype --> Object --> null

// Object.prototype //  { constructor, toString , ... }

// Object.prototype.prototype // null

// object.__proto__ === Object.prototype