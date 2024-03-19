import { useMemo } from "react";

import { useSelector } from "react-redux";

import Header from "./Header";
import useGetMoviesLists from "../customHooks/useGetMoviesLists";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearchPage from "./GptSearchPage";
import useMoveTextConstantsIntoStore from "../customHooks/useMoveTextConstantsIntoStore";
import MoviePopUp from "./MoviePopUp";

const Browse = () => {
  const isGptSearchBtnClicked = useSelector(
    (state) => state.gptSearch?.isClicked
  );

  const isMoviePop = useSelector((state) => state.movies.moviePopUp);

  // hooks for fetching movie lists from api's and storing into redux store
  useGetMoviesLists();
  // load langConstant for multi language from constant file and move it into redux
  useMoveTextConstantsIntoStore();

  // memoizing header
  const memoizedHeader = useMemo(() => {
    return <Header />;
  }, []);

  return (
    <div>
      {memoizedHeader}
      {isGptSearchBtnClicked ? (
        <>
          <MainContainer />
          <SecondaryContainer />
          {isMoviePop && <MoviePopUp />}
        </>
      ) : (
        <GptSearchPage />
      )}
    </div>
  );
};
export default Browse;
