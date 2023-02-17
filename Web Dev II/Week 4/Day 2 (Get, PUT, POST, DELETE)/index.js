let userList = []

const submitForm = (event) => {
  event.preventDefault();
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  const url = "https://reqres.in/api/register";

  axios
    .post(url, {
      email: email.value,
      password: password.value,
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

const deleteUser = (id) => {

    axios.delete(`https://reqres.in/api/users/${id}`).then((response) => {
    const index = userList.findIndex((data) => data.id === id);

    if (index !== -1) {
        userList.splice(index, 1);
        generateUsersUI(userList);
    }

    }).catch((error) => {
        console.log(error);
    })
}

const generateUsersUI = (array) => {
    const allUsersContainer = document.getElementById("allUsers");

    allUsersContainer.innerHTML = "";

    array.forEach((user) => {
        let div = document.createElement("div");
        div.innerHTML = `
            <img src=${user.avatar}>
            <h4>${user.first_name}</h4>
            <button onClick="deleteUser(${user.id})">Delete</button>
        `;
        allUsersContainer.appendChild(div);

})
}

const getAllUsers = () => {

  axios
    .get("https://reqres.in/api/users")
    .then((response) => {
      userList = response.data.data;
      generateUsersUI(userList);
    })
    .catch((error) => {
      console.log(error);
    });
};


getAllUsers();
