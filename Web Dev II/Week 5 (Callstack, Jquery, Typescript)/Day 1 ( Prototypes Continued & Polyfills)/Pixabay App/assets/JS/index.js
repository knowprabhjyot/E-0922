// Pixabay APP (API KEY

// My API KEY
const key = "29150782-5707d3a4d08c27a332eeb798b";
const model = new Model();
let type = "photo";


// Search Button
const searchButton = document.getElementById('search-button');

searchButton.addEventListener('click', () => {
    getPhotos(); // 
})

// Search Input Box
const searchInput = document.getElementById('search-input');

searchInput.addEventListener('keyup', (event) => {

    if (event.code === "Enter") {
      // We have to conditionally handle this for 'Enter' case
      getPhotos();
    }
  
})



function getPhotos() {
    // Fetch me all the photos from the API
    // let newPerson = new Person("Prabh");
    let api = new API(`https://pixabay.com/api?image_type=${type}&key=${key}`);

    // let newPerson = new Person("Prabh");
    // newPerson.walk(2);
    
    api.callAPI(`&q=${searchInput.value}`).then((response) => {

        // I want to save my data inside the models
        model.setData(response); // I am saving API response insside model.setData ===> this.data

        console.log(model.getData());
    })


}