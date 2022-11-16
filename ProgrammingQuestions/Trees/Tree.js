const Node = require("./Node");

let node1 = new Node(10);
let node2 = new Node(20);
let node3 = new Node(30);
let node4 = new Node(40);
let node5 = new Node(50);
let node6 = new Node(60);
let node7 = new Node(70);
// let node8 = new Node(80);
// let node9 = new Node(90);

node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node3.left = node6;
node3.right = node7;
//         // 10
// .    20              30
// 40       50      60      70

console.log(node1); // Root

// TRAVERSING A TREE CAN BE POSSIBLE IN MUTLIPLE WAYS

// Preorder Traversal
// VISIT ROOT NODE FIRST
// VIST LEFT SUBTREE
// VISIT RIGHT SUBTREE
// Recursion ******************************

function preOrderRecursion(root) {
  //         // 10
  // .    20              30
  // 40       50      60      70

  if (root === null) {
    return;
  }

  console.log(root.val + " --> ");
  preOrderRecursion(root.left);
  preOrderRecursion(root.right);
}

// In Order Traversal
// VIST LEFT SUBTREE
// VISIT ROOT NODE FIRST
// VISIT RIGHT SUBTREE
function inorderRecursion(root) {
    //         // 10
    // .    20              30
    // 40       50      60      70
  
    if (root === null) {
      return;
    }
  
    inorderRecursion(root.left);
    console.log(root.val + " --> ");
    inorderRecursion(root.right);
  }
  

// PostOrder Traversal


// In Order Traversal
// VIST LEFT SUBTREE
// VISIT ROOT NODE FIRST
// VISIT RIGHT SUBTREE
function postOrderRecursion(root) {
    //         // 10
    // .    20              30
    // 40       50      60      70
  
    if (root === null) {
      return;
    }
  
    postOrderRecursion(root.left);
    postOrderRecursion(root.right);
    console.log(root.val + " --> ");

  }

// level Order Traversal

// preOrderRecursion(node1);

postOrderRecursion(node1);
