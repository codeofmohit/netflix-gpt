import LOGIN_BG from "../constants/codeofmohit_bg.jpeg";
import GptSearchBar from "./GptSearchBar";
import { useSelector } from "react-redux";
import GptSearchSuggestions from "./GptSearchSuggestions";
import MoviePopUp from "./MoviePopUp";

const GptSearchPage = () => {
  const isMoviePop = useSelector((state) => state.movies.moviePopUp);

  return (
    <>
      <img
        className="fixed max-w-none md:max-w-[100%] md:-mt-2"
        src={LOGIN_BG}
        alt="background"
      />
      <div className="gptPageContent w-full relative md:-mt-2">
        <GptSearchBar />
        <GptSearchSuggestions />
        {isMoviePop && <MoviePopUp />}
      </div>
    </>
  );
};
export default GptSearchPage;
