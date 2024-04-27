import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptSearchSuggestions = () => {
  const movieSuggestions = useSelector(
    (state) => state.gptSearch?.movieResults
  );

  const movieNames = useSelector((state) => state.gptSearch?.movieNames);
  const listTitles = useSelector((state) => state.gptSearch?.movieNames);

  const isSearchBtnClicked = useSelector(
    (state) => state.gptSearch?.isSearchBtnClicked
  );

  const isShow = isSearchBtnClicked ? "block" : "hidden";

  return (
    <div
      className={`${isShow} top-[22vh] translate-y-52 md:translate-y-80 md:top-[40vh] bg-[rgba(0,0,0,0.6)] m-0 md:m-8 rounded py-2`}
    >
      {isSearchBtnClicked && (
        <>
          {movieSuggestions ? (
            listTitles.map((each, index) => {
              return (
                <MovieList
                  key={each}
                  title={each}
                  movies={movieSuggestions[index]?.results}
                />
              );
            })
          ) : (
            <div className="flex flex-col text-white gap-4 text-center">
              {movieNames ? (
                <div className="chatGpt-movieTitles">
                  <h1 className="font-bold text-2xl text-red-700 my-2 py-4 bg-white">
                    Movies recommended by ChatGPT
                  </h1>
                  {movieNames?.map((each, index) => {
                    return (
                      <div key={index} className="movieName font-bold text-2xl">
                        {`${index + 1} - ${each}`}
                      </div>
                    );
                  })}
                </div>
              ) : (
                <>
                  <h1>Suggestions from ai are loading...</h1>
                </>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};
export default GptSearchSuggestions;
