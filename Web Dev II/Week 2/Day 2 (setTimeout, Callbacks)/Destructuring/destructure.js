// Destructuring in Objects

let car = {
    make: "BMW",
    model: "3 series",
    topSpeed: 200,
    isSportsCar: true
}

// let make  = car.make;
// let isSportsCar = car.isSportsCar;

// Audi is not given the preference because make =  BMW already existed
let { make = "Audi", model, isSportsCar, year = 2022 } = car;
console.log(make, model, isSportsCar, year); // We will get undefined for year, because year doesnt exist in the car object


// Destructuring in Arrays

let carList = ["Ferrari", "Audi", "BMW", "Toyota", "Suzuki"];

let [carA] = carList; // Ferrai

let [carAA, carBB] = carList;  // Ferrari, Audi

// carAAA already exists = Ferrari, hence preference is given to it
let [carAAA = "Kia", carBBB, carCCC, carDDD, carEEE, carFFF = "Buggati", carJJJ = "Chrysler"] = carList;
console.log(carFFF, carJJJ, carAAA);

// Destructuring is a concept accessing values and not modifying it




// I want to filter those employees which have completed more than 10 and less than 15 years.
// If they have completed 10 years with the company, company wants to give them an honour Award
let employeeList = [
    {
        id: 1,
        name: "Mike",
        dateJoined: 2010,
        department: "HR" // Eliglble
    },
    {
        id: 2,
        name: "Stacy",
        dateJoined: 2008, // Not Eligible
        department: "IT"
    },
    {
        id: 3,
        name: "Daniel",
        dateJoined: 2022, // Not Eligible
        department: "HR"
    },
    {
        id: 4,
        name: "Yoko", // Not Eligible
        dateJoined: 2021,
        department: "IT"
    },

]

// employee = {}
let honourEmployees = employeeList.filter(({ dateJoined, name, department, email = "default@ciccc.ca" }, index) => {
    let currentYear = new Date().getFullYear(); // 2023
    // 2023 - 2008 = 15
    if (currentYear - dateJoined >= 10 && currentYear - dateJoined < 15) {
        return true;
    }
})



// Destructuring example
// import { compoennt } from 'react';


// Hooks in React, destructuring of Array
// let [age, setAge] = useState("");