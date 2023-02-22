// Right now this is constructor function, so when I make an instance of it i have to provide baseURL
function API(baseUrl) {
  // base URL
  this.baseURL = baseUrl;
}

function Person(name) {
    this.personName = name;
}

// let newPerson = new Person("Prabh");

// Person.prototype.walk = function(speed) {
//     console.log(this.personName +  " is walking at a speed of " + speed);
// }

// Make another prototype where I want to call a particular API
API.prototype.callAPI = function (endpoint) {
  return fetch(this.baseURL + endpoint)
    .then((response) => response.json())
    .catch((err) => console.log(err));
};
