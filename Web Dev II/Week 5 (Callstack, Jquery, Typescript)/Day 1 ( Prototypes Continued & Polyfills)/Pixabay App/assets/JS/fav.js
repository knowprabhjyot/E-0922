const modelValue = new Model();
const list = document.getElementById("photo-grid-favorites");
const favoritesList = modelValue.getFavorites() || [];
console.log(favoritesList, "Favorites");

if (favoritesList.length === 0) {
  const div = document.createElement("div");
  div.innerHTML = "<p class='text-center'>There are no favorites yet!</p>";

  list.appendChild(div);
}

function displayPhotosForFavorites() {
  favoritesList.forEach((item) => {
    list.innerHTML += `
        <div class="col-md-4 col-sm-6 col-xs-12 position-relative p-2">

        <img src="${item.largeImageURL}" class="card-img img-fluid h-100" alt="${item.imageURL} > 
        <h5 class="text-white card-title">${item.user}</h5>
          <p class="card-text text-white">${item.tags}</p>
        <p class="card-text text-white">${item.likes}</p>
        </div>
        `;
  });
}

displayPhotosForFavorites();

// function displayPhotos(arr, type) {
//     list.innerHTML = "";
//     arr.forEach((item) => {
//       list.innerHTML += `
//           <div class="col-md-4 col-sm-6 col-xs-12 position-relative p-2">
//               <button onclick="setFavorite(${item.id})" class="btn btn-dark position-absolute">
//                   <i class="bi bi-heart"></i>
//               </button>

//               ${
//                 type === "photo"
//                   ? `<img src="${item.largeImageURL}" class="card-img img-fluid h-100" alt="${item.imageURL} > `
//                   : `<video mute autoplay class="placeholder-glow object-fit-cover img-fluid h-100" src=${item.videos.tiny.url}></video>`
//               }
//               <h5 class="text-white card-title">${item.user}</h5>
//               <p class="card-text text-white">${item.tags}</p>
//               <p class="card-text text-white">${item.likes}</p>
//           </div>
//           `;
//     });
//   }
