// // Question 1 ******************************
// Write a JavaScript program that accept two integers and display the larger

// Function Declaration
function compare(num1, num2) {
    if (num1 > num2) {
        console.log(num1, ' is larger');
    } else if (num2 > num1) {
        console.log(num2, ' is larger');
    } else {
        console.log("Both of the numbers are equal");
    }
}


compare(10, 5); // 10
compare(3, 20); // 20
compare(-20, -5); // -5
compare(20, 20); // 'Both of the numbers are equal'

// This function is not dynamic, it is taking hardcoded values
// function compareValues() {
//     let num1 = 20;
//     let num2 = 30;
//     if (num1 > num2) {
//         console.log(num1, ' is larger');
//     } else {
//         console.log(num2, ' is larger');
//     }
// }

// They will always print 30 because these values are hardcoded and i don't recommend writing function like that
// Always try to take parameters if your output can change
// compareValues();
// compareValues();

// // Question 2 ******************************
// Using a for loop print all even numbers up to 30 and including 30. Don’t include 0.

// % --> remainder
// 10 % 2 --> 0 // even
// 5 % 2 --> 1 // odd
// 8 % 2 --> 0 // even
// 11 % 2 --> 1 // odd

// One Solution
// for (let i = 1; i <= 30; i++ ) {
//     if (i % 2 == 0) {
//         console.log(i, " is an even number");
//     }
// }


// i++ --> i = i + 1;
// i+= 2 --> i = i + 2;
// i+= 3 --> i = i + 3;
// i*= 2 --> i = i * 2;

// Other Solution (If you wanted to include 0)

// for (let i = 0; i <= 30; i += 2) {
//     console.log(i);
// }


// What if n was dynamic, meaning you can ask the user upto which number you want me to print even numbers

function printEvenNumber(num) {
    for (let i = 1; i <= num; i++ ) {
        if (i % 2 == 0) {
            console.log(i, " is an even number");
        }
    }
}

// printEvenNumber(100);


// // Question 3 ******************************
// Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does
// not.


// COncept -  break;
// We can break any loop where ever we want when it fullfills our condition

// function printYes(str) {

//     let exists = false; // This flag value tells us if y exists or not

//     for (let i = 0; i < str.length; i++) {
//         if (str[i] == 'y') {
//             exists = true;
//             break;
//         } 
//     }

//     if (exists == true) {
//         console.log('Yes');
//     } else {
//         console.log('No');
//     }
// }

// function printYes(str) {
//     if (str.includes('y')) {
//         console.log('Yes');
//     } else {
//         console.log('No');
//     }
// }



// Without Break

// C | str[0] == 'y' | No
// r | str[1] == 'y' | No
// a | str[2] == 'y' | No
// y | str[3] == 'y' | Yes | console.log('Yes')
// z | str[4] == 'y' | No
// y | str[5] == 'y' | Yes | console.log('Yes')

// With Break
// C | str[0] == 'y' | No
// r | str[1] == 'y' | No
// a | str[2] == 'y' | No
// y | str[3] == 'y' | Yes | console.log('Yes') | break the loop
// z 
// y


// printYes('Crazy');


// function printYes(str) {
//     // for (let i = 0; i < str.length; i++) {

//         if (str.includes('y')) {
//             console.log('Yes');
//         }
//     // }
// } --> THIS LOGIC IS SIMILAR TO THE FOR LOOP WE WROTE ABOVE WITH BREAK KEYWORD

// // printYes("yellow");
// printYes('cryazy');

// c --> No
// r --> No
// y --> Yes
// a
// z
// y



// // Question 4 ******************************

// Write a function which accepts 4 parameters (different scores of a student for subjects), and
// then calculate the average of all the score.
// If the average is more than 90 , then console grade A
// If the average is between 70 and 90 , then console grade B
// If the average is between 50-70, then console grade C
// Other wise console grade F

// BODMAS (Top --> Bottom)
// B --> Brackets
// O --> Orders/Powers
// D --> Division
// M --> Multiplication
// A --> Addition
// S ---> Subtraction

// https://www.cuemath.com/numbers/bodmas-rule/

function gradeStudents(score1, score2, score3, score4) {
    let averageScore = ( score1 + score2 + score3 + score4 ) / 4;

    if (averageScore >= 90) {
        console.log('Grade A');
    } else if (averageScore >= 70 && averageScore < 90) {
        console.log('Grade B');
    } else if (averageScore >= 50 && averageScore < 70) {
        console.log('Grade C');
    } else {
        console.log('Grade F');
    }
   
}

gradeStudents(80, 40, 60, 70); // Grade C
gradeStudents(100, 95, 90, 98);  // Grade A
gradeStudents(40, 50, 55, 30);  // Grade F



// Solutions with for loop

let str = "Crayzy";

    for (let i = 0; i < str.length; i++) {
        if (str[i] == 'y') {
            console.log('I found Y');
            break;
        } 
    }

// Same logic with while loop

let i = 0;

while (i < str.length) {
    
    if (str[i] == 'y') {
        console.log('I found Y');
        break;
    }

    i++;
}

// i        // str[i]
// 0             str[0] --> C
// 1         str[1] --> r
// 2         str[2] ---> a
// 3         str[3] --> y
// Console.log(i found Y)



