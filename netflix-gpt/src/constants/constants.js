export const USER_AVATAR =
  "https://ik.imagekit.io/3buj7rcwco/user_icon.png?updatedAt=1710247789248";

export const LOADER_BTN_CONTENT =
  '<div className="flex justify-center items-center"><span>signing in/up ...  </span> &nbsp; &nbsp;<div className="loader"></div></div>';

export const API_URL_NOW_PLAYING =
  "https://api.themoviedb.org/3/movie/now_playing";

export const API_URL_POPULAR = "https://api.themoviedb.org/3/movie/popular";

export const API_URL_TOP_RATED = "https://api.themoviedb.org/3/movie/top_rated";

export const API_URL_UPCOMING = "https://api.themoviedb.org/3/movie/upcoming";

export const API_VIDEOS_FROM_ID = "https://api.themoviedb.org/3/movie/";

export const MOVIE_POSTER_URL = "https://image.tmdb.org/t/p/w185";

export const TMDB_MOIVE_SEARCH =
  "https://api.themoviedb.org/3/search/movie?query=";

export const TMDB_API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: process.env.REACT_APP_TMDB_OPTION,
  },
};

export const multiLangOptions = [
  { type: "english", value: "english" },
  { type: "hindi", value: "hindi" },
  { type: "spanish", value: "spanish" },
];

export const gptQueryGenerator = (searchString) => {
  const query = `act as a movie recommendation system and recommend me movies names for this specfic query : ${searchString} , only give me 10 comma seprated movie names as result, For example for query : indian old is gold movies, result : gadar,sholey,don,golmaal,kabhi khushi kabhi gam. Note: i will need to create an array of the movie names which you will give me so always give me comma seprated movie names as result, do not include any other text or empty spaces before or after comma`;
  return query;
};

export const YOUTUBE_TRAILER_URL = "https://www.youtube.com/watch?v=";
export const YOUTUBE_QUERY_URL =
  "https://www.youtube.com/results?search_query=";
