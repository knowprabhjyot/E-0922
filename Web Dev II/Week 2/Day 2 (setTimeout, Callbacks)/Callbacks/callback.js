

function greeting(name) {
    alert(`Welcome ${name}`);
    console.log(`Welcome to the College ${name}!`);
}

function startCollege(callback) {
    let name = prompt('Please enter your name!');
    callback(name);
}

startCollege(greeting);


let array = [1,2,3,4];

let modifiedArray = array.map(cb);

function cb(item) {
    return item * 2;
}