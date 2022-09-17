

// How we can make an array

// 1. First way  0         1       2
// let students = ["Akito", "Amir", "Abed"];

// console.log(students[2]); // "Abed"
// console.log(students[11]); // undefined

let rollNumberList = [100, 101, 201, 200];

// console.log(students, "Student's whose name starts with A");
console.log(rollNumberList);


// 2. Second Way (Advance way since it uses a concept called Classes)
let collegeList = new Array("Cornerstone", "VCC", "Langara");

console.log(collegeList);



// ADD VALUE INSIDE ARRAY******************

// A method is a function attached/provided to different types of data structures 
// Two steps
// 1. Write dot(.) on the data you want to see the methods
// 2. Use that method and call the function by using ()

// PUSH METHOD*********************

// students.push("Yuki", "Hikaru", "Tatiana");

let students = ["Akito", "Amir", "Abed"];

// The push function returns the length of the array, however
// it also adds value inside the array which we provide inside parameters
// let value = students.push("Yuki");

// students[3] = "Yuki";
// students[4] = "Hikaru";
// students[5] = "Tatiana";

// console.log(value, "with new values"); // 6

// console.log(students.length);


// POP METHOD*********************

// students.pop(); // ["Akito", "Amir"]
// students.pop();// ["Akito"]
// students.pop();// []

// let newVal = students.pop();


// console.log(newVal, "New students array");

// UNSHIFT METHOD*********************

// students.unshift("Yuki", "Hikaru");

// console.log(students, "New Value");

// SHIFT METHOD*********************

// students.shift(); // ["Amir", "Abed"];
// students.shift(); // ["Abed"]

let numbersArray = [1,2,3,4];



// Types of Method for arrays

// Inplace Array methods - Those methods which change the orignal array, for example Splice Method
// Not Inpace Array methods - Those methods which do not change the orignal array, hence you have 
// to asssign the output of that method to a variable, For Example Slice Method


// SPLICE METHOD*********************
// numbersArray.splice(0,2);

// Where first parameter means the starting index where you want add or delete
// Second parameter means how many values you want to delete , i.e count
// Third parameter and onwards are those values which you want add for your given first parameter

// numbersArray.splice(1, 1); // [1,3,4]
// numbersArray.splice(1, 0) // [1,2,3,4];
// numbersArray.splice(1, 0, 5, 6, 7); // [1, 5, 6, 7, 2, 3, 4]

numbersArray.splice(2, 2, 4, 5);

console.log(numbersArray, "new Value");



// SLICE METHOD*********************
let numberA = [100, 200, 400, 500];
let slicedValue = numberA.slice(0, 2);

console.log(numberA, "Orignal Array");
console.log(slicedValue, "new Array");




// COMPLEX EXAMPLE
// STUDENT RECORD

let studentsRecords = [
    {
        name : "Akito",
        rollNumber: 100
    }, 
    {
        name: "Yuki",
        rollNumber: 101
    },
    {
        name: "Hikaru",
        rollNumber : 102
    }
]


studentsRecords.push({
    name: "Geri",
    rollNumber: 103
})

console.log(studentsRecords, "studentrecords");