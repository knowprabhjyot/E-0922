 
// Import a JS file, you use require keyword (ES5)
const Node = require('./Node');

let node1 = new Node(10);

let node2 = new Node(20);

let node3 = new Node(30);

let node4 = new Node(40);

node1.next = node2;
node2.next = node3;
node3.next = node4;



// ES6
// import Node from "./Node";

// Node 1 is the head
// console.log(node1);

// Traversal of a node

function printNodeValues(head)  {
    let str = "";
    while(head !== null) {
        str = str + head.val + " -- > ";
        // Move node myself
        head = head.next;
    }
    console.log(str);
}

printNodeValues(node1);


//  Question 1 - Count the number of nodes in Linked List

function countNodes(head) {
    // return count;
}

//  Question 2 - Add a new node to the linked list 

// Here you will take the val, and make a new node
function addNewNode(head, val) {
    // add a new node logic here

    // console the final linked list
    // call printNodeValues
}