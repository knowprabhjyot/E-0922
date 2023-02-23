// Pixabay APP (API KEY

// My API KEY
const key = "29150782-5707d3a4d08c27a332eeb798b";
const model = new Model();
let type = "photo";
let list = document.getElementById("photo-grid-id");

// Search Button
const searchButton = document.getElementById("search-button");

searchButton.addEventListener("click", () => {
  getPhotos(); //
});

// Search Input Box
const searchInput = document.getElementById("search-input");

// Radio button 1 (PHOTO)
const radioButton1 = document.getElementById("btnradio1");
radioButton1.addEventListener("click", () => {
  type = radioButton1.value;
});

// Radio button 2 (PHOTO)
const radioButton2 = document.getElementById("btnradio2");
radioButton2.addEventListener("click", () => {
  type = radioButton2.value;
});

searchInput.addEventListener("keyup", (event) => {
  if (event.code === "Enter") {
    // We have to conditionally handle this for 'Enter' case
    getPhotos();
  }
});

function getPhotos() {
  // Fetch me all the photos from the API
  // let newPerson = new Person("Prabh");
  // let fieldType = type === "video" ? '/videos' : `&image_type=${type}`;
  // let api = new API(`https://pixabay.com/api?key=${key}${fieldType}`);
  let api;
  if (type === "video") {
    api = new API(
      `https://pixabay.com/api/videos/?key=${key}&q=${searchInput.value}`
    );
  } else {
    api = new API(`https://pixabay.com/api/?key=${key}&q=${searchInput.value}`);
  }

  // let newPerson = new Person("Prabh");
  // newPerson.walk(2);

  api.callAPI(`&q=${searchInput.value}`).then((response) => {
    // I want to save my data inside the models
    model.setData(response); // I am saving API response insside model.setData ===> this.data
    console.log(response);
    displayPhotos(response, type);
  });
}

function displayPhotos(arr, type) {
  list.innerHTML = "";
  arr.hits.forEach((item) => {
    list.innerHTML += `
        <div class="col-md-4 col-sm-6 col-xs-12 position-relative p-2">
            <button class="btn btn-dark position-absolute">
                <i class="bi bi-heart"></i>
            </button>

            ${
              type === "photo"
                ? `<img src="${item.largeImageURL}" class="card-img img-fluid h-100" alt="${item.largeImageURL} > `
                : `<video autoplay class="placeholder-glow object-fit-cover img-fluid h-100" src=${item.videos.small.url}></video>`
            }  
            <h5 class="text-white card-title">${item.user}</h5>
            <p class="card-text text-white">${item.tags}</p>
            <p class="card-text text-white">${item.likes}</p>
        </div>
        `;
  });
}
