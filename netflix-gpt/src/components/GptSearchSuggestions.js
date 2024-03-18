import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptSearchSuggestions = () => {
  const movieSuggestions = useSelector(
    (state) => state.gptSearch?.movieResults
  );
  const listTitles = useSelector((state) => state.gptSearch?.movieNames);

  if (!movieSuggestions) {
    return;
  }

  return (
    <div className="absolute top-[22vh] md:top-[40vh] bg-[rgba(0,0,0,0.6)] m-0 md:m-8 mt-8 md:mt-[unset] rounded">
      {movieSuggestions &&
        listTitles.map((each, index) => {
          return (
            <MovieList
              key={each}
              title={each}
              movies={movieSuggestions[index]?.results}
            />
          );
        })}
    </div>
  );
};
export default GptSearchSuggestions;
