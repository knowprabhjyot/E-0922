const config = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "a1da3b13110340ab19ccd74bee7d1bf9",
};

let trendingMovies = [];
let popularMovies = [];
let topRatedMovies = [];
let upcomingMovies = [];

// LOADING GLIDE DEPENDENCIES
new Glide(".glide", {
  type: "carousel",
  perView: 1,
  focusAt: "center",
  autoPlay: 1000,
}).mount();

// glide.mount();

// URLS
const TRENDING_MOVIES_URL = `${config.baseUrl}/trending/all/day?api_key=${config.apiKey}`;
const POPULAR_MOVIES_URL = `${config.baseUrl}/movie/popular?api_key=${config.apiKey}`;
const TOP_RATED_MOVIES_URL = `${config.baseUrl}/movie/top_rated?api_key=${config.apiKey}`;
const UPCOMING_MOVIES_URL = `${config.baseUrl}/movie/upcoming?api_key=${config.apiKey}`;

// window.addEventListener("load", async () => {

/**
 *
 *
 * @param {*} baseUrl - This is the base api url
 */
const getMovies = async (url) => {
  return await axios.get(url);
};

const generateBannerUI = async () => {
  const slidesContainer = document.getElementById("glidesSlides"); // ul
  let { data } = await getMovies(UPCOMING_MOVIES_URL);

  upcomingMovies = data.results.map((movie) => {
    return {
      title: movie.title,
      posterUrl: `https://image.tmdb.org/t/p/original/${movie.poster_path}`,
      description: movie.overview,
    };
  });

  upcomingMovies.forEach((movie) => {
    const li = document.createElement("li");
    li.classList.add("glide__slide");
    const div = document.createElement("div");
    div.classList.add("row");
    const img = document.createElement("img");
    img.src = movie.posterUrl;

    div.appendChild(img);
    li.appendChild(div);

    slidesContainer.appendChild(li);
  });
};

(async function loadResources() {
  try {
    trendingMovies = await getMovies(TRENDING_MOVIES_URL);
    popularMovies = await getMovies(POPULAR_MOVIES_URL);
    topRatedMovies = await getMovies(TOP_RATED_MOVIES_URL);

    generateBannerUI();
  } catch (error) {
    alert(error);
  }
})();
