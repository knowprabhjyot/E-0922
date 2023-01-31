
// Maps are used to manipulate elements inside the array
// Unlike filter, the length of the array is equals to the orignal array
// Just like filter, The orignal array is not changed/modified 
// Map methods you will see those in React.js

let array  = [1,2,3,4,5,6,7,8];

// I want to have a new array where all of the elements above are multipled by 2
// newArray = [2,4,6,7,10, 12, 14, 16];

let modifiedArray = array.map((element, index) => {
    // console.log(index); // 
    let newItem = element * 2;
    return newItem;
})

console.log(modifiedArray);

//  ANOTHER EXAMPLE

let arrayOfMovies = [
    {
        title: "Pirates of the Carrabean",
        year: 2003, 
        genre: 'Mystery', //
    },
    {
        title: "MIB",
        year: 1997,
        genre: "Sci-fi" // Science-Fiction
    },
    {
        title: "Interstellar",
        year: 2014,
        genre: "Sci-fi", // Science-Fiction
    },
    {
        title: "Ironman",
        year: 2008,
        genre: "Sci-fi", // Science-Fiction
    },
    {
        title: "Johny English",
        year: 2003,
        genre: "Comedy"
    }
];


let modifiedMoviesArray = arrayOfMovies.map(function(movie) {
    if (movie.genre === "Sci-fi") {
        movie.genre = "Science-Fiction";
        // return movie; // Don't return here
    }

    return movie;
})

console.log(modifiedMoviesArray);



let employeeList = [
    {
        id: 1,
        name: "Mike",
        dateJoined: 2010,
        department: "HR" // Eliglble
    },
    {
        id: 2,
        name: "Stacy",
        dateJoined: 2008, // Not Eligible
        department: "IT"
    },
    {
        id: 3,
        name: "Daniel",
        dateJoined: 2022, // Not Eligible
        department: "HR"
    },
    {
        id: 4,
        name: "Yoko", // Not Eligible
        dateJoined: 2021,
        department: "IT"
    },
];

// The company name is = xyz , yoko@xyz.com
let modifiedEmployeeList = employeeList.map((employee) => {
    let email = `${employee.name}@xyz.com`;
    employee.email = email;
    return employee;
})


// Lets say we want to add a way to see if the employee is eligible for gratuity today.
// This means the employee has completed 5 years with the company

let employeeWithGratuity = modifiedEmployeeList.map((employee) => {
    let currentYear = new Date().getFullYear(); // 2023

    if (currentYear - employee.dateJoined >= 5) {
        employee.isEligibleForGratuity = true;
    } else {
        employee.isEligibleForGratuity = false;
    }

    return employee;
})

// You can combine different ES6 Functions  at the  same time
let employeeEligibleGratuity  = modifiedEmployeeList.map((employee) => {
    let currentYear = new Date().getFullYear(); // 2023

    if (currentYear - employee.dateJoined >= 5) {
        employee.isEligibleForGratuity = true;
    } else {
        employee.isEligibleForGratuity = false;
    }

    return employee;
}).filter((employee) => {
    if (employee.isEligibleForGratuity === true) {
        return true;
    }
});

console.log(employeeEligibleGratuity);

// console.log(employeeWithGratuity);