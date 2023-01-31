let numbers = [3, 1, 4, 2, 5];

numbers.sort();

console.log(numbers);

let people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 40 },
  { name: "Charlie", age: 25 },
];

people.sort((a, b) => {
    if (a.age > b.age) {
        return 1; // Ascending
    } else if (b.age > a.age) {
        return -1; // Ascending
    } else {
        return 0; 
    }
});

people.sort((a, b) => {
    if (a.age > b.age) {
        return -1; // Descending
    } else if (b.age > a.age) {
        return 1; // Descending
    } else {
        return 0; 
    }
});

console.log(people);