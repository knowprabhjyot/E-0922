// Rest Operator

function multiply(num1, num2) {
    return num1 * num2;
}

// What if we have more than 2 numbers ?

// multiply(20, 40) // 2 parameters
// multiply(40, 60 ,100); // 3 parameters
// multiply(20, 40, 100, 200); // 4 parameters

// we can fix this using rest operator

function multiplyWithRest(...nums) {
    // this ...nums = []

    // nums = [20, 40]
    // nums = [40, 60, 100]
    // nums = [20, 40, 100, 200]

    let total = 1;

    for (let i = 0 ; i < nums.length; i++) {
        total *= nums[i];
    }

    console.log(total);
    return total;
}

// multiplyWithRest(20, 40) // 2 parameters 
// multiplyWithRest(40, 60 ,100); // 3 parameters
// multiplyWithRest(20, 40, 100, 200); // 4 parameters



function averageMarks(name, ...marks ) {
    let length = marks.length;
    let sum = marks.reduce((acc, cV) => acc + cV, 0);

    let average = sum / length;

    console.log(`Average score of ${name} is : ${average}`);
}

averageMarks('Prabh', 90, 100, 95, 99, 100);