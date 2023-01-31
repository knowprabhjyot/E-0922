

let array = [1,2,3,4,5,6,7,8];

// let arrayDivisibleBy2 = [2,4,6,8];

// I want to filter those numbers which are divisible by 2

// We can write it in 2 ways
// First Way

    function divisibleBy2(array) {
        let newArray = [];

        for (let i = 0 ; i < array.length; i++) {
            if (array[i] % 2 === 0) {
                newArray.push(array[i]); // push this value since it is divisible by 2
            }
        }

        return newArray;
    }

// FILTER METHOD
// FILTER METHOD EXISTS ON EVERY ARRAY

    let modifiedArray = array.filter(function(item) {
        if (item % 2 === 0) {
            return true;
        }
    })

    let modifiedArrayWithArrow = array.filter((item) => {
        if (item % 2 === 0) {
            return true;
        }
    })

    // SHorter Way using Arrow Functions
    let modifiedArrayArrowFunction = array.filter(item => item % 2 === 0 ? true : false);



    // ANOTHER EXAMPLE COMPLEX


let arrayOfMovies = [
    {
        title: "Pirates of the Carrabean",
        year: 2003, 
        genre: 'Mystery',
    },
    {
        title: "MIB",
        year: 1997,
        genre: "Sci-fi"
    },
    {
        title: "Interstellar",
        year: 2014,
        genre: "Sci-fi"
    },
    {
        title: "Ironman",
        year: 2008,
        genre: "Sci-fi"
    },
    {
        title: "Johny English",
        year: 2003,
        genre: "Comedy"
    }
];



// I wan to filter those movies which were released in 2003

let moviesin2003 = arrayOfMovies.filter((movie) => {
    if (movie.year === 2003) {
        return true;
    }
})



// I want to filter those movies which has the genre Sci-fi


let moviesWithSciFi = arrayOfMovies.filter((movie) => {
    if (movie.genre === "Sci-fi") {
        return true;
    }
})



// I want to filter those employees which have completed more than 10 and less than 15 years.
// If they have completed 10 years with the company, company wants to give them an honour Award
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

]


let honourEmployees = employeeList.filter((employee) => {
    let currentYear = new Date().getFullYear(); // 2023
    // 2023 - 2008 = 15
    if (currentYear - employee.dateJoined >= 10 && currentYear - employee.dateJoined < 15) {
        return true;
    }
})

