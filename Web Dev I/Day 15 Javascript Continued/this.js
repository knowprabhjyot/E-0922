// If you do this in your browser

console.log(this); // This will print window object


let student = {
    name : "Daniel",
    email: "daniel@gmail.com",
    age: 22, 
    40: 'hello', // This gets converted to a string,

    speaksLanguage: function(language) {
        console.log(`Hi I speak ${language}`);
    },

    callMe() {
        console.log("Number Dialing...");
    },

    printName: function() {
        console.log(this.name); // student.name
    }
}

student.printName();



// Random Number

console.log(Math.floor(Math.random() * 10));


// Break Keyword


for (let i = 0 ; i < 10 ; i++) {

    if (i === 5) {
        break; // this breaks loop all together
    }
    console.log(i);
}


console.log("****************");
// Continue keyword

for (let i = 0 ; i < 10 ; i++) {

    if (i === 5) {
        continue; // this skips the particular cycle
    }
    console.log(i);
}

let array = [1,2,3,4,5];

// for (let i = 0; i < array.length ; i++) {
//     console.log(array[i]);
// }

// Alternative for above is FOR OF LOOP *******

for (let item of array) { // item === array[i]
    console.log(item);
}

let studentList = [
    {
       name : "Daniel",
       email: "daniel@gmail.com",
       age: 22, 
   },

   {
       name : "stacy",
       email: "stacy@gmail.com",
       age: 22, 
   },

   {
       name : "mike",
       email: "mike@gmail.com",
       age: 22, 
   },
   
];



for (let student of studentList) {
    console.log(student.name);
}