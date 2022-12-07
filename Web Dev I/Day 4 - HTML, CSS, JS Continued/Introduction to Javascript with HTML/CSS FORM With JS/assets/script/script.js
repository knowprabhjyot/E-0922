// Lets add JS here!

// This is an array which will hold the list of users
let userList = [];

// Create user Object
let newUser = {}; // Because since its an object the reference was the same


function setFirstName(event) {
    newUser.firstName = event.target.value;
}

function setLastName(event) {
    newUser.lastName = event.target.value;
}

function setEmail(event) {
    newUser.email = event.target.value;
}

function setDOB(event) {
    newUser.dob = event.target.value;
}

function setGender(event) {
    newUser.gender= event.target.value;
}

function setPassword(event) {
    newUser.password = event.target.value;
}

function setContact(event) {
    newUser.contact = event.target.value;
}

function setHobbies(event) {
}

function uploadImage(event) {
    // Here we are targetting only one file upload at a time
    newUser.uploadedImage = event.target.files[0];
    console.log(event.target.files);
}


function submitForm(event) {
    // console.log("form submitted!");

    // So we are skipping the default behavior of a form to send information through the
    // actions which we didn't declare!
    event.preventDefault();
    console.log(newUser);

    userList.push(newUser);
}

function showUserList() {
 console.log(userList, "total users");
}

// Write now the data will be replicated everytime with the last submitted value.
// Because of pass by reference, which means the object that we are saving inside the array is pointing to the same object everytime!