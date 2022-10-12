let num = 100;

// SWITCH STATEMENT
switch (num) {
    case 10 : 
        console.log('The value given to me is 10')
        break; // Dont go to the next line
    
    case 50 :
        console.log('The value given to me is 50');
        break;

    case 70 : 
        console.log('The value given to me is 70');
        break;

    case 100 : 
    console.log('The value given to me is 100');
    break;

    default :
    console.log("no Match found");
}


if (num == 10) { // false
    console.log('The value given to me is 10')
} else if (num == 50) { // false
    console.log('The value given to me is 50');
} else if (num == 70) { // false
    console.log('The value given to me is 70');
} else if (num == 100) { // true
    console.log('The value given to me is 100');
} else {
    console.log("no Match found");
}

