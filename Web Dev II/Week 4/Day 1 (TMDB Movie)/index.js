const config = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "a1da3b13110340ab19ccd74bee7d1bf9",
};

let trendingMovies = [];
let popularMovies = [];
let topRatedMovies = [];
let upcomingMovies = [];

// URLS
const TRENDING_MOVIES_URL = `${config.baseUrl}/trending/all/day?api_key=${config.apiKey}`;
const POPULAR_MOVIES_URL = `${config.baseUrl}/movie/popular?api_key=${config.apiKey}`;
const TOP_RATED_MOVIES_URL = `${config.baseUrl}/movie/top_rated?api_key=${config.apiKey}`;
const UPCOMING_MOVIES_URL = `${config.baseUrl}/movie/upcoming?api_key=${config.apiKey}`;

/**
 *
 *
 * @param {*} baseUrl - This is the base api url
 */
const getMovies = async (url) => {
  return await axios.get(url);
};

const manipulateArray = (data) => {
  return data.results.map((movie) => {
    return {
      title: movie.title,
      posterUrl: `https://image.tmdb.org/t/p/original/${movie.poster_path}`,
      description: movie.overview,
    };
  });
};

const generateBannerUI = async () => {
  const slidesContainer = document.getElementById("glidesSlides"); // ul
  let { data } = await getMovies(UPCOMING_MOVIES_URL);

  console.log(data, "data in generate Banner");
  upcomingMovies = manipulateArray(data);

  upcomingMovies.forEach((movie) => {
    const li = document.createElement("li");
    li.classList.add("glide__slide");
    const div = document.createElement("div");
    div.classList.add("row");
    const img = document.createElement("img");
    img.src = movie.posterUrl;

    const textContainer = document.createElement("div");

    const title = document.createElement("h1");
    title.textContent = movie.title;

    const description = document.createElement("p");
    description.textContent = movie.description;
    textContainer.append(title, description);

    div.classList.add("banner-container");
    div.append(img, textContainer);

    li.appendChild(div);

    slidesContainer.appendChild(li);

    // LOADING GLIDE DEPENDENCIES
    new Glide(".glide", {
      type: "carousel",
      perView: 1,
      focusAt: "center",
      // autoPlay: 1000,
    }).mount();
  });
};

const generateMovieUI = async () => {
  let { data } = await getMovies(TRENDING_MOVIES_URL);
  console.log(data, "data in generate Movie UI");

  trendingMovies = manipulateArray(data);

  let trendingMovieContainer = document.getElementById("trendingMovies");

  trendingMovies.map((trendingMovie) => {
    const li = document.createElement("li");
    const img = document.createElement("img");
    img.src = trendingMovie.posterUrl;

    li.appendChild(img);
    trendingMovieContainer.appendChild(li);
  });

  let popularMoviesResponse = await getMovies(POPULAR_MOVIES_URL);

  popularMovies = manipulateArray(popularMoviesResponse.data);

  let popularMovieContainer = document.getElementById("popularMovies");
  popularMovies.map((popularMovie) => {
    const li = document.createElement("li");
    const img = document.createElement("img");
    img.src = popularMovie.posterUrl;

    li.appendChild(img);
    popularMovieContainer.appendChild(li);
  });

  // LOADING GLIDE DEPENDENCIES
  new Glide(".glide-section", {
    type: "carousel",
    perView: 4,
    focusAt: "center",
    // autoPlay: 1000,
  }).mount();

  new Glide(".glide-section2", {
    type: "carousel",
    perView: 4,
    focusAt: "center",
    // autoPlay: 1000,
  }).mount();

  topRatedMovies = await getMovies(TOP_RATED_MOVIES_URL);
};

async function loadResources() {
  try {
    generateBannerUI();
    generateMovieUI();
  } catch (error) {
    alert(error);
  }
}

loadResources();
