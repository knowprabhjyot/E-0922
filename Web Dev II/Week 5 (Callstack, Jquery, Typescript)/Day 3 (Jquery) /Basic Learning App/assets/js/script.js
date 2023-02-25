// Selectors
//Here h1 is a selector
// .html is an action
$("h1").html("New Text");
// This is similar to the above statement
// document.getElementsByTagName('h1')[0].innerHTML = "New Text";

$('h1').addClass('heading');
$('h1').css("font-size", "80px");
$('h1').css("padding", "20px");


$('h1').append("<span>-Hey</span>")


$('h1').prepend("<span>Yo-</span>")

// $(document).ready(function() {
//     alert("Page is loaded now");
// })


// Events
$('h1').click(() => {
    // alert('Hey I was clicked');

    // Change color to blue to when we click over h1 tag
    $('h1').css("color", "blue");
})

$('h1').hover(() => {
    $('h1').css('transform', 'scale(2)')
})


// Animations 

$('button').click(() => {
    $('p').fadeToggle('slow');

    // $('p').animate({
    //     fontSize: "40px"
    // }, "slow");
})


// Fetch Data from JSON
$.getJSON("./assets/data/data.json", function(data) {
     $('#heading1').html(data.author);
})

// Call API
$.get('https://jsonplaceholder.typicode.com/users', function(data) {
    console.log(data);
})

// event
$('input').change("keydown", (event) => {
    $('p:first').html(event.target.value);
})