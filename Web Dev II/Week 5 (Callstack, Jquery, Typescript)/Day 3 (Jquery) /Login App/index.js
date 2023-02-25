$(".tablinks").click(function (event) {
  showTab(event, $(this).attr("data-tab"));
});

function showTab(event, tabName) {
  $(".tabcontent").hide();
  $(".tablinks").removeClass("active");
  $(`#${tabName}`).show();
  console.log(event.currentTarget, "current Target");
  $(event.currentTarget).addClass("active");
}

$("#login").submit(function (event) {
  event.preventDefault();

  let email = $("#loginEmail").val();
  let password = $("#loginPassword").val();

  if (!validateEmail(email)) {
    $("#emailError").text("Please enter a valid email address");
  }

  if (password.length < 8) {
    $("#passwordError").text(
      "Please enter a password which is bigger than 8 characters"
    );
  }

  if (validateEmail(email) && password.length > 8) {
    $("#emailError").text("");
    $("#passwordError").text("");
    console.log({
      email,
      password,
    });
  }

});

// Assignment (JQUERY)
// Do the same things for register form
// You have to call an API using Jquery

function validateEmail(email) {
  let regex = /\S+@\S+\.\S+/;
  return regex.test(email);
}
