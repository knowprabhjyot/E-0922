// console.log("Hi Prabh!");


let isSmart = true;

// if (isSmart == true) {
//     alert("Prabh is smart!");
// } else {
//     alert("Prabh is not smart!");
// }



// let age = 10;

// if (age > 18) { // 10 > 18 false
//     console.log("You are allowed to go to clubs");
// } else if (age < 18) { // 10 < 18 // true
//     console.log("You are not allowed to club");
// } else { // 18 == 18 // true
//     console.log("You just turned 18, don't even think about it");
// }


let password = "hello123456ascascascas";

if (password.length === 10) {// 12 >= 10 // true
    console.log("Your password is of correct length");

    if (password.includes('@')) {
        console.log("Your password should not contain @");
    } else {

        console.log("Perfecto! You are signed up!");
    }

    
} else if (password.length >= 20) { // 9 >= 20 // false
    console.log("You have a lengthy password");

    if (password.length >= 30) {
        console.log("Woaah you entered even more than 30 characters!")
    } else {
        console.log("No worries, try again with less than 20 characters");
    }
} else {
    console.log("You password is short in length");
}



// AND 
let age = 10;

// true && false
if (age < 18 && age < 60) {
    console.log("You are not eligible for RRSP!"); // Retirement after 60
} else  {
    console.log("You are eligible for RRSP");
}


// true && true ---> true
// true && false ---> false
// false && true ---> false
// false && false ---> false

// OR


// true || false ---> true
// false || true ---> true
// true || true --> true
// false || false --> false


// !