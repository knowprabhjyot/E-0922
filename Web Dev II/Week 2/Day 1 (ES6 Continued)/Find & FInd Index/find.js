let array = [4, 10, 20, 50, 60];

let foundValue = array.find((item) => {
    if (item === 20) {
        return item;
    }
})

console.log(foundValue);
 

// Find that movie object which was released in 1997

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


let movieIn1997 = arrayOfMovies.find((item) => {
    if (item.year === 1997) {
        return true;
    }
})

console.log(movieIn1997);


// FIND INDEX 

let movieIn1997Index = arrayOfMovies.findIndex((item) => {
    if (item.year === 1997) {
        return true;
    }
})

console.log(movieIn1997Index);