 
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


// addNewNode(node1, 50);

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

    let current = head;
    let prev = head;
    let newNode = new Node(val);
    let count  = 0;

    if (n < 0) {
        return "Give a valid value";
    }

    if (count === n) {
        newNode.next = head;
        return newNode;
    }

    while(current.next) {
        current = current.next;
        count++;
        if (count === n) {
            prev.next = newNode;
            newNode.next = current;
            break;
        }
        prev = current;
    }

    return head;
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

    if (head === null) {
        return;
    }
    console.log(head.val + " --> ");
    printNodeReverse(head.next);

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
    // In this question 40 becomes the headv
    // if you want you can return the new head

    let prev = null;
    let current = head;

    while(current) {
        let tempNode = current.next;
        current.next = prev;
        prev = current;
        current = tempNode;
    }

    return prev;
 }
 
//  printNodeReverse(node1);

//  let newNode = addNodeAtIndex(node1, 2, 11);

//  printNodeValues(newNode);

 let newHead = reverseLinkedList(node1);

 printNodeReverse(newHead);



 // Q1 Find the middle of the linkedlist

//  10 -> 20 -> 30 -> 40 -> 50  , Here middle is 30

// 10 -> 20 -> 30 -> 40 , Return middle as n / 2 + 1


// Advance Question
// Q2 You have 2 sorted linked list, and you have to merge it into one,


// 10 --> 40 --> 80 ---> 100 // L1

// 20 --> 45 --> 60 --> 90 // L2

// 10 --> 20 --> 40 --> 45 --> 60 --> 80 --> 90 --> 100