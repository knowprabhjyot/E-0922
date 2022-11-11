// FIFO - First in First Out

// LILO - Last in last Out

let queue = [];

function addQueue(val) {
    queue.push(val);
}

function deQueue() {
    queue.shift();
}

function getQueue() {
    return queue;
}

addQueue(10);
addQueue(20);
addQueue(30);

deQueue();

console.log(getQueue());
