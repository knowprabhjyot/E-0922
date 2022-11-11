// FILO  - First in last Out
// LIFO - Last in First Out

let stack = [];

// POP
// PUSH

function push(val) {
    stack.push(val);
}

function getStack() {
    return stack;
}

function pop() {
    stack.pop();
}

push(10);
push(20);
push(30);
push(40)

pop();

console.log(getStack());