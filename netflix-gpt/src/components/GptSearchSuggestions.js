import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptSearchSuggestions = () => {
  const movieSuggestions = useSelector(
    (state) => state.gptSearch?.movieResults
  );
  const listTitles = useSelector((state) => state.gptSearch?.movieNames);

  console.log("search suggestion component re-render");

  return (
    <div className="absolute top-[40vh] bg-[rgba(0,0,0,0.6)] m-8">
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
