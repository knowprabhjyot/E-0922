
// console.log(document);

// Document.getElementByID **************** // Since ID is unique, it will only give me one element
let containerById = document.getElementById("myContainer");

console.log(containerById);


// Document.getElementByClassName **************** // Since multiple elements can have the same class, 
                                                    // hence we get an array of elements

let containerByClass = document.getElementsByClassName('container');

console.log(containerByClass, "BY CLass");



// Document.getElementByTagName *************** // Since multiple elements can have the same class, 
                                                    // hence we get an array of elements

let h1Tags = document.getElementsByTagName('h1');

console.log(h1Tags, "By Tags");



// Document.querySelector *******************


let fruitList = document.querySelector('ul');
let fruitListByID = document.querySelector('#fruitList');
let fruitListFirstItemByClasses = document.querySelector('.fruit-item');

let fruitLisItemsByClasses = document.querySelectorAll('.fruit-item');


let multipleItemsByClasses = document.querySelectorAll('.fruit-item , .container');

console.log(fruitList, 'Tags by QuerySelector');


console.log(fruitListByID, 'ID by query Selector');


console.log(fruitListFirstItemByClasses, 'Classes by Query Selector for first Element');

console.log(fruitLisItemsByClasses, 'Classes by Query Selector for all elements');

console.log(multipleItemsByClasses, 'Classes by Query Selector for multiple different elements');


// HTMLELEMENT --> HTMLIMAGEELEMENT
            // --> HTMLDIVELEMENT