// Example


let array = [2,4,6,9, 10]; // Even Number

let output = array.every((item) => {
    if (item % 2 === 0) {
        return false;
    }
})

function everyIfyevenNumbers(array) {
    for (let i = 0 ; i < array.length; i++) {
        if (array % 2 !== 0) { // ODD
            return false;
        }
    }

    return true;
}

// ANOTHER EXAMPLE

let arrayOfMovies = [
    {
        title: "Pirates of the Carrabean",
        year: 2003, 
        genre: 'Sci-fi', //
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
        genre: "Sci-fi"
    }
];


let areAllMoviesSciFi = arrayOfMovies.every((movie) => {
    if (movie.genre === "Sci-fi") {
        return true;
    }
})

console.log(areAllMoviesSciFi, "Movie");

// Write a function that returns true or false by checking if all the items in the array are positive.

// let array = [10, 20, -10, 11]; // false

// let array = [20, 40, 60, 80, 100]; // true

// let array = [-10, -100, -200]; // false