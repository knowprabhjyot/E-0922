 
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
    let count = 0;
    while(head !== null) {
        count++;
        // Move node myself
        head = head.next;
    }
    return count;
}

//  Question 2 - Add a new node to the linked list 

// Here you will take the val, and make a new node
function addNewNode(head, val) {
    // add a new node logic here

    // console the final linked list
    // call printNodeValues
    let current = head;


    let newNode = new Node(val);

    // This while means run the loop forever
    while(true) {
        current = current.next;
        if (current.next === null) {
            current.next = newNode;
            break;
        }
    }

    printNodeValues(head);

}

console.log(countNodes(node1));


addNewNode(node1, 50);

// Homework Quesiton 1

// Write a function that deletes the node in the last index

function deleteNodeLastIndex(head) {
    // delete the last node

    // PrintNodeValue(head)
}

// Write a function that deletes the node at the given index

function deleteNodeAtIndex(head, n) {
    // delete the node at n index

    // printNodeValue(head)
}



// Write a function that deletes the node at the given index

function addNodeAtIndex(head, n, val) {
    // add the node at n index

    // printNodeValue(head)
}


// printNodeValue(node1, 2, 25);
// 10 -> 20 -> 30 -> 40 -> null

// 10 --> 20 --> 25 --> 40 --> null


// Find nth Node from end of the list
function findNode(head, n) {
    // console.log(the value from end upto n) 
}


// 10 --> 20 --> 25 --> 40 --> null


// Print the nodes of the linked list in a reverse fashion
function printNodeReverse(head) {
    // console.log(the value from end upto n) 

    // In this question you were only consoling the values
}


// 10 --> 20 --> 25 --> 40 --> null

// Console.log
// 40 --> 25 --> 20 --> 10


// Return the sum of node values inside a linked list
function SumOfNodeValues(head) {
   // 95
}


// 10 --> 20 --> 25 --> 40 --> null


 
// Return the reverse of the linked list (ADVANCE)
function reverseLinkedList(head) {
    // Orignal - 10 --> 20 --> 25 --> 40 ---> null
    // Return reversed - 40 --> 25 --> 20 --> 10 --> null
    // In this question 40 becomes the head
    // if you want you can return the new head
 }
 