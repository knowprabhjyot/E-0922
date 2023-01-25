
// Object

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
    }
}


console.log(student);


// Accessing a value

student.name // Dot operation
student['name'] // Dyanmic Value

let em = 'email';

student[em]; // student['email']



// Add Values

student.address = 'Vancouver';

console.log(student);

// Modify an existing value

student.name = 'Mike';

console.log(student);


// Array Of Objects


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


// I want to access email of stacy

studentList[1].email // This will given stacy's email

studentList[0].email // Daniels's email
 

student.speaksLanguage('English');

student.callMe();