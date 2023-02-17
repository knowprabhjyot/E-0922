const config = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "a1da3b13110340ab19ccd74bee7d1bf9",
};

let trendingMovies = [];
let popularMovies = [];
let topRatedMovies = [];

// Using this array for Banner
let upcomingMovies = [];

// Register Plugin for scroll trigger
gsap.registerPlugin(ScrollTrigger);




// URLS
const TRENDING_MOVIES_URL = `${config.baseUrl}/trending/all/day?api_key=${config.apiKey}`;
const POPULAR_MOVIES_URL = `${config.baseUrl}/movie/popular?api_key=${config.apiKey}`;
const TOP_RATED_MOVIES_URL = `${config.baseUrl}/movie/top_rated?api_key=${config.apiKey}`;
const UPCOMING_MOVIES_URL = `${config.baseUrl}/movie/upcoming?api_key=${config.apiKey}`;
const SEARCH_MOVIE_URL = `${config.baseUrl}/search/movie?api_key=${config.apiKey}`;
/**
 *
 *
 * @param {*} baseUrl - This is the base api url
 */
const getMovies = async (url, keyword) => {
  const apiUrl = keyword ? `${url}&query=${keyword}` : url;
  return await axios.get(apiUrl);
};

/**
 *
 * @param {*} data this is the parameter object
 * @return {*} manipulated array so that we can use it accordingly
 */
const manipulateArray = (data) => {
  return data.results.map((movie) => {
    return {
      title: movie.title || movie.name || movie.orignal_title,
      posterUrl: `https://image.tmdb.org/t/p/original/${movie.poster_path}`,
      description: movie.overview,
    };
  });
};

const showBannerModal = () => {
  alert("Hello");
};

const generateBannerUI = async (data) => {
  const slidesContainer = document.getElementById("glidesSlides"); // ul
  slidesContainer.innerHTML = "";
  // Manipulate the array so that we can use it based on our understanding
  upcomingMovies = manipulateArray(data);

  upcomingMovies.forEach((movie) => {
    const li = document.createElement("li");
    li.classList.add("glide__slide");
    const div = document.createElement("div");
    div.classList.add("row");
    div.classList.add("slides");
    const img = document.createElement("img");
    img.src = movie.posterUrl;

    img.width = "80%";

    const textContainer = document.createElement("div");

    const title = document.createElement("h1");
    title.textContent = movie.title;

    const description = document.createElement("p");
    description.textContent = movie.description;

    // Trailer Button
    const trailerButton = document.createElement("div");

    trailerButton.innerHTML = `<button data-toggle="modal" data-target="#exampleModal"  class="trailer-button">Play Trailer</button>`;
    // trailerButton.textContent = "Play Trailer";

    // trailerButton.classList.add('trailer-button');

    // trailerButton.addEventListener('click', () => {
    //     alert("hi");
    // });

    textContainer.append(title, description, trailerButton);

    div.classList.add("banner-container");
    div.append(img, textContainer);

    li.appendChild(div);

    slidesContainer.appendChild(li);

    // LOADING GLIDE DEPENDENCIES
    // new Glide(".glide", {
    //   type: "carousel",
    //   perView: 1,
    //   focusAt: "center",
    //   autoPlay: 1000,
    // }).mount();

    new Glide(".glide", {
      type: "carousel",
      startAt: 0,
      //   autoplay: 4000,
      hoverpause: false,
      gap: 5,
      perView: 1,
    }).mount();
  });
};

/**
 *
 * @param {*} array
 * @param {*} container Here we made a common function which will create sections below the banner
 */
const generateSectionUI = (array, container) => {
  console.log(array);
  array.forEach((movie) => {
    const li = document.createElement("li");
    li.classList.add('card-container');
    const img = document.createElement("img");
    const title = document.createElement("h6");
    title.textContent = movie.title;
    img.src = movie.posterUrl;

    li.append(img, title);
    container.appendChild(li);

    // LOADING GLIDE DEPENDENCIES
  });
};

const generateMovieUI = async () => {
  let { data } = await getMovies(TRENDING_MOVIES_URL);

  trendingMovies = manipulateArray(data);

  let trendingMovieContainer = document.getElementById("trendingMovies");

  generateSectionUI(trendingMovies, trendingMovieContainer, "#glide-section1");

  new Glide("#glide-section1", {
    type: "carousel",
    perView: 4,
    focusAt: "center",
    autoPlay: 1000,
  }).mount();

  let popularMoviesResponse = await getMovies(POPULAR_MOVIES_URL);

  popularMovies = manipulateArray(popularMoviesResponse.data);

  let popularMovieContainer = document.getElementById("popularMovies");
  generateSectionUI(popularMovies, popularMovieContainer);

  new Glide("#glide-section2", {
    type: "carousel",
    perView: 4,
    focusAt: "center",
    autoPlay: 1000,
  }).mount();

  let topRatedMoviesResponse = await getMovies(TOP_RATED_MOVIES_URL);

  topRatedMovies = manipulateArray(topRatedMoviesResponse.data);

  let topRatedMoviesContainer = document.getElementById("topRatedMovies");
  generateSectionUI(topRatedMovies, topRatedMoviesContainer);

  new Glide("#glide-section3", {
    type: "carousel",
    perView: 4,
    focusAt: "center",
    autoPlay: 1000,
  }).mount();
};

async function loadResources() {
  try {
    let { data } = await getMovies(UPCOMING_MOVIES_URL);
    generateBannerUI(data);
    generateMovieUI();
  } catch (error) {
    alert(error);
  }
}

/**
 * This movie searches whatever was typed
 */
const searchMovie = async () => {
  const keyword = document.getElementById("search-input");
  const searchMainContainer = document.getElementById("searched-movies-main");

  // So We want to remove the display none class that was already there!
  searchMainContainer.classList.remove("display-none");

  const searchContainerUL = document.getElementById("searchedMoviesUL");
  searchContainerUL.innerHTML = "";

  let { data } = await getMovies(SEARCH_MOVIE_URL, keyword.value);
  // generateBannerUI(data);
  let searchedMovies = manipulateArray(data);

  generateSectionUI(searchedMovies, searchContainerUL);

  new Glide("#glide-section4", {
    type: "carousel",
    perView: 4,
    focusAt: "center",
    autoPlay: 1000,
  }).mount();
};

loadResources();



// GSAP ANIMATIONS

gsap.from(".title_trending", {
    duration: 1,
    scrollTrigger: ".title_trending",
    opacity: 0,
    x: -60
})


gsap.from(".card-container", {
    duration: 1,
    scrollTrigger: ".card-container",
    opacity: 0,
    x: -60
})

