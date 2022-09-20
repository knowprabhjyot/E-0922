

// Double Equals (==)
// Basically we use it to check if two values on left and right are equals
// In this double equals to we only check the value and not the type

if ('100' == 100) {
    console.log('Score is 100');
}


// Tripple Equals to (===) , its also called as strict comparison
// Basically we use it to check if two values on left and right are equals
// In this tripple equals to we check both the types and the value

if ('100' === 100) {
    console.log('Score is 100');
} else {
    console.log('Score is 100 but its type string'); // This will be the output
}

// Not Equal to 

let userName = "David"; // David

// Not Strict Comparison
if (userName == "Prabh") {
    console.log("This is some other user");
} else {
    console.log("This is Prabh"); // This is Prabh
}

// Not Strict Comparison
if (userName != "Prabh") { // True
    console.log("This is some other user"); // This is some other user
} else {
    console.log("This is Prabh");
}

let num = '100';

// Not Strict Comparison
if (num != 10) { // true
    console.log("Yippe!"); // Yippee

} else {
    console.log("Nope!");
}


// Strict Comparison
if (num !== 10) { // false
    console.log("Yippe!");

} else {
    console.log("Nope!"); // Nope!
}