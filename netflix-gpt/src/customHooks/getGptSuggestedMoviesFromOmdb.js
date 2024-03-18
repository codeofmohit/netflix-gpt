import { OMDB_API } from "../constants/constants";

const getGptSuggestedMoviesFromOmdb = () => {
  const api_url = OMDB_API;

  const fetchMovieFromOMDB = async () => {
    try {
      const response = await fetch(api_url + "&t=baazigar&plot=full");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log("error while fetching movie from omdb : " + error);
    }
  };
  fetchMovieFromOMDB();
};
export default getGptSuggestedMoviesFromOmdb;
