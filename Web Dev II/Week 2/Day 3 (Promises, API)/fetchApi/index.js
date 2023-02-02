
// I AM NOT A GIVING METHOD (GET)
fetch('https://reqres.in/api/users/2').then((response) => {
    return response.json();
}).then((finalOutput) => {
    console.log(finalOutput);
})

