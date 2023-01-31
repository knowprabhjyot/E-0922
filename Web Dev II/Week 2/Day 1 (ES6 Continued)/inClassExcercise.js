
// Write a function that filters an array based on the elements which contains the keyword buzz

let array = ['fizz', 'fizzbuzz', 'buzzfizz', 'fiz', 'buzz', 'buzzFizz'];

function findBuzz(array) {
    // return array.filter((item) => {
    //     if (item.includes('buzz')) {
    //         return true;
    //     }
    // })

    // In one line

    return array.filter(item => item.includes('buzz')); // Only return true items
}

console.log(findBuzz(array));


// Find minimum in an array



let arrayOfNum = [1,2,4, 20, -10, 40, 50];
// So you have to write the same logic using reduce but to find minimum value inside the array

function minimumValue(array) {

    return array.reduce((accumulator, currentValue ) => {
        if (accumulator > currentValue) {
            return currentValue;
        } 


       return accumulator;
        
    }, Infinity);


    // return array.reduce((acc, cV) => acc > cV ? cV : acc, Infinity);
}

console.log(minimumValue(arrayOfNum));



// output array = ['fizzbuzz', 'buzzfizz', 'buzz', 'buzzFizz']

// There are two types of exams - ObjectiveBased , SubjectiveBased

// ObjectiveBased means - only MCQ (multiplechoice) questions 

// SubjectiveBased, where you have tell in text why are you doing this. For example , I might ask what is Es6 ? And how it is different than other language
// It will also have some coding questions (FRIDAY WILL BE WHOLE DAY SUBJECTIVE EXAM)