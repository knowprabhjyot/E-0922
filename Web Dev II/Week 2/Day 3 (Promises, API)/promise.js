// Promise is an object through which you could do some async operations

// Promise has three states
// 1. Fulfilled State - Success State
// 2. Rejected State - Failuare/Reject State
// 3. Pending State - Waiting for response


let promise = new Promise((resolve, reject) => {
    // resolve("Hi I was resolved!"); // Fulfilled State

    // resolve({
    //     value: 20,
    //     message: "Succesfully resolved!"
    // })

    reject("HI i was rejected"); // Rejected State
})

let amount = 10000;

let promise1 = new Promise((resolve, reject) => {
    console.log("Trying transaction, for downpayment of amount $8000");

    if ((amount - 8000) > 0) {
        resolve({
            message: "Succesfully Approved!",
            balance: amount - 8000
        })
    } else {
        reject({
            message: "Transaction Denied!",
            balance: amount
        })
    }
})


// FIRST WAY OF ACCESSIGN USING .THEN AND .CATCH BLOCK

promise1.then((response) => {
    console.log(response); // This will be executed, if the promise was resolved
}).catch((error) => {
    console.log(error); // This will be executed, if the promise was rejected
}).finally(() => {
    console.log("I will be executed anyway"); // I will be executed anyway
})



// Can i resolve and reject promise at the same time ?

let p1 = new Promise((resolve, reject) => {
    resolve("I am resolved");
    reject("I am rejected");
})

p1.then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});


// PROMISE CHAINING!

let number = 20;

let p2 = new Promise((resolve, reject) => {
    resolve(number);
})

p2.then((response) => {
    console.log(response, "MY 1st Time of Resolving!");
    return response * 20; // 400
}).then((newResponse) => { // 400
    console.log(newResponse, "MY 2nd Time of Resolving!");
    return newResponse * 5 // 2000
}).then((finalResponse) => {
    console.log(finalResponse, "MY final Time of Resolving!"); // 2000
}).then((anotherFinalResponse) => {
    console.log(anotherFinalResponse, "UHH LAST !"); // So here it will be undefined! Since I didn't return anything!
})


// Promise.all ***********************

let pr1 = new Promise((resolve, reject) => {
    resolve(20);
})


let pr2 = new Promise((resolve, reject) => {
    resolve(50);
})


let pr3 = new Promise((resolve, reject) => {
    resolve(100);
})

let promiseArray = [pr1, pr2, pr3];

// Promise.all(promiseArray).then((response) => {
//     console.log(response);
// }).catch((error) => {
//     console.log(error);
// })

Promise.all(promiseArray).then((response) => {
    return response.filter(item => item % 2 === 0 ? true : false);
}).then((evenNumber) => {
    console.log(evenNumber); // [20, 100] // Only even number is returned
}).catch((error) => {
    console.log(error);
})

Promise.all(promiseArray).then((response) => {
    return response.filter(item => item);
}).then((evenNumber) => {
    console.log(evenNumber); // [20, 21, 100]  // because item truth, if the number is not 0 it will  be returned
}).catch((error) => {
    console.log(error);
})


Promise.all(promiseArray).then((response) => {
    return response.filter(item => item % 2); // because item % 2 == 0 , and 0 is falsy, if the number is even it will not be returned
}).then((evenNumber) => {
    console.log(evenNumber); // [ 21]
}).catch((error) => {
    console.log(error);
})

Promise.all(promiseArray).then((response) => {
    return response.filter(item => item % 2 === 0 ? true : false);
}).then((evenNumber) => {
    console.log(evenNumber, "RESOLVED STATE");
}).catch((error) => {
    console.log(error, "ERROR STATE");
})


// NOTE : If any of the promises is failing/rejecting than the other resolved promises are ignored and it goes to the catch block


// Promise.race *******************


let prs1 = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve(20);
    }, 20000);
    
})


let prs2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(50);
    }, 3000);
})


let prs3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(40);
    }, 10000);
})

let promisesArray = [prs1, prs2, prs3];

Promise.race(promisesArray).then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);   
})