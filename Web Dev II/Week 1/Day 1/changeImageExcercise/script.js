const changeMeButton = document.querySelector("#changeMe");
const image = document.querySelector("#myImage");

const showMeButton = document.getElementById('showMe');
const hideMeButton = document.getElementById('hideMe');


const orignalImageSource = image.src; // Here I am saving the state of the orignal image
let isToggle = false; // By default the button is not clicked

console.log(changeMeButton); // We are able to access it

// Add Event Listener is a method inside every element/node which will allow you to perform a particular event
// THe first parameter is - the type of event you want to fire (For example here in our case its a CLICK event)
// The second parameter is - What you want to perfrom when someone clicks
changeMeButton.addEventListener("click", function () {
  // I want to change the Image src when I click over it

  if (isToggle === false) {
    image.src =
      "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80";
    isToggle = true;
  } else {
    image.src = orignalImageSource;
    isToggle = false;
  }
});



function hideMyImage() {

    // Through this you can add classes directly
    image.classList.add('displayNone');
    hideMeButton.classList.add('displayNone');


    showMeButton.classList.remove('displayNone');
}

function showMyImage() {
    // Through this you can removes classes directly
    image.classList.remove('displayNone');

    hideMeButton.classList.remove('displayNone');

    showMeButton.classList.add('displayNone');

    // Or you can use this, but add the class in css
    // image.classList.add('displayBlock');
}



// BLOCK ELEMENT JS **********************

let blockItem = document.querySelector('.block');

blockItem.addEventListener('mouseover', changeBackground);

// ASSIGNMENT - CHANGE THE BLOCK CSS BACK AGAIN WHEN THE MOUSEOUT event is fired and style property

function changeBackground() {
    blockItem.style.background = "green";
    blockItem.style.border = "10px solid black";
}