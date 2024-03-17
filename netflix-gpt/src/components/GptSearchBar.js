import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import getMovieSuggestionsFromGPT from "../customHooks/getMovieSuggestionsFromGPT";
import getGptSuggestedMoviesFromTmdb from "../customHooks/getGptSuggestedMoviesFromTmdb";
import { addGptSuggestedMovies } from "../store/slices/gptSlice";

const GptSearchBar = () => {
  const searchInput = useRef();
  const dispatch = useDispatch();
  const selectedLang = useSelector((state) => state?.multiLang?.selectedLang);
  const textConstants = useSelector((state) => state?.multiLang?.textConstants);

  // submit handler
  const gptSearchBarSubmitHandler = (e) => {
    e.preventDefault();
    const searchString = searchInput.current.value;
    // taking movie suggestion from chat gpt and store those movie names to redux store
    getMovieSuggestionsFromGPT(searchString).then((movieNames) => {
      dispatch(addGptSuggestedMovies(movieNames));
      // calling tmdb api's to get those movie's data + storing movie result in redux
      getGptSuggestedMoviesFromTmdb(movieNames, dispatch);
    });
  };

  return (
    <form
      className="p-4 bg-black rounded-xl absolute top-[30vh] left-[50vw] translate-x-[-50%] translate-y-[-30%] w-2/4 flex justify-between"
      onSubmit={gptSearchBarSubmitHandler}
    >
      <input
        ref={searchInput}
        className="p-2 text-black rounded mr-5 w-3/4"
        type="search"
        placeholder={
          textConstants && textConstants[selectedLang]?.searchBarTextContent
        }
      />
      <button type="submit" className="bg-red-700 text-white p-2 w-1/4 rounded">
        {textConstants && textConstants[selectedLang]?.searchBtnTextContent}
      </button>
    </form>
  );
};
export default GptSearchBar;
