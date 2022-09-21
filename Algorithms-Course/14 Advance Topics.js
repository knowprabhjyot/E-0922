let array = [10, 20, 40, 50, 100];

// for loop *******

// for (let i = 0; i < array.length ; i++) {
//     console.log(array[i]);
// }

// while loops **********

// let count = 0;

// while (count < array.length) {
//     console.log(array[count]);
//     count++;
// }

// Do While Loops **********
// If you are using do while loops, they will atleast run 1 time even if the
// given  condition is false
let count = 4;

// do {
//     console.log(array[count]);
//     count++;
// } while (count < array.length);

// for of loop **********

let numList = [1, 2, 3, 4, 5, 6];

for (let num of numList) {
  console.log(num, "Value");
}

// For Each loop (ADVANCE) ******** (DONT TRY THIS AT HOME)

// numList.forEach(function(num) {
//     console.log(num, 'value');
// })

// function printMyNmae() {
//     console.log("Prabh");
// }

// OBJECT RECAP
let student = {
  name: "David",
  age: 20,
};

student.name; // David
student.age; // 20

// This type accessing keys is used when we want to do things dynamic
student["name"]; // David
student["age"]; // 20

let xyz = "name";

student[xyz]; // David

student.xyz; // undefined, since this value doesn't exist

// For In Loop ************
// Loop over objects using this for loop

let instructor = {
  name: "Prabh",
  college: "CICCC",
  hobbies: ["Read", "Dance"],
  address: {
    city: "Vancouver",
    province: "BC",
  },
  teach: function () {
    console.log("Prabh is a great teacher");
  },
};

// let student = {
//     name: "David",
//     age: 20
// }
// let xyz = "name";

// student[xyz] // David

for (let key in instructor) {
  console.log(instructor[key]);
}

// 2D ARRAY's

let nums = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
  [13, 14, 15],
  [16, 17, 18],
];

console.log(nums[0][4]);

// What matrix is (STUDY ABOUT THIS)

// let nums = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//     [10, 11, 12],
//     [13, 14, 15],
//     [16, 17, 18],
//   ];

for (let i = 0; i < nums.length ; i++) {
    for (let j = 0; j < nums[i].length; j++) {
        console.log(nums[i][j]);
    }
}
// DRY RUN
// i     j       nums[i][j]    
// 0    0        nums[0][0]    1    
// 0    1        nums[0][1]    2
// 0    2        nums[0][2]    3
// 1    0        nums[1][0]    4
// 1    1        nums[1][1]     5
// 1    2        nums[1][2]     6
// 2    0        nums[2][0]     7
// 2    1        nums[2][1]     8
// 2    2        nums[2][2]     9
// 3 
// /
// .
// .

// 5    2       nums[5][2]      18   





// Can we go backwards in a for loop
let groceryList = ["Apples", "veggies", "Mangoes", "coldrink"];
// Length  - 4
// 0 1 2 3

for (let i = groceryList.length - 1; i >= 0 ; i--) {
    console.log(groceryList[i]);
}

// i-- ---> i = i - 1;

// i = 3       groceryList[3]  "Coldrink"  i--
// i = 2       grocerylIst[2]   "Mangoes"  i--
// i = 1       grocerylIst[1]   "Veggies"  i--
// i = 0       grocerylIst[0]   "Apples"  i--
