import { useSelector } from "react-redux";

const makeSuggestedMovieListFromStore = () => {
  const movieTitles = useSelector((state) => state.gptSearch.movieNames);
};
export default makeSuggestedMovieListFromStore;
